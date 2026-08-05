// Shared mutable context initialized once by the IIFE in index.ts
let $53e78f2af9ed7736$export$fbea82a1c0574ef4 = window;
let $53e78f2af9ed7736$export$bff967cc1c105f0f = document;
function $53e78f2af9ed7736$export$54fae1269cb9a9e0(root, rootDoc) {
    $53e78f2af9ed7736$export$fbea82a1c0574ef4 = root;
    $53e78f2af9ed7736$export$bff967cc1c105f0f = rootDoc;
}


const $f428b9566db24984$export$13bec68de17cb8b1 = "lia-bm-toc5-style";
const $f428b9566db24984$export$9bd51c34db924002 = `
/* ===== Active only when class is set ===== */
.lia-toc.lia-bm-toc5-active{
  display:flex !important;
  flex-direction:column !important;
  min-height:0 !important;
}
.lia-toc.lia-bm-toc5-active #lia-bm-toc5{
  display:flex !important;
  flex-direction:column !important;
  flex:1 1 auto !important;
  min-height:0 !important;
  height:100% !important;
}
.lia-toc.lia-bm-toc5-active #lia-bm-toc5{
  overflow:hidden !important;
  box-sizing:border-box !important;
}
.lia-toc.lia-bm-toc5-active .lia-bm-overview-pin{
  display:none !important;
}

/* ===== Bookmarks TOC ===== */
.lia-toc #lia-bm-toc5{ padding:.25em 0 .5em 0; }

.lia-toc #lia-bm-toc5 ul{ list-style:none; margin:0; padding:0; }
.lia-toc #lia-bm-toc5 .bm-list{
  padding:0 .5em;
  flex:1 1 auto;
  min-height:0;
  overflow:auto;
}

.lia-toc #lia-bm-toc5 .bm-footer{
  display:flex;
  flex-direction:column;
  flex:0 0 auto;
  margin-top:auto;
  z-index: 1;
  padding: .55em .5em .6em;
  border-top: 1px solid rgba(127,127,127,.28);
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0),
    rgba(255,255,255,.04) 18%,
    rgba(255,255,255,.08)
  );
  backdrop-filter: blur(6px);
}

.lia-toc #lia-bm-toc5 .bm-search-shell{
  display:flex;
  align-items:center;
  gap:.45em;
  width:100%;
  box-sizing:border-box;
  padding:.45em .6em;
  border-radius:.65em;
  border:1px solid rgba(127,127,127,.35);
  background: rgba(0,0,0,.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
}

.lia-toc #lia-bm-toc5 .bm-search-icon,
.lia-toc #lia-bm-toc5 .bm-search-clear{
  width:1.4em;
  height:1.4em;
  flex:0 0 auto;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  color: rgba(255,255,255,.72);
}

.lia-toc #lia-bm-toc5 .bm-search-icon svg,
.lia-toc #lia-bm-toc5 .bm-search-clear svg{
  width:100%;
  height:100%;
}

.lia-toc #lia-bm-toc5 .bm-search-clear{
  border:0;
  background:transparent;
  padding:0;
  margin-left:.1em;
  cursor:pointer;
  opacity:.85;
}

.lia-toc #lia-bm-toc5 .bm-search-clear:hover{
  opacity:1;
  color: rgb(var(--color-highlight));
}

.lia-toc #lia-bm-toc5 .bm-search{
  width: 100%;
  min-width:0;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border-radius: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  background: transparent;
}

.lia-toc #lia-bm-toc5 .bm-search:focus{
  outline: none;
}

.lia-toc #lia-bm-toc5 .bm-search::placeholder{
  color: rgba(255,255,255,.62);
}

.lia-toc #lia-bm-toc5 .bm-search-shell:focus-within{
  border-color: rgba(var(--color-highlight), .82);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.04),
    0 0 0 1px rgba(var(--color-highlight), .18),
    0 0 0 3px rgba(var(--color-highlight), .12);
  background: rgba(0,0,0,.24);
}

.lia-toc #lia-bm-toc5 .bm-overview-button{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:.35em;
  width:calc(100% - 1em);
  align-self:center;
  box-sizing:border-box;
  margin-top:.4em;
  padding:.3em .5em;
  border-radius:.55em;
  border:1px solid rgba(var(--color-highlight), .75);
  color:inherit;
  background:rgba(var(--color-highlight), .3);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.08),
    0 0 .4em rgba(var(--color-highlight), .14);
  font:inherit;
  font-size:.88em;
  cursor:pointer;
}

.lia-toc #lia-bm-toc5 .bm-overview-button:hover{
  border-color:rgba(var(--color-highlight), .95);
  background:rgba(var(--color-highlight), .42);
}

.lia-toc #lia-bm-toc5 .bm-overview-button:active{
  background:rgba(var(--color-highlight), .5);
}

.lia-toc #lia-bm-toc5 .bm-overview-button:focus-visible{
  outline:2px solid rgb(var(--color-highlight));
  outline-offset:2px;
}

.lia-toc #lia-bm-toc5 .bm-overview-icon{
  width:1.15em;
  height:1.15em;
  flex:0 0 auto;
  display:inline-flex;
  align-items:center;
  justify-content:center;
}

.lia-toc #lia-bm-toc5 .bm-overview-icon svg{
  width:100%;
  height:100%;
}

.lia-toc #lia-bm-toc5 .bm-row{
  display:flex; align-items:center; gap:.35em;
  padding:.18em .25em .28em .25em; border-radius:.35em;
  line-height:1.25;
  position:relative;
  padding-bottom:.28em;
}

/* ===== Separator ===== */
.lia-toc #lia-bm-toc5 .bm-row::after{
  content:"";
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  width:90%;
  height:1px;
  bottom:0;
  background: rgba(255,255,255,0.85);
  pointer-events:none;
}
.lia-toc #lia-bm-toc5 li:last-child:not(.bm-has-kids) > .bm-row::after{
  display:none;
}

.lia-toc #lia-bm-toc5 .bm-row:hover{ background: rgba(127,127,127,.12); }

.lia-toc #lia-bm-toc5 .bm-toggle,
.lia-toc #lia-bm-toc5 .bm-spacer{
  width:1.65em; height:1.65em; flex:0 0 1.15em;
  display:inline-flex; align-items:center; justify-content:center;
}

.lia-toc #lia-bm-toc5 .bm-toggle{
  border:0; background:transparent; color:inherit;
  cursor:pointer; padding:0; opacity:.9;
  font-size:.95em; line-height:1;
}

.lia-toc #lia-bm-toc5 .bm-toggle svg{
  width:2.5em;
  height:2.5em;
  display:block;
  pointer-events:none;
  transform-origin:50% 50%;
  transition:transform .12s ease;
}

.lia-toc #lia-bm-toc5 .bm-toggle[data-open="true"] svg{
  transform:rotate(90deg);
}
.lia-toc #lia-bm-toc5 .bm-toggle:hover{ opacity:1; }

.lia-toc #lia-bm-toc5 a{
  color:inherit; text-decoration:none;
  flex:1 1 auto; min-width:0;
  display:block;
}
.lia-toc #lia-bm-toc5 a:hover{ text-decoration:underline; }

.lia-toc #lia-bm-toc5 .bm-children{ padding-left: 0.5em; }
.lia-toc #lia-bm-toc5 .bm-hidden{ display:none !important; }

/* Active with theme color */
.lia-toc #lia-bm-toc5 .bm-row.bm-active{
  background: rgba(0,0,0,.14);
  background: rgba(var(--color-highlight), .18);
  border-left: 3px solid rgba(0,0,0,.35);
  border-left-color: rgb(var(--color-highlight));
  padding-left: calc(.25em - 3px);
}
.lia-toc #lia-bm-toc5 .bm-row.bm-active a{ font-weight: 700; }

.lia-toc #lia-bm-toc5 .bm-row.bm-search-hit:not(.bm-active){
  background: rgba(var(--color-highlight), .12);
}

/* Level styling */
.lia-toc #lia-bm-toc5 .bm-row[data-level="1"] a{ font-size:1.25em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="2"] a{ font-size:1.00em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="3"] a{ font-size:.9em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="4"] a{ font-size:.8em;  font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="5"] a{ font-size:.75em; font-weight:700; }
.lia-toc #lia-bm-toc5 .bm-row[data-level="6"] a{ font-size:.7em;  font-weight:700; }

/* Hide legacy search only outside custom TOC box */
.lia-toc > :not(#lia-bm-toc5) input[type="search"],
.lia-toc > :not(#lia-bm-toc5) input[placeholder*="Suche"],
.lia-toc > :not(#lia-bm-toc5) input[placeholder*="suche"],
.lia-toc > :not(#lia-bm-toc5) input[placeholder*="Search"],
.lia-toc > :not(#lia-bm-toc5) input[placeholder*="search"],
.lia-toc > :not(#lia-bm-toc5) input[aria-label*="Suche"],
.lia-toc > :not(#lia-bm-toc5) input[aria-label*="suche"],
.lia-toc > :not(#lia-bm-toc5) input[aria-label*="Search"],
.lia-toc > :not(#lia-bm-toc5) input[aria-label*="search"],
.lia-toc > :not(#lia-bm-toc5) form[role="search"],
.lia-toc > :not(#lia-bm-toc5) [role="search"]{
  display:none !important;
}
`.trim();
function $f428b9566db24984$export$b9324dd3ed41badd(doc) {
    if (!doc) return;
    try {
        const existing = doc.getElementById($f428b9566db24984$export$13bec68de17cb8b1);
        if (existing) {
            if (existing.textContent !== $f428b9566db24984$export$9bd51c34db924002) existing.textContent = $f428b9566db24984$export$9bd51c34db924002;
            return;
        }
        const st = doc.createElement("style");
        st.id = $f428b9566db24984$export$13bec68de17cb8b1;
        st.type = "text/css";
        st.appendChild(doc.createTextNode($f428b9566db24984$export$9bd51c34db924002));
        (doc.head || doc.documentElement || doc.body).appendChild(st);
    } catch (e) {}
}



