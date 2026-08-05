export const STYLE_ID = "lia-bm-toc5-style";

export const CSS_TEXT = `
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

export function ensureStyle(doc: Document | null): void {
  if (!doc) return;
  try {
    const existing = doc.getElementById(STYLE_ID);
    if (existing) {
      if (existing.textContent !== CSS_TEXT) existing.textContent = CSS_TEXT;
      return;
    }

    const st = doc.createElement("style");
    st.id = STYLE_ID;
    st.type = "text/css";
    st.appendChild(doc.createTextNode(CSS_TEXT));
    (doc.head || doc.documentElement || doc.body).appendChild(st);
  } catch (e) {}
}
