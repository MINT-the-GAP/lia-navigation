import { ROOT, ROOT_DOC } from "./context";

export function findTOC(): HTMLElement | null {
  return (
    (ROOT_DOC && ROOT_DOC.querySelector
      ? ROOT_DOC.querySelector(".lia-toc")
      : null) ||
    (document.querySelector ? document.querySelector(".lia-toc") : null)
  );
}

export function isOverviewRoot(): boolean {
  try {
    const u = new URL(ROOT.location.href);
    const p = (u.pathname || "").replace(/\/+$/, "/");
    const isNightly = /\/nightly\/$/.test(p);
    const isCourse = /\/course\/$/.test(p);
    const noQuery = !u.search || u.search === "";
    return (isNightly || isCourse) && noQuery;
  } catch (e) {
    return false;
  }
}

export function extractHashFromHref(href: string): string {
  href = (href || "").trim();
  if (!href.includes("#")) return "";
  const h = href.split("#").pop() || "";
  return h.trim();
}

function isRealHashLink(a: HTMLAnchorElement): boolean {
  if (!a || !a.getAttribute) return false;
  const href = (a.getAttribute("href") || "").trim();
  if (!href.includes("#")) return false;
  const h = extractHashFromHref(href);
  return !!h;
}

export function getOriginalLinks(toc: HTMLElement): HTMLAnchorElement[] {
  if (!toc) return [];
  return Array.from(toc.querySelectorAll<HTMLAnchorElement>('a[href*="#"]'))
    .filter((a) => !a.closest("#lia-bm-toc5"))
    .filter((a) => isRealHashLink(a));
}

export function getOriginalActiveHash(toc: HTMLElement): string {
  if (!toc) return "";
  const a =
    toc.querySelector("a.lia-active") ||
    toc.querySelector(".lia-active a") ||
    null;
  if (!a) return "";
  return extractHashFromHref(a.getAttribute("href") || "");
}

export function findOriginalLinkByHash(
  toc: HTMLElement,
  hash: string
): HTMLAnchorElement | null {
  if (!toc || !hash) return null;
  const needle = "#" + hash;
  const links = Array.from(toc.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')).filter(
    (a) => !a.closest("#lia-bm-toc5")
  );
  return (
    links.find((a) => (a.getAttribute("href") || "").trim().endsWith(needle)) ||
    links.find((a) => (a.getAttribute("href") || "").trim().includes(needle)) ||
    null
  );
}

export function clickOriginalByHash(toc: HTMLElement, hash: string): boolean {
  const a = findOriginalLinkByHash(toc, hash);
  if (!a) return false;
  try {
    a.click();
    return true;
  } catch (e) {}
  try {
    a.dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true, view: ROOT })
    );
    return true;
  } catch (e) {}
  return false;
}

function looksLikeSearchInput(inp: HTMLElement): boolean {
  if (!inp || !inp.getAttribute) return false;
  const type = (inp.getAttribute("type") || "").toLowerCase();
  const ph = (inp.getAttribute("placeholder") || "").toLowerCase();
  const al = (inp.getAttribute("aria-label") || "").toLowerCase();
  return (
    type === "search" ||
    ph.includes("suche") ||
    ph.includes("search") ||
    al.includes("suche") ||
    al.includes("search")
  );
}

export function killSearchAnywhere(toc: HTMLElement): void {
  if (!toc) return;
  try {
    Array.from(toc.querySelectorAll("input"))
      .filter((inp) => !inp.closest("#lia-bm-toc5"))
      .forEach((inp) => {
        if (!looksLikeSearchInput(inp)) return;
        const wrap =
          inp.closest(
            'form,[role="search"],[class*="search"],[id*="search"],div,label'
          ) || inp;
        (wrap as HTMLElement).style.display = "none";
        wrap.setAttribute("data-lia-bm-hidden", "1");
      });

    Array.from(toc.querySelectorAll('form[role="search"],[role="search"]'))
      .filter((el) => !el.closest("#lia-bm-toc5"))
      .forEach((el) => {
        (el as HTMLElement).style.display = "none";
        el.setAttribute("data-lia-bm-hidden", "1");
      });

    Array.from(toc.querySelectorAll('[class*="search"],[id*="search"]'))
      .filter((el) => !el.closest("#lia-bm-toc5"))
      .forEach((el) => {
        if (!el.querySelector("input")) return;
        (el as HTMLElement).style.display = "none";
        el.setAttribute("data-lia-bm-hidden", "1");
      });
  } catch (e) {}
}

