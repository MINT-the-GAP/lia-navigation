import { ensureStyle } from "./styles";
import { loadState, saveState } from "./storage";
import {
  findTOC,
  isOverviewRoot,
  extractHashFromHref,
  getOriginalLinks,
  getOriginalActiveHash,
  killSearchAnywhere,
  findOverviewControl,
  pinOverviewBottom,
  unhideAllHidden,
  hideOriginalNavigation,
} from "./toc";
import {
  TreeNode,
  getLevelFromDOM,
  getIndentPx,
  mapIndentLevels,
  buildTree,
  collectForceOpen,
} from "./tree";
import { renderTree } from "./render";

import { ROOT_DOC } from "./context";

export function cleanup(toc: HTMLElement): void {
  try {
    if (!toc) return;

    const box = toc.querySelector("#lia-bm-toc5");
    if (box) box.remove();

    unhideAllHidden(toc);

    toc.classList.remove("lia-bm-toc5-active");
    try {
      toc
        .querySelectorAll(".lia-bm-overview-pin")
        .forEach((el) => el.classList.remove("lia-bm-overview-pin"));
    } catch (e) {}
  } catch (e) {}
}

export function syncActive(toc: HTMLElement): void {
  try {
    if (!toc) return;
    const box = toc.querySelector ? toc.querySelector("#lia-bm-toc5") : null;
    if (!box) return;

    const activeHash = getOriginalActiveHash(toc);
    if (!activeHash) return;

    box
      .querySelectorAll(".bm-row.bm-active")
      .forEach((r) => r.classList.remove("bm-active"));

    const links = Array.from(box.querySelectorAll<HTMLAnchorElement>('a[href*="#"]'));
    const needle = "#" + activeHash;
    const a = links.find((x) => (x.getAttribute("href") || "").includes(needle));
    if (a && a.closest) {
      const row = a.closest(".bm-row");
      if (row) row.classList.add("bm-active");
    }
  } catch (e) {}
}

let LOCK = false;

export function enhance(): boolean {
  if (LOCK) return false;
  LOCK = true;

  try {
    const toc = findTOC();
    if (!toc) return false;

    if (isOverviewRoot()) {
      cleanup(toc);
      return false;
    }

    const TOC_DOC = toc.ownerDocument || ROOT_DOC || document;

    ensureStyle(TOC_DOC);
    ensureStyle(ROOT_DOC);
    if (ROOT_DOC !== document) ensureStyle(document);

    unhideAllHidden(toc);
    killSearchAnywhere(toc);

    const toolbar = toc.querySelector<HTMLElement>(".lia-toolbar");

    const overviewBtn = findOverviewControl(toc);
    const overviewChild = pinOverviewBottom(toc, overviewBtn);

    if (overviewBtn && !overviewBtn.getAttribute("data-lia-bm-hooked")) {
      overviewBtn.setAttribute("data-lia-bm-hooked", "1");
      overviewBtn.addEventListener(
        "click",
        () => {
          const t = findTOC();
          if (t) cleanup(t);
        },
        true
      );
    }

    const old = toc.querySelector("#lia-bm-toc5");
    if (old) old.remove();

    const links = getOriginalLinks(toc);
    if (!links.length) return false;

    const nodes: TreeNode[] = [];
    const seen = new Set<string>();
    links.forEach((a) => {
      const hash = extractHashFromHref(a.getAttribute("href") || "");
      if (!hash) return;

      const key = "h:" + hash;
      if (seen.has(key)) return;
      seen.add(key);

      const lvl = getLevelFromDOM(a, toc);
      nodes.push({
        key,
        hash,
        text: (a.textContent || "").trim().replace(/\s+/g, " "),
        level: lvl || 0,
        indent: getIndentPx(a),
      });
    });

    mapIndentLevels(nodes);
    const tree = buildTree(nodes);

    const state = loadState();
    const activeHash = getOriginalActiveHash(toc) || "";

    (function initDefaults(list: TreeNode[]) {
      for (const n of list) {
        if (n.children && n.children.length) {
          if (state[n.key] !== 0 && state[n.key] !== 1) state[n.key] = 0;
          initDefaults(n.children);
        }
      }
    })(tree);

    const forceOpen = activeHash
      ? collectForceOpen(tree, activeHash)
      : new Set<string>();

    const box = TOC_DOC.createElement("div");
    box.id = "lia-bm-toc5";
    box.appendChild(renderTree(TOC_DOC, toc, tree, state, activeHash, forceOpen, syncActive));

    if (toolbar && toolbar.parentElement === toc)
      toolbar.insertAdjacentElement("afterend", box);
    else toc.insertBefore(box, toc.firstChild);

    toc.classList.add("lia-bm-toc5-active");

    hideOriginalNavigation(toc, toolbar, box, overviewChild);

    saveState(state);
    return true;
  } catch (e) {
    return false;
  } finally {
    LOCK = false;
  }
}
