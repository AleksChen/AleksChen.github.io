import{m as w}from"./RelativeTime.CYA5j59e.js";import{c as e}from"./hoisted.BmVyzazd.js";import"./auth.DBWg9IQM.js";const b=(o,s="搜索文章...",l="")=>{const n=document.querySelector(o);if(!n)return;let d;const h=r=>{const t=r.target.value.toLowerCase().trim();clearTimeout(d),d=setTimeout(()=>{Array.from(document.querySelectorAll(".post-item")).forEach(i=>{const g=i.querySelector(".page-title")?.textContent?.toLowerCase()||"",f=i.querySelector("p")?.textContent?.toLowerCase()||"",v=g.includes(t)||f.includes(t);t===""||v?i.style.display="block":i.style.display="none"})},300)},y=()=>{const r=n.querySelector(".search-container"),t=n.querySelector("input");t&&(t.value="",t.dispatchEvent(new Event("input",{bubbles:!0})),r.classList.remove("expanded"),t.blur())},x=()=>{const r=n.querySelector(".search-container"),t=n.querySelector("input");r.classList.contains("expanded")?(r.classList.remove("expanded"),t.blur(),t.value="",t.dispatchEvent(new Event("input",{bubbles:!0}))):(r.classList.add("expanded"),t.focus())},c=e("div",{class:`w-full max-w-500px mx-auto ${l}`},e("div",{class:"search-container relative flex items-center justify-center bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl transition-all duration-300 shadow-sm hover:shadow-md focus-within:(border-primary bg-white dark:bg-gray-900 shadow-lg -translate-y-0.5) w-6 h-6 cursor-pointer"},e("div",{class:"flex items-center justify-center text-gray-400 transition-colors duration-200 focus-within:text-primary flex-shrink-0 absolute hover:scale-120 transition-transform",onClick:x},e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"m21 21-4.35-4.35"}))),e("input",{type:"text",placeholder:s,class:"flex-1 border-none outline-none bg-transparent text-sm font-medium text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 opacity-0 w-0 transition-all duration-300",onInput:h}),e("button",{class:"flex items-center justify-center bg-gray-200 dark:bg-gray-700 border-none rounded-full w-4 h-4 cursor-pointer transition-all duration-200 text-gray-500 hover:(bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 scale-110) active:scale-95 ml-2 flex-shrink-0 opacity-0 pointer-events-none",onClick:y},e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))))),u=document.createElement("style");u.textContent=`
    .search-container {
      transform-origin: center !important;
      margin: 0 auto !important;
    }
    .search-container:not(.expanded) {
      width: 24px !important;
      justify-content: center !important;
    }
    .search-container.expanded {
      width: 100% !important;
      padding-left: 4px !important;
      padding-right: 4px !important;
      justify-content: flex-start !important;
    }
    .search-container.expanded input {
      opacity: 1 !important;
      width: 100% !important;
      margin-left: 4px;
    }
    .search-container.expanded button {
      opacity: 1 !important;
      pointer-events: auto !important;
    }
    .search-container.expanded > div:first-child {
      position: static !important;
    }
  `,document.head.appendChild(u);const p=c.querySelector("input"),a=c.querySelector("button");p.addEventListener("input",()=>{p.value.length>0?(a.classList.remove("opacity-0","pointer-events-none"),a.classList.add("opacity-100","pointer-events-auto")):(a.classList.add("opacity-0","pointer-events-none"),a.classList.remove("opacity-100","pointer-events-auto"))}),n.replaceChildren(c)};w("data-acc-time");b("#search-container");const m=()=>{const o=document.querySelector(".blog-title");if(!o)return;const s=window.pageYOffset||document.documentElement.scrollTop,n=Math.max(0,1-s/50);o.style.opacity=n.toString()};window.addEventListener("scroll",m);m();
