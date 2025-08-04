import{m as v}from"./RelativeTime.CYA5j59e.js";import{c as e}from"./hoisted.BmVyzazd.js";import"./auth.DBWg9IQM.js";const b=(d,u="搜索文章...",p="")=>{const r=document.querySelector(d);if(!r)return;let s;const h=n=>{const t=n.target.value.toLowerCase().trim();clearTimeout(s),s=setTimeout(()=>{Array.from(document.querySelectorAll(".post-item")).forEach(a=>{const x=a.querySelector(".page-title")?.textContent?.toLowerCase()||"",g=a.querySelector("p")?.textContent?.toLowerCase()||"",f=x.includes(t)||g.includes(t);t===""||f?a.style.display="block":a.style.display="none"})},300)},m=()=>{const n=r.querySelector(".search-container"),t=r.querySelector("input");t&&(t.value="",t.dispatchEvent(new Event("input",{bubbles:!0})),n.classList.remove("expanded"),t.blur())},y=()=>{const n=r.querySelector(".search-container"),t=r.querySelector("input");n.classList.contains("expanded")?(n.classList.remove("expanded"),t.blur(),t.value="",t.dispatchEvent(new Event("input",{bubbles:!0}))):(n.classList.add("expanded"),t.focus())},i=e("div",{class:`w-full max-w-500px mx-auto ${p}`},e("div",{class:"search-container relative flex items-center justify-center bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl transition-all duration-300 shadow-sm hover:shadow-md focus-within:(border-primary bg-white dark:bg-gray-900 shadow-lg -translate-y-0.5) w-6 h-6 cursor-pointer"},e("div",{class:"flex items-center justify-center text-gray-400 transition-colors duration-200 focus-within:text-primary flex-shrink-0 absolute hover:scale-120 transition-transform",onClick:y},e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"m21 21-4.35-4.35"}))),e("input",{type:"text",placeholder:u,class:"flex-1 border-none outline-none bg-transparent text-sm font-medium text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 opacity-0 w-0 transition-all duration-300",onInput:h}),e("button",{class:"flex items-center justify-center bg-gray-200 dark:bg-gray-700 border-none rounded-full w-4 h-4 cursor-pointer transition-all duration-200 text-gray-500 hover:(bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 scale-110) active:scale-95 ml-2 flex-shrink-0 opacity-0 pointer-events-none",onClick:m},e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))))),c=document.createElement("style");c.textContent=`
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
  `,document.head.appendChild(c);const l=i.querySelector("input"),o=i.querySelector("button");l.addEventListener("input",()=>{l.value.length>0?(o.classList.remove("opacity-0","pointer-events-none"),o.classList.add("opacity-100","pointer-events-auto")):(o.classList.add("opacity-0","pointer-events-none"),o.classList.remove("opacity-100","pointer-events-auto"))}),r.replaceChildren(i)};v("data-acc-time");b("#search-container");
