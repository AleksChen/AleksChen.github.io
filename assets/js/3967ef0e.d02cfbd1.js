"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5713:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const a="highlightArea__DwO";var p=r(6010),o=r(838);function i(e){let{children:t,bgColor:r,wrapperClassName:i,wrapperStyle:l}=e;const s={backgroundColor:`${(0,o.yz)(r)}`},c=Object.assign(s,l);return n.createElement("span",{className:(0,p.Z)(a,i),style:c},t)}},838:(e,t,r)=>{let n;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}r.d(t,{tq:()=>a,yz:()=>o}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(n||(n={}));var p;function o(e){switch(e){case p.Primary:case"":case void 0:case null:return"#25c2a0";case p.Red:return"#e53935";case p.Pink:return"#d81b60";case p.Blue:return"#1e88e5";case p.Purple:return"#ba68c8";case p.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(p||(p={}))},1234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),p=r(5713);const o={title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Winwoo"}},i=void 0,l={unversionedId:"typescript/debug",id:"typescript/debug",title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",description:"",source:"@site/docs/typescript/debug.mdx",sourceDirName:"typescript",slug:"/typescript/debug",permalink:"/docs/typescript/debug",draft:!1,tags:[{label:"TypeScript",permalink:"/docs/tags/typescript"}],version:"current",frontMatter:{title:"\u8fd0\u884c\u4e0e\u8c03\u8bd5",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-15",author:"Winwoo"}},sidebar:"typescript",previous:{title:"\u642d\u5efa\u73af\u5883",permalink:"/docs/typescript/environment"},next:{title:"\u7c7b\u578b",permalink:"/docs/typescript/types"}},s={},c=[{value:"\u5c06 TypeScript \u7f16\u8bd1\u6210 JavaScript",id:"\u5c06-typescript-\u7f16\u8bd1\u6210-javascript",level:2},{value:"\u5982\u4f55\u8fd0\u884c TypeScript \u6587\u4ef6",id:"\u5982\u4f55\u8fd0\u884c-typescript-\u6587\u4ef6",level:2},{value:"\u4f7f\u7528 ts-node \u542f\u52a8 TypeScript \u6587\u4ef6",id:"\u4f7f\u7528-ts-node-\u542f\u52a8-typescript-\u6587\u4ef6",level:2},{value:"\u4f7f\u7528 nodemon \u76d1\u89c6\u6587\u4ef6\u6539\u52a8\uff0c\u91cd\u542f\u9879\u76ee",id:"\u4f7f\u7528-nodemon-\u76d1\u89c6\u6587\u4ef6\u6539\u52a8\u91cd\u542f\u9879\u76ee",level:2},{value:"\u4f7f\u7528 Visual Studio Code \u8c03\u8bd5",id:"\u4f7f\u7528-visual-studio-code-\u8c03\u8bd5",level:2},{value:"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6",id:"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:3},{value:"\u76d1\u89c6\u8868\u8fbe\u5f0f",id:"\u76d1\u89c6\u8868\u8fbe\u5f0f",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5c06-typescript-\u7f16\u8bd1\u6210-javascript"},"\u5c06 TypeScript \u7f16\u8bd1\u6210 JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u8fd0\u884c-typescript-\u6587\u4ef6"},"\u5982\u4f55\u8fd0\u884c TypeScript \u6587\u4ef6"),(0,a.kt)("p",null,"\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," \u6587\u4ef6\u9700\u8981\u5148\u5c06 ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," \u7f16\u8bd1\u6210 ",(0,a.kt)("strong",{parentName:"p"},"JavaScript"),"\uff0c\u7136\u540e\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"node")," \u6267\u884c\u751f\u6210\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," \u547d\u4ee4\u7f16\u8bd1 ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," \u6587\u4ef6\uff0c\u518d\u7528 ",(0,a.kt)("strong",{parentName:"p"},"node")," \u6267\u884c\u5f53\u524d\u6240\u5728\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc && node index.js\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-ts-node-\u542f\u52a8-typescript-\u6587\u4ef6"},"\u4f7f\u7528 ts-node \u542f\u52a8 TypeScript \u6587\u4ef6"),(0,a.kt)("p",null,"\u8bf7\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/npm/ts-node"},"ts-node"),"\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-nodemon-\u76d1\u89c6\u6587\u4ef6\u6539\u52a8\u91cd\u542f\u9879\u76ee"},"\u4f7f\u7528 nodemon \u76d1\u89c6\u6587\u4ef6\u6539\u52a8\uff0c\u91cd\u542f\u9879\u76ee"),(0,a.kt)("p",null,"\u8bf7\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/npm/nodemon"},"nodemon"),"\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-visual-studio-code-\u8c03\u8bd5"},"\u4f7f\u7528 Visual Studio Code \u8c03\u8bd5"),(0,a.kt)("h3",{id:"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6"},"\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Visual Studio Code")," \u4fa7\u8fb9\u680f",(0,a.kt)("strong",{parentName:"p"},"\u300c\u8fd0\u884c\u4e0e\u8c03\u8bd5\u300d"),"\u4e2d\u521b\u5efa\u8c03\u8bd5\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"launch.json"),"\uff0c\u9009\u62e9\u8c03\u8bd5\u5668 ",(0,a.kt)(p.Z,{mdxType:"TH"},"Node.js"),"\uff0c\u751f\u6210\u5982\u4e0b\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON"',title:'"JSON"'},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "pwa-node",\n      "request": "launch",\n      "name": "Launch Program",\n      "skipFiles": ["<node_internals>/**"],\n      "program": "${workspaceFolder}/src/index.ts",\n      "outFiles": ["${workspaceFolder}/**/*.js"]\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,a.kt)("p",null,"\u5728\u4fa7\u8fb9\u680f",(0,a.kt)("strong",{parentName:"p"},"\u300c\u8fd0\u884c\u4e0e\u8c03\u8bd5 - \u53d8\u91cf\u300d"),"\u4e2d\u53ef\u4ee5\u770b\u5230\u5168\u90e8\u53d8\u91cf\u5728\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u7684\u503c\u3002"),(0,a.kt)("h3",{id:"\u76d1\u89c6\u8868\u8fbe\u5f0f"},"\u76d1\u89c6\u8868\u8fbe\u5f0f"),(0,a.kt)("p",null,"\u5728\u4fa7\u8fb9\u680f",(0,a.kt)("strong",{parentName:"p"},"\u300c\u8fd0\u884c\u4e0e\u8c03\u8bd5 - \u76d1\u89c6\u300d"),"\u4e2d\u6dfb\u52a0",(0,a.kt)("strong",{parentName:"p"},"\u76d1\u89c6\u8868\u8fbe\u5f0f"),"\uff0c\u53ef\u4ee5\u6839\u636e",(0,a.kt)("strong",{parentName:"p"},"\u65ad\u70b9"),"\u76d1\u89c6\u8be5\u8868\u8fbe\u5f0f\u7684\u53d8\u5316\u3002"))}d.isMDXComponent=!0}}]);