export function findOverviewControl(toc: HTMLElement): HTMLElement | null {
  if (!toc) return null;

  const homeButton = toc.querySelector<HTMLElement>("#lia-btn-home");
  if (homeButton && !homeButton.closest("#lia-bm-toc5")) return homeButton;

  const cand = Array.from(toc.querySelectorAll<HTMLElement>("a,button")).filter(
    (el) => !el.closest("#lia-bm-toc5")
  );

  for (const el of cand) {
    if (!el.getAttribute) continue;
    const href = (el.getAttribute("href") || "").trim();
    if (!href) continue;
    if (
      href === "/nightly/" ||
      href === "/course/" ||
      href.endsWith("/nightly/") ||
      href.endsWith("/course/")
    ) {
      return el;
    }
  }

  for (const el of cand) {
    const href = (el.getAttribute("href") || "").trim();
    if (el.tagName === "A" && href.includes("#")) continue;

    const t = (el.textContent || "").trim().toLowerCase();
    if (t === "übersicht" || t === "uebersicht" || t === "overview")
      return el;
  }

  return null;
}

export function navigateToOverview(toc: HTMLElement): boolean {
  const originalOverview = findOverviewControl(toc);
  if (originalOverview) {
    try {
      originalOverview.click();
      return true;
    } catch (e) {}
  }

  const candidates: Window[] = [];
  const ownerWindow = toc.ownerDocument
    ? toc.ownerDocument.defaultView
    : null;

  [ROOT, ownerWindow, window].forEach((candidate) => {
    if (candidate && !candidates.includes(candidate)) candidates.push(candidate);
  });

  for (const candidate of candidates) {
    try {
      const currentHref = candidate.location.href;
      const target = new URL(currentHref);
      if (target.protocol !== "http:" && target.protocol !== "https:") continue;

      const path = (target.pathname || "").replace(/\/+$/, "/");
      const isCourseApp = /\/(?:course|nightly)\/$/.test(path);
      if (!isCourseApp) continue;

      target.search = "";
      target.hash = "";
      if (target.href === currentHref) continue;

      candidate.location.assign(target.href);
      return true;
    } catch (e) {}
  }

  return false;
}

function directChildOfTOC(
  el: HTMLElement | null,
  toc: HTMLElement
): HTMLElement | null {
  if (!el || !toc) return null;
  let n: HTMLElement | null = el;
  while (n && n.parentElement && n.parentElement !== toc)
    n = n.parentElement;
  return n && n.parentElement === toc ? n : null;
}

export function pinOverviewBottom(
  toc: HTMLElement,
  overviewEl: HTMLElement | null
): HTMLElement | null {
  if (!toc) return null;
  if (!overviewEl) return null;

  const child = directChildOfTOC(overviewEl, toc) || overviewEl;
  try {
    child.classList.add("lia-bm-overview-pin");
  } catch (e) {}
  return child;
}

export function unhideAllHidden(toc: HTMLElement): void {
  if (!toc) return;
  try {
    toc.querySelectorAll('[data-lia-bm-hidden="1"]').forEach((el) => {
      (el as HTMLElement).style.display = "";
      el.removeAttribute("data-lia-bm-hidden");
    });
  } catch (e) {}
}

function elementContainsOriginalHashLinks(el: HTMLElement): boolean {
  if (!el || !el.querySelectorAll) return false;
  const as = Array.from(el.querySelectorAll<HTMLAnchorElement>('a[href*="#"]'));
  return as.some((a) => !a.closest("#lia-bm-toc5") && isRealHashLink(a));
}

export function hideOriginalNavigation(
  toc: HTMLElement,
  toolbar: HTMLElement | null,
  box: HTMLElement,
  keepEl: HTMLElement | null
): void {
  if (!toc) return;

  try {
    const kids = Array.from(toc.children || []);
    kids.forEach((ch) => {
      if (!ch) return;
      if (toolbar && ch === toolbar) return;
      if (box && ch === box) return;
      if (keepEl && ch === keepEl) return;

      if (elementContainsOriginalHashLinks(ch as HTMLElement)) {
        (ch as HTMLElement).style.display = "none";
        ch.setAttribute("data-lia-bm-hidden", "1");
      }
    });
  } catch (e) {}

  try {
    const cand = Array.from(
      toc.querySelectorAll<HTMLElement>("ul,ol,nav,section,div")
    )
      .filter((el) => !el.closest("#lia-bm-toc5"))
      .filter((el) => !(toolbar && el.closest && el.closest(".lia-toolbar")))
      .filter((el) => !(keepEl && keepEl.contains && keepEl.contains(el)))
      .filter((el) => elementContainsOriginalHashLinks(el));

    cand.forEach((el) => {
      const parent = el.parentElement;
      if (parent && cand.includes(parent as HTMLElement)) return;
      el.style.display = "none";
      el.setAttribute("data-lia-bm-hidden", "1");
    });
  } catch (e) {}
}