function $34de0361b1c4c74d$export$7367158f2f597ab1() {
    try {
        const href = (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).location && (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).location.href ? (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).location.href : "";
        return "__LIA_BM_TOC5_STATE__::" + href.split("#")[0];
    } catch (e) {
        return "__LIA_BM_TOC5_STATE__";
    }
}
function $34de0361b1c4c74d$export$ea32cbdd559da174() {
    try {
        const raw = (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).localStorage.getItem($34de0361b1c4c74d$export$7367158f2f597ab1());
        const obj = raw ? JSON.parse(raw) : {};
        return obj && typeof obj === "object" ? obj : {};
    } catch (e) {
        return {};
    }
}
function $34de0361b1c4c74d$export$fb931cd598921492(s) {
    try {
        (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).localStorage.setItem($34de0361b1c4c74d$export$7367158f2f597ab1(), JSON.stringify(s || {}));
    } catch (e) {}
}



function $4f0046e728a1a92c$export$e8db3e6bc578b931() {
    return ((0, $53e78f2af9ed7736$export$bff967cc1c105f0f) && (0, $53e78f2af9ed7736$export$bff967cc1c105f0f).querySelector ? (0, $53e78f2af9ed7736$export$bff967cc1c105f0f).querySelector(".lia-toc") : null) || (document.querySelector ? document.querySelector(".lia-toc") : null);
}
function $4f0046e728a1a92c$export$f5c1f1e7b385e9e0() {
    try {
        const u = new URL((0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).location.href);
        const p = (u.pathname || "").replace(/\/+$/, "/");
        const isNightly = /\/nightly\/$/.test(p);
        const isCourse = /\/course\/$/.test(p);
        const noQuery = !u.search || u.search === "";
        return (isNightly || isCourse) && noQuery;
    } catch (e) {
        return false;
    }
}
function $4f0046e728a1a92c$export$e262d2f9ab788f70(href) {
    href = (href || "").trim();
    if (!href.includes("#")) return "";
    const h = href.split("#").pop() || "";
    return h.trim();
}
function $4f0046e728a1a92c$var$isRealHashLink(a) {
    if (!a || !a.getAttribute) return false;
    const href = (a.getAttribute("href") || "").trim();
    if (!href.includes("#")) return false;
    const h = $4f0046e728a1a92c$export$e262d2f9ab788f70(href);
    return !!h;
}
function $4f0046e728a1a92c$export$4c20068729563fa0(toc) {
    if (!toc) return [];
    return Array.from(toc.querySelectorAll('a[href*="#"]')).filter((a)=>!a.closest("#lia-bm-toc5")).filter((a)=>$4f0046e728a1a92c$var$isRealHashLink(a));
}
function $4f0046e728a1a92c$export$d283933afefc345a(toc) {
    if (!toc) return "";
    const a = toc.querySelector("a.lia-active") || toc.querySelector(".lia-active a") || null;
    if (!a) return "";
    return $4f0046e728a1a92c$export$e262d2f9ab788f70(a.getAttribute("href") || "");
}
function $4f0046e728a1a92c$export$97d3918bf4e32c9f(toc, hash) {
    if (!toc || !hash) return null;
    const needle = "#" + hash;
    const links = Array.from(toc.querySelectorAll('a[href*="#"]')).filter((a)=>!a.closest("#lia-bm-toc5"));
    return links.find((a)=>(a.getAttribute("href") || "").trim().endsWith(needle)) || links.find((a)=>(a.getAttribute("href") || "").trim().includes(needle)) || null;
}
function $4f0046e728a1a92c$export$f6e7aeaeea1ff0ef(toc, hash) {
    const a = $4f0046e728a1a92c$export$97d3918bf4e32c9f(toc, hash);
    if (!a) return false;
    try {
        a.click();
        return true;
    } catch (e) {}
    try {
        a.dispatchEvent(new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)
        }));
        return true;
    } catch (e) {}
    return false;
}
function $4f0046e728a1a92c$var$looksLikeSearchInput(inp) {
    if (!inp || !inp.getAttribute) return false;
    const type = (inp.getAttribute("type") || "").toLowerCase();
    const ph = (inp.getAttribute("placeholder") || "").toLowerCase();
    const al = (inp.getAttribute("aria-label") || "").toLowerCase();
    return type === "search" || ph.includes("suche") || ph.includes("search") || al.includes("suche") || al.includes("search");
}
function $4f0046e728a1a92c$export$96272e1284a3c47f(toc) {
    if (!toc) return;
    try {
        Array.from(toc.querySelectorAll("input")).filter((inp)=>!inp.closest("#lia-bm-toc5")).forEach((inp)=>{
            if (!$4f0046e728a1a92c$var$looksLikeSearchInput(inp)) return;
            const wrap = inp.closest('form,[role="search"],[class*="search"],[id*="search"],div,label') || inp;
            wrap.style.display = "none";
            wrap.setAttribute("data-lia-bm-hidden", "1");
        });
        Array.from(toc.querySelectorAll('form[role="search"],[role="search"]')).filter((el)=>!el.closest("#lia-bm-toc5")).forEach((el)=>{
            el.style.display = "none";
            el.setAttribute("data-lia-bm-hidden", "1");
        });
        Array.from(toc.querySelectorAll('[class*="search"],[id*="search"]')).filter((el)=>!el.closest("#lia-bm-toc5")).forEach((el)=>{
            if (!el.querySelector("input")) return;
            el.style.display = "none";
            el.setAttribute("data-lia-bm-hidden", "1");
        });
    } catch (e) {}
}
function $4f0046e728a1a92c$export$99405462185ad892(toc) {
    if (!toc) return null;
    const homeButton = toc.querySelector("#lia-btn-home");
    if (homeButton && !homeButton.closest("#lia-bm-toc5")) return homeButton;
    const cand = Array.from(toc.querySelectorAll("a,button")).filter((el)=>!el.closest("#lia-bm-toc5"));
    for (const el of cand){
        if (!el.getAttribute) continue;
        const href = (el.getAttribute("href") || "").trim();
        if (!href) continue;
        if (href === "/nightly/" || href === "/course/" || href.endsWith("/nightly/") || href.endsWith("/course/")) return el;
    }
    for (const el of cand){
        const href = (el.getAttribute("href") || "").trim();
        if (el.tagName === "A" && href.includes("#")) continue;
        const t = (el.textContent || "").trim().toLowerCase();
        if (t === "\xfcbersicht" || t === "uebersicht" || t === "overview") return el;
    }
    return null;
}
function $4f0046e728a1a92c$export$9503a9a6173c02ab(toc) {
    const originalOverview = $4f0046e728a1a92c$export$99405462185ad892(toc);
    if (originalOverview) try {
        originalOverview.click();
        return true;
    } catch (e) {}
    const candidates = [];
    const ownerWindow = toc.ownerDocument ? toc.ownerDocument.defaultView : null;
    [
        (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4),
        ownerWindow,
        window
    ].forEach((candidate)=>{
        if (candidate && !candidates.includes(candidate)) candidates.push(candidate);
    });
    for (const candidate of candidates)try {
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
    return false;
}
function $4f0046e728a1a92c$var$directChildOfTOC(el, toc) {
    if (!el || !toc) return null;
    let n = el;
    while(n && n.parentElement && n.parentElement !== toc)n = n.parentElement;
    return n && n.parentElement === toc ? n : null;
}
function $4f0046e728a1a92c$export$b739510726b33d9b(toc, overviewEl) {
    if (!toc) return null;
    if (!overviewEl) return null;
    const child = $4f0046e728a1a92c$var$directChildOfTOC(overviewEl, toc) || overviewEl;
    try {
        child.classList.add("lia-bm-overview-pin");
    } catch (e) {}
    return child;
}
function $4f0046e728a1a92c$export$2ba3451cbdd9604(toc) {
    if (!toc) return;
    try {
        toc.querySelectorAll('[data-lia-bm-hidden="1"]').forEach((el)=>{
            el.style.display = "";
            el.removeAttribute("data-lia-bm-hidden");
        });
    } catch (e) {}
}
function $4f0046e728a1a92c$var$elementContainsOriginalHashLinks(el) {
    if (!el || !el.querySelectorAll) return false;
    const as = Array.from(el.querySelectorAll('a[href*="#"]'));
    return as.some((a)=>!a.closest("#lia-bm-toc5") && $4f0046e728a1a92c$var$isRealHashLink(a));
}
function $4f0046e728a1a92c$export$bd404365fad2e626(toc, toolbar, box, keepEl) {
    if (!toc) return;
    try {
        const kids = Array.from(toc.children || []);
        kids.forEach((ch)=>{
            if (!ch) return;
            if (toolbar && ch === toolbar) return;
            if (box && ch === box) return;
            if (keepEl && ch === keepEl) return;
            if ($4f0046e728a1a92c$var$elementContainsOriginalHashLinks(ch)) {
                ch.style.display = "none";
                ch.setAttribute("data-lia-bm-hidden", "1");
            }
        });
    } catch (e) {}
    try {
        const cand = Array.from(toc.querySelectorAll("ul,ol,nav,section,div")).filter((el)=>!el.closest("#lia-bm-toc5")).filter((el)=>!(toolbar && el.closest && el.closest(".lia-toolbar"))).filter((el)=>!(keepEl && keepEl.contains && keepEl.contains(el))).filter((el)=>$4f0046e728a1a92c$var$elementContainsOriginalHashLinks(el));
        cand.forEach((el)=>{
            const parent = el.parentElement;
            if (parent && cand.includes(parent)) return;
            el.style.display = "none";
            el.setAttribute("data-lia-bm-hidden", "1");
        });
    } catch (e) {}
}


function $a016e3f2b62aeabf$export$b779dbab437835ad(a, toc) {
    const aria = a.getAttribute("aria-level");
    if (aria && !isNaN(parseInt(aria, 10))) return parseInt(aria, 10);
    const li = a.closest("li");
    if (li) {
        let depth = 1;
        let n = li.parentElement;
        while(n && n !== toc){
            if (n.tagName === "UL") depth++;
            n = n.parentElement;
        }
        return Math.max(1, Math.min(6, depth));
    }
    return 0;
}
function $a016e3f2b62aeabf$export$af87c064a1e4aa54(a) {
    try {
        const cs = a.ownerDocument && a.ownerDocument.defaultView ? a.ownerDocument.defaultView.getComputedStyle(a) : getComputedStyle(a);
        const pl = parseFloat(cs.paddingLeft || "0") || 0;
        const ml = parseFloat(cs.marginLeft || "0") || 0;
        const ti = parseFloat(cs.textIndent || "0") || 0;
        return Math.max(pl, ml, ti);
    } catch (e) {
        return 0;
    }
}
function $a016e3f2b62aeabf$export$4cf7e493412563d2(nodes) {
    const indents = nodes.map((n)=>n.indent).filter((x)=>x > 0);
    const uniq = Array.from(new Set(indents.map((x)=>Math.round(x)))).sort((a, b)=>a - b);
    if (!uniq.length) {
        nodes.forEach((n)=>{
            if (n.level === 0) n.level = 1;
        });
        return;
    }
    nodes.forEach((n)=>{
        if (n.level !== 0) return;
        const v = Math.round(n.indent);
        let idx = uniq.indexOf(v);
        if (idx < 0) idx = 0;
        n.level = Math.max(1, Math.min(6, idx + 1));
    });
}
function $a016e3f2b62aeabf$export$9896244d8c99a4d0(items) {
    const root = {
        key: "",
        hash: "",
        text: "",
        level: 0,
        indent: 0,
        children: []
    };
    const stack = [
        {
            node: root,
            level: 0
        }
    ];
    for (const it of items){
        while(stack.length && stack[stack.length - 1].level >= it.level)stack.pop();
        const parent = stack[stack.length - 1].node;
        const node = {
            ...it,
            children: []
        };
        parent.children.push(node);
        stack.push({
            node: node,
            level: it.level
        });
    }
    return root.children;
}
function $a016e3f2b62aeabf$export$18de645ac3abdaed(tree, activeHash) {
    const force = new Set();
    function walk(list, parents) {
        for (const n of list){
            if (n.hash === activeHash) {
                parents.forEach((p)=>force.add(p.key));
                return true;
            }
            if (n.children && n.children.length) {
                if (walk(n.children, parents.concat(n))) return true;
            }
        }
        return false;
    }
    walk(tree, []);
    return force;
}





function $6282e142bf746237$var$normalizeText(value) {
    return (value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
function $6282e142bf746237$var$getDirectChildByClass(parent, className) {
    for (const child of Array.from(parent.children)){
        const el = child;
        if (el.classList && el.classList.contains(className)) return el;
    }
    return null;
}
function $6282e142bf746237$var$getDirectChildList(parent) {
    for (const child of Array.from(parent.children)){
        if (child.tagName === "UL") return child;
    }
    return null;
}
function $6282e142bf746237$var$restoreCollapseState(list, state) {
    const lis = Array.from(list.children).filter((el)=>el.tagName === "LI");
    lis.forEach((li)=>{
        const row = $6282e142bf746237$var$getDirectChildByClass(li, "bm-row");
        const childWrap = $6282e142bf746237$var$getDirectChildList(li);
        if (!row || !childWrap) return;
        const key = row.dataset.key || "";
        const initialOpen = row.dataset.initialOpen === "1";
        const openByState = state[key] === 1;
        const open = openByState || state[key] !== 0 && state[key] !== 1 && initialOpen;
        $6282e142bf746237$export$8559c98d157fcda1(row, childWrap, open);
        const btn = $6282e142bf746237$var$getDirectChildByClass(row, "bm-toggle");
        if (btn) $6282e142bf746237$export$9a698d10fbdc5726(btn, open);
        $6282e142bf746237$var$restoreCollapseState(childWrap, state);
    });
}
function $6282e142bf746237$var$applySearchFilter(list, query) {
    const lis = Array.from(list.children).filter((el)=>el.tagName === "LI");
    let anyVisible = false;
    lis.forEach((li)=>{
        const row = $6282e142bf746237$var$getDirectChildByClass(li, "bm-row");
        const childWrap = $6282e142bf746237$var$getDirectChildList(li);
        let selfMatch = false;
        if (row) {
            const hay = row.dataset.searchText || $6282e142bf746237$var$normalizeText(row.textContent || "");
            selfMatch = query.length === 0 ? true : hay.includes(query);
            row.classList.toggle("bm-search-hit", query.length > 0 && selfMatch);
        }
        const childMatch = childWrap ? $6282e142bf746237$var$applySearchFilter(childWrap, query) : false;
        const visible = query.length === 0 ? true : selfMatch || childMatch;
        li.style.display = visible ? "" : "none";
        if (query.length > 0 && row && childWrap && childMatch) {
            $6282e142bf746237$export$8559c98d157fcda1(row, childWrap, true);
            const btn = $6282e142bf746237$var$getDirectChildByClass(row, "bm-toggle");
            if (btn) $6282e142bf746237$export$9a698d10fbdc5726(btn, true);
        }
        if (visible) anyVisible = true;
    });
    return anyVisible;
}
function $6282e142bf746237$export$4704e56753c56edf(doc, toc, box, state) {
    const list = box.querySelector(".bm-list");
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
    clear.setAttribute("aria-label", "Suche l\xf6schen");
    clear.innerHTML = `
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M6.4 5l-.7.7L10.6 10.6 5.7 15.5l.7.7 4.9-4.9 4.9 4.9.7-.7-4.9-4.9 4.9-4.9-.7-.7-4.9 4.9z" fill="currentColor"></path>
    </svg>
  `.trim();
    const updateClear = ()=>{
        clear.style.display = input.value ? "inline-flex" : "none";
    };
    const apply = ()=>{
        const query = $6282e142bf746237$var$normalizeText(input.value || "");
        $6282e142bf746237$var$applySearchFilter(list, query);
        if (query.length === 0) $6282e142bf746237$var$restoreCollapseState(list, state);
        updateClear();
    };
    input.addEventListener("input", apply, true);
    clear.addEventListener("click", ()=>{
        input.value = "";
        apply();
        input.focus();
    });
    shell.appendChild(icon);
    shell.appendChild(input);
    shell.appendChild(clear);
    footer.appendChild(shell);
    const originalOverview = (0, $4f0046e728a1a92c$export$99405462185ad892)(toc);
    const overview = doc.createElement("button");
    overview.type = "button";
    overview.className = "bm-overview-button";
    if (originalOverview) overview.classList.add("bm-overview");
    const label = "Zur Kurs\u00fcbersicht";
    overview.setAttribute("aria-label", label);
    overview.title = label;
    const overviewIcon = doc.createElement("span");
    overviewIcon.className = "bm-overview-icon";
    overviewIcon.setAttribute("aria-hidden", "true");
    overviewIcon.innerHTML = `
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" fill="currentColor"></path>
    </svg>
  `.trim();
    const overviewText = doc.createElement("span");
    overviewText.className = "bm-overview-text";
    overviewText.textContent = label;
    overview.addEventListener("click", (ev)=>{
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
        (0, $4f0046e728a1a92c$export$9503a9a6173c02ab)(toc);
    }, true);
    overview.appendChild(overviewIcon);
    overview.appendChild(overviewText);
    footer.appendChild(overview);
    box.appendChild(footer);
    updateClear();
}
function $6282e142bf746237$export$8559c98d157fcda1(row, childWrap, open) {
    row.classList.toggle("bm-open", !!open);
    if (childWrap) childWrap.classList.toggle("bm-hidden", !open);
}
function $6282e142bf746237$export$9a698d10fbdc5726(btn, open) {
    if (!btn) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("data-open", open ? "true" : "false");
    if (!btn.querySelector("svg")) btn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M8 6 L17 12 L8 18 Z" fill="currentColor"></path>
      </svg>
    `.trim();
}
function $6282e142bf746237$export$3fb6f1d56c512c02(doc, toc, nodes, state, activeHash, forceOpen, syncActive) {
    const ul = doc.createElement("ul");
    ul.className = "bm-list";
    for (const n of nodes){
        const li = doc.createElement("li");
        const row = doc.createElement("div");
        row.className = "bm-row";
        row.dataset.level = String(n.level);
        row.dataset.key = n.key;
        row.dataset.searchText = $6282e142bf746237$var$normalizeText(n.text);
        const hasKids = n.children && n.children.length;
        if (hasKids) li.classList.add("bm-has-kids");
        let childWrap = null;
        const mustOpen = forceOpen && forceOpen.has(n.key) || state[n.key] === 1;
        let btn = null;
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
        const orig = (0, $4f0046e728a1a92c$export$97d3918bf4e32c9f)(toc, n.hash);
        a.href = orig && orig.getAttribute ? orig.getAttribute("href") || "#" + n.hash : "#" + n.hash;
        if (n.hash === activeHash) row.classList.add("bm-active");
        if (hasKids) {
            childWrap = doc.createElement("ul");
            childWrap.className = "bm-children";
        }
        $6282e142bf746237$export$8559c98d157fcda1(row, childWrap, mustOpen);
        row.dataset.initialOpen = mustOpen ? "1" : "0";
        if (btn) $6282e142bf746237$export$9a698d10fbdc5726(btn, mustOpen);
        if (btn) btn.addEventListener("click", (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
            const nowOpen = !row.classList.contains("bm-open");
            state[n.key] = nowOpen ? 1 : 0;
            (0, $34de0361b1c4c74d$export$fb931cd598921492)(state);
            $6282e142bf746237$export$8559c98d157fcda1(row, childWrap, nowOpen);
            $6282e142bf746237$export$9a698d10fbdc5726(btn, nowOpen);
        }, true);
        a.addEventListener("click", (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
            if (hasKids && !row.classList.contains("bm-open")) {
                state[n.key] = 1;
                (0, $34de0361b1c4c74d$export$fb931cd598921492)(state);
                $6282e142bf746237$export$8559c98d157fcda1(row, childWrap, true);
                if (btn) $6282e142bf746237$export$9a698d10fbdc5726(btn, true);
            }
            const ok = (0, $4f0046e728a1a92c$export$f6e7aeaeea1ff0ef)(toc, n.hash);
            if (!ok) {
                try {
                    (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).location.hash = "#" + n.hash;
                } catch (e2) {}
                try {
                    window.location.hash = "#" + n.hash;
                } catch (e3) {}
            }
            (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).setTimeout(()=>{
                try {
                    syncActive(toc);
                } catch (e) {}
            }, 80);
        }, true);
        row.appendChild(a);
        li.appendChild(row);
        if (hasKids && childWrap) {
            const kids = $6282e142bf746237$export$3fb6f1d56c512c02(doc, toc, n.children, state, activeHash, forceOpen, syncActive);
            while(kids.firstChild)childWrap.appendChild(kids.firstChild);
            li.appendChild(childWrap);
        }
        ul.appendChild(li);
    }
    return ul;
}



function $3c9e6b683d5c4a4a$export$de863c629cb9919d(toc) {
    try {
        if (!toc) return;
        const box = toc.querySelector("#lia-bm-toc5");
        if (box) box.remove();
        (0, $4f0046e728a1a92c$export$2ba3451cbdd9604)(toc);
        toc.classList.remove("lia-bm-toc5-active");
        try {
            toc.querySelectorAll(".lia-bm-overview-pin").forEach((el)=>el.classList.remove("lia-bm-overview-pin"));
        } catch (e) {}
    } catch (e) {}
}
function $3c9e6b683d5c4a4a$export$93c9ca42d9025d6f(toc) {
    try {
        if (!toc) return;
        const box = toc.querySelector ? toc.querySelector("#lia-bm-toc5") : null;
        if (!box) return;
        const activeHash = (0, $4f0046e728a1a92c$export$d283933afefc345a)(toc);
        if (!activeHash) return;
        box.querySelectorAll(".bm-row.bm-active").forEach((r)=>r.classList.remove("bm-active"));
        const links = Array.from(box.querySelectorAll('a[href*="#"]'));
        const needle = "#" + activeHash;
        const a = links.find((x)=>(x.getAttribute("href") || "").includes(needle));
        if (a && a.closest) {
            const row = a.closest(".bm-row");
            if (row) row.classList.add("bm-active");
        }
    } catch (e) {}
}
let $3c9e6b683d5c4a4a$var$LOCK = false;
function $3c9e6b683d5c4a4a$export$7ff6d543f13c7390() {
    if ($3c9e6b683d5c4a4a$var$LOCK) return false;
    $3c9e6b683d5c4a4a$var$LOCK = true;
    try {
        const toc = (0, $4f0046e728a1a92c$export$e8db3e6bc578b931)();
        if (!toc) return false;
        if ((0, $4f0046e728a1a92c$export$f5c1f1e7b385e9e0)()) {
            $3c9e6b683d5c4a4a$export$de863c629cb9919d(toc);
            return false;
        }
        const TOC_DOC = toc.ownerDocument || (0, $53e78f2af9ed7736$export$bff967cc1c105f0f) || document;
        (0, $f428b9566db24984$export$b9324dd3ed41badd)(TOC_DOC);
        (0, $f428b9566db24984$export$b9324dd3ed41badd)((0, $53e78f2af9ed7736$export$bff967cc1c105f0f));
        if ((0, $53e78f2af9ed7736$export$bff967cc1c105f0f) !== document) (0, $f428b9566db24984$export$b9324dd3ed41badd)(document);
        (0, $4f0046e728a1a92c$export$2ba3451cbdd9604)(toc);
        (0, $4f0046e728a1a92c$export$96272e1284a3c47f)(toc);
        const toolbar = toc.querySelector(".lia-toolbar");
        const overviewBtn = (0, $4f0046e728a1a92c$export$99405462185ad892)(toc);
        const overviewChild = (0, $4f0046e728a1a92c$export$b739510726b33d9b)(toc, overviewBtn);
        if (overviewBtn && !overviewBtn.getAttribute("data-lia-bm-hooked")) {
            overviewBtn.setAttribute("data-lia-bm-hooked", "1");
            overviewBtn.addEventListener("click", ()=>{
                const t = (0, $4f0046e728a1a92c$export$e8db3e6bc578b931)();
                if (t) $3c9e6b683d5c4a4a$export$de863c629cb9919d(t);
            }, true);
        }
        const old = toc.querySelector("#lia-bm-toc5");
        if (old) old.remove();
        const links = (0, $4f0046e728a1a92c$export$4c20068729563fa0)(toc);
        if (!links.length) return false;
        const nodes = [];
        const seen = new Set();
        links.forEach((a)=>{
            const hash = (0, $4f0046e728a1a92c$export$e262d2f9ab788f70)(a.getAttribute("href") || "");
            if (!hash) return;
            const key = "h:" + hash;
            if (seen.has(key)) return;
            seen.add(key);
            const lvl = (0, $a016e3f2b62aeabf$export$b779dbab437835ad)(a, toc);
            nodes.push({
                key: key,
                hash: hash,
                text: (a.textContent || "").trim().replace(/\s+/g, " "),
                level: lvl || 0,
                indent: (0, $a016e3f2b62aeabf$export$af87c064a1e4aa54)(a)
            });
        });
        (0, $a016e3f2b62aeabf$export$4cf7e493412563d2)(nodes);
        const tree = (0, $a016e3f2b62aeabf$export$9896244d8c99a4d0)(nodes);
        const state = (0, $34de0361b1c4c74d$export$ea32cbdd559da174)();
        const activeHash = (0, $4f0046e728a1a92c$export$d283933afefc345a)(toc) || "";
        (function initDefaults(list) {
            for (const n of list)if (n.children && n.children.length) {
                if (state[n.key] !== 0 && state[n.key] !== 1) state[n.key] = 0;
                initDefaults(n.children);
            }
        })(tree);
        const forceOpen = activeHash ? (0, $a016e3f2b62aeabf$export$18de645ac3abdaed)(tree, activeHash) : new Set();
        const box = TOC_DOC.createElement("div");
        box.id = "lia-bm-toc5";
        box.appendChild((0, $6282e142bf746237$export$3fb6f1d56c512c02)(TOC_DOC, toc, tree, state, activeHash, forceOpen, $3c9e6b683d5c4a4a$export$93c9ca42d9025d6f));
        (0, $6282e142bf746237$export$4704e56753c56edf)(TOC_DOC, toc, box, state);
        if (toolbar && toolbar.parentElement === toc) toolbar.insertAdjacentElement("afterend", box);
        else toc.insertBefore(box, toc.firstChild);
        toc.classList.add("lia-bm-toc5-active");
        (0, $4f0046e728a1a92c$export$bd404365fad2e626)(toc, toolbar, box, overviewChild);
        (0, $34de0361b1c4c74d$export$fb931cd598921492)(state);
        return true;
    } catch (e) {
        return false;
    } finally{
        $3c9e6b683d5c4a4a$var$LOCK = false;
    }
}



(function() {
    // =========================================================
    // Root/Doc (iframe-safe)
    // =========================================================
    function getRootWindowSafe() {
        let w = window;
        try {
            while(w.parent && w.parent !== w)w = w.parent;
        } catch (e) {}
        return w;
    }
    let root = getRootWindowSafe();
    let rootDoc = null;
    try {
        rootDoc = root.document;
    } catch (e) {
        root = window;
        rootDoc = document;
    }
    (0, $53e78f2af9ed7736$export$54fae1269cb9a9e0)(root, rootDoc);
    // =========================================================
    // Run-once Registry (import-safe)
    // =========================================================
    const REGKEY = "__LIA_BM_TOC5_V63__";
    if ((0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY] && (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY].installed) {
        try {
            (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY].kick && (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY].kick();
        } catch (e) {}
        return;
    }
    (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY] = (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY] || {};
    (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY].installed = true;
    // =========================================================
    // Boot
    // =========================================================
    let tries = 0;
    const bootTimer = (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).setInterval(()=>{
        tries++;
        const ok = (0, $3c9e6b683d5c4a4a$export$7ff6d543f13c7390)();
        if (ok || tries > 160) (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).clearInterval(bootTimer);
    }, 150);
    (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).setInterval(()=>{
        const toc = (0, $4f0046e728a1a92c$export$e8db3e6bc578b931)();
        if (!toc) return;
        if ((0, $4f0046e728a1a92c$export$f5c1f1e7b385e9e0)()) {
            (0, $3c9e6b683d5c4a4a$export$de863c629cb9919d)(toc);
            return;
        }
        (0, $4f0046e728a1a92c$export$96272e1284a3c47f)(toc);
        const box = toc.querySelector("#lia-bm-toc5");
        if (!box) (0, $3c9e6b683d5c4a4a$export$7ff6d543f13c7390)();
        else {
            const toolbar = toc.querySelector(".lia-toolbar");
            const overviewBtn = (0, $4f0046e728a1a92c$export$99405462185ad892)(toc);
            const customOverviewBtn = box.querySelector(".bm-overview-button");
            if (!customOverviewBtn) {
                (0, $3c9e6b683d5c4a4a$export$7ff6d543f13c7390)();
                return;
            }
            const overviewChild = (0, $4f0046e728a1a92c$export$b739510726b33d9b)(toc, overviewBtn);
            (0, $4f0046e728a1a92c$export$bd404365fad2e626)(toc, toolbar, box, overviewChild);
            toc.classList.add("lia-bm-toc5-active");
            (0, $3c9e6b683d5c4a4a$export$93c9ca42d9025d6f)(toc);
        }
    }, 700);
    try {
        (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4).addEventListener("hashchange", ()=>{
            const toc = (0, $4f0046e728a1a92c$export$e8db3e6bc578b931)();
            if (toc) (0, $3c9e6b683d5c4a4a$export$93c9ca42d9025d6f)(toc);
        }, true);
    } catch (e) {}
    // Expose for kick
    (0, $53e78f2af9ed7736$export$fbea82a1c0574ef4)[REGKEY].kick = function() {
        try {
            const toc = (0, $4f0046e728a1a92c$export$e8db3e6bc578b931)();
            if (toc && !(0, $4f0046e728a1a92c$export$f5c1f1e7b385e9e0)()) (0, $3c9e6b683d5c4a4a$export$7ff6d543f13c7390)();
            if (toc && (0, $4f0046e728a1a92c$export$f5c1f1e7b385e9e0)()) (0, $3c9e6b683d5c4a4a$export$de863c629cb9919d)(toc);
        } catch (e) {}
    };
})();


//# sourceMappingURL=index.js.map
