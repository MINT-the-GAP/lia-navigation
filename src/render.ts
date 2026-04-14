import { TreeNode } from "./tree";
import { saveState } from "./storage";
import { findOriginalLinkByHash, clickOriginalByHash } from "./toc";

import { ROOT } from "./context";

export function setCollapsed(
  row: HTMLElement,
  childWrap: HTMLElement | null,
  open: boolean
): void {
  row.classList.toggle("bm-open", !!open);
  if (childWrap) childWrap.classList.toggle("bm-hidden", !open);
}

export function setGlyph(btn: HTMLElement | null, open: boolean): void {
  if (!btn) return;

  btn.setAttribute("aria-expanded", open ? "true" : "false");
  btn.setAttribute("data-open", open ? "true" : "false");

  if (!btn.querySelector("svg")) {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M8 6 L17 12 L8 18 Z" fill="currentColor"></path>
      </svg>
    `.trim();
  }
}

export function renderTree(
  doc: Document,
  toc: HTMLElement,
  nodes: TreeNode[],
  state: Record<string, number>,
  activeHash: string,
  forceOpen: Set<string>,
  syncActive: (toc: HTMLElement) => void
): HTMLUListElement {
  const ul = doc.createElement("ul");
  ul.className = "bm-list";

  for (const n of nodes) {
    const li = doc.createElement("li");

    const row = doc.createElement("div");
    row.className = "bm-row";
    row.dataset.level = String(n.level);

    const hasKids = n.children && n.children.length;
    if (hasKids) li.classList.add("bm-has-kids");
    let childWrap: HTMLUListElement | null = null;
    const mustOpen =
      (forceOpen && forceOpen.has(n.key)) || state[n.key] === 1;

    let btn: HTMLButtonElement | null = null;

    if (hasKids) {
      btn = doc.createElement("button");
      btn.type = "button";
      btn.className = "bm-toggle";
      btn.setAttribute("aria-label", "Toggle section");
      row.appendChild(btn);
    } else {
      const sp = doc.createElement("span");
      sp.className = "bm-spacer";
      row.appendChild(sp);
    }

    const a = doc.createElement("a");
    a.textContent = n.text;

    const orig = findOriginalLinkByHash(toc, n.hash);
    a.href =
      orig && orig.getAttribute
        ? orig.getAttribute("href") || "#" + n.hash
        : "#" + n.hash;

    if (n.hash === activeHash) row.classList.add("bm-active");

    if (hasKids) {
      childWrap = doc.createElement("ul");
      childWrap.className = "bm-children";
    }

    setCollapsed(row, childWrap, mustOpen);
    if (btn) setGlyph(btn, mustOpen);

    if (btn) {
      btn.addEventListener(
        "click",
        (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

          const nowOpen = !row.classList.contains("bm-open");
          state[n.key] = nowOpen ? 1 : 0;
          saveState(state);

          setCollapsed(row, childWrap, nowOpen);
          setGlyph(btn, nowOpen);
        },
        true
      );
    }

    a.addEventListener(
      "click",
      (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();

        if (hasKids && !row.classList.contains("bm-open")) {
          state[n.key] = 1;
          saveState(state);
          setCollapsed(row, childWrap, true);
          if (btn) setGlyph(btn, true);
        }

        const ok = clickOriginalByHash(toc, n.hash);
        if (!ok) {
          try {
            ROOT.location.hash = "#" + n.hash;
          } catch (e2) {}
          try {
            window.location.hash = "#" + n.hash;
          } catch (e3) {}
        }

        ROOT.setTimeout(() => {
          try {
            syncActive(toc);
          } catch (e) {}
        }, 80);
      },
      true
    );

    row.appendChild(a);
    li.appendChild(row);

    if (hasKids && childWrap) {
      const kids = renderTree(
        doc,
        toc,
        n.children!,
        state,
        activeHash,
        forceOpen,
        syncActive
      );
      while (kids.firstChild) childWrap.appendChild(kids.firstChild);
      li.appendChild(childWrap);
    }

    ul.appendChild(li);
  }

  return ul;
}
