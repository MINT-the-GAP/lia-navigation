import { initContext, ROOT } from "./context";
import { enhance, cleanup, syncActive } from "./enhance";
import { findTOC, isOverviewRoot, killSearchAnywhere, findOverviewControl, pinOverviewBottom, hideOriginalNavigation } from "./toc";

(function () {
  // =========================================================
  // Root/Doc (iframe-safe)
  // =========================================================
  function getRootWindowSafe(): Window {
    let w: Window = window;
    try {
      while (w.parent && w.parent !== w) w = w.parent;
    } catch (e) {}
    return w;
  }

  let root: Window = getRootWindowSafe();
  let rootDoc: Document | null = null;
  try {
    rootDoc = root.document;
  } catch (e) {
    root = window;
    rootDoc = document;
  }
  initContext(root, rootDoc);

  // =========================================================
  // Run-once Registry (import-safe)
  // =========================================================
  const REGKEY = "__LIA_BM_TOC5_V63__";
  if ((ROOT as any)[REGKEY] && (ROOT as any)[REGKEY].installed) {
    try {
      (ROOT as any)[REGKEY].kick && (ROOT as any)[REGKEY].kick();
    } catch (e) {}
    return;
  }
  (ROOT as any)[REGKEY] = (ROOT as any)[REGKEY] || {};
  (ROOT as any)[REGKEY].installed = true;

  // =========================================================
  // Boot
  // =========================================================
  let tries = 0;
  const bootTimer = ROOT.setInterval(() => {
    tries++;
    const ok = enhance();
    if (ok || tries > 160) ROOT.clearInterval(bootTimer);
  }, 150);

  ROOT.setInterval(() => {
    const toc = findTOC();
    if (!toc) return;

    if (isOverviewRoot()) {
      cleanup(toc);
      return;
    }

    killSearchAnywhere(toc);

    const box = toc.querySelector("#lia-bm-toc5");
    if (!box) {
      enhance();
    } else {
      const toolbar = toc.querySelector<HTMLElement>(".lia-toolbar");
      const overviewBtn = findOverviewControl(toc);
      const customOverviewBtn = box.querySelector(".bm-overview-button");
      if (!customOverviewBtn) {
        enhance();
        return;
      }

      const overviewChild = pinOverviewBottom(toc, overviewBtn);
      hideOriginalNavigation(toc, toolbar, box as HTMLElement, overviewChild);
      toc.classList.add("lia-bm-toc5-active");
      syncActive(toc);
    }
  }, 700);

  try {
    ROOT.addEventListener(
      "hashchange",
      () => {
        const toc = findTOC();
        if (toc) syncActive(toc);
      },
      true
    );
  } catch (e) {}

  // Expose for kick
  (ROOT as any)[REGKEY].kick = function () {
    try {
      const toc = findTOC();
      if (toc && !isOverviewRoot()) enhance();
      if (toc && isOverviewRoot()) cleanup(toc);
    } catch (e) {}
  };
})();
