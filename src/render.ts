import { TreeNode } from "./tree";
import { saveState } from "./storage";
import { findOriginalLinkByHash, clickOriginalByHash } from "./toc";

import { ROOT } from "./context";

function normalizeText(value: string): string {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getDirectChildByClass(parent: HTMLElement, className: string): HTMLElement | null {
  for (const child of Array.from(parent.children)) {
    const el = child as HTMLElement;
    if (el.classList && el.classList.contains(className)) return el;
  }
  return null;
}

function getDirectChildList(parent: HTMLElement): HTMLUListElement | null {
  for (const child of Array.from(parent.children)) {
    if (child.tagName === "UL") return child as HTMLUListElement;
  }
  return null;
}

function restoreCollapseState(list: HTMLUListElement, state: Record<string, number>): void {
  const lis = Array.from(list.children).filter((el) => el.tagName === "LI") as HTMLElement[];

  lis.forEach((li) => {
    const row = getDirectChildByClass(li, "bm-row");
    const childWrap = getDirectChildList(li);
    if (!row || !childWrap) return;

    const key = row.dataset.key || "";
    const initialOpen = row.dataset.initialOpen === "1";
    const openByState = state[key] === 1;
    const open = openByState || (state[key] !== 0 && state[key] !== 1 && initialOpen);

    setCollapsed(row, childWrap, open);
    const btn = getDirectChildByClass(row, "bm-toggle");
    if (btn) setGlyph(btn, open);

    restoreCollapseState(childWrap, state);
  });
}

function applySearchFilter(list: HTMLUListElement, query: string): boolean {
  const lis = Array.from(list.children).filter((el) => el.tagName === "LI") as HTMLElement[];
  let anyVisible = false;

  lis.forEach((li) => {
    const row = getDirectChildByClass(li, "bm-row");
    const childWrap = getDirectChildList(li);

    let selfMatch = false;
    if (row) {
      const hay = row.dataset.searchText || normalizeText(row.textContent || "");
      selfMatch = query.length === 0 ? true : hay.includes(query);
      row.classList.toggle("bm-search-hit", query.length > 0 && selfMatch);
    }

    const childMatch = childWrap ? applySearchFilter(childWrap, query) : false;
    const visible = query.length === 0 ? true : selfMatch || childMatch;
    li.style.display = visible ? "" : "none";

    if (query.length > 0 && row && childWrap && childMatch) {
      setCollapsed(row, childWrap, true);
      const btn = getDirectChildByClass(row, "bm-toggle");
      if (btn) setGlyph(btn, true);
    }

    if (visible) anyVisible = true;
  });

  return anyVisible;
}

export function attachFooterSearch(
  doc: Document,
  box: HTMLElement,
  state: Record<string, number>
): void {
  const list = box.querySelector(".bm-list") as HTMLUListElement | null;
  if (!list) return;

  const footer = doc.createElement("div");
  footer.className = "bm-footer";

  const shell = doc.createElement("label");
  shell.className = "bm-search-shell";

  const icon = doc.createElement("span");
  icon.className = "bm-search-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = `
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M10 4a6 6 0 104.47 10.03l4.25 4.25 1.41-1.41-4.25-4.25A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z" fill="currentColor"></path>
    </svg>
  `.trim();

  const input = doc.createElement("input");
  input.type = "search";
  input.className = "bm-search";
  input.placeholder = "Suche im Inhaltsverzeichnis";
  input.setAttribute("aria-label", "Suche im Inhaltsverzeichnis");
  input.autocomplete = "off";

  const clear = doc.createElement("button");
  clear.type = "button";
  clear.className = "bm-search-clear";
  clear.setAttribute("aria-label", "Suche löschen");
  clear.innerHTML = `
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M6.4 5l-.7.7L10.6 10.6 5.7 15.5l.7.7 4.9-4.9 4.9 4.9.7-.7-4.9-4.9 4.9-4.9-.7-.7-4.9 4.9z" fill="currentColor"></path>
    </svg>
  `.trim();

  const updateClear = () => {
    clear.style.display = input.value ? "inline-flex" : "none";
  };

  const apply = () => {
    const query = normalizeText(input.value || "");
    applySearchFilter(list, query);
    if (query.length === 0) restoreCollapseState(list, state);
    updateClear();
  };

  input.addEventListener("input", apply, true);
  clear.addEventListener("click", () => {
    input.value = "";
    apply();
    input.focus();
  });

  shell.appendChild(icon);
  shell.appendChild(input);
  shell.appendChild(clear);
  footer.appendChild(shell);
  box.appendChild(footer);
  updateClear();
}

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
    row.dataset.key = n.key;
    row.dataset.searchText = normalizeText(n.text);

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
    row.dataset.initialOpen = mustOpen ? "1" : "0";
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
