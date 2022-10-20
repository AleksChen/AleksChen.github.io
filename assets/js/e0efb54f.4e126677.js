"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[4170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6982:(e,t,n)=>{n.d(t,{Z:()=>o});var r,a=n(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16",role:"img","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))}},6478:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7294);const a="linkWrapper_UtM8",l="textArea_m5TB",o="textBold_CHby",i="linkSVG_jmig";var p=n(6010),s=n(9960),c=n(6982),u=n(2263);function m(e){let{bold:t=!1,children:n,link:m,openWindow:d=!1,type:y="doc",wrapperClassName:f,wrapperStyle:b}=e;const{siteConfig:g}=(0,u.Z)();return r.createElement("span",{style:b,className:(0,p.Z)(a,f)},r.createElement(s.Z,{to:d?g.url+m:m},r.createElement("span",{className:(0,p.Z)(l,t&&o)},n,(d||"external"===y)&&r.createElement(c.Z,{className:i}))))}},3021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(6478);const o={title:"TSConfig",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-30",author:"Cww"}},i=void 0,p={unversionedId:"typescript/tsconfig",id:"typescript/tsconfig",title:"TSConfig",description:"",source:"@site/docs/typescript/tsconfig.mdx",sourceDirName:"typescript",slug:"/typescript/tsconfig",permalink:"/blog/docs/typescript/tsconfig",draft:!1,tags:[{label:"TypeScript",permalink:"/blog/docs/tags/typescript"}],version:"current",frontMatter:{title:"TSConfig",description:"",tags:[{label:"TypeScript",permalink:"typescript"}],last_update:{date:"2022-07-30",author:"Cww"}},sidebar:"typescript",previous:{title:"\u7c7b\u578b\u522b\u540d",permalink:"/blog/docs/typescript/types/type-alias"},next:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/blog/docs/typescript/best-practice/"}},s={},c=[{value:"CompilerOptions - Modules",id:"compileroptions---modules",level:2},{value:"Base Url",id:"base-url",level:3},{value:"Paths",id:"paths",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"compileroptions---modules"},"CompilerOptions - Modules"),(0,a.kt)("h3",{id:"base-url"},"Base Url"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," - \u5b9a\u4e49\u4e00\u4e2a\u6839\u76ee\u5f55\u7528\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u89e3\u6790\u975e\u7edd\u5bf9\u8def\u5f84"),"\u7684\u6a21\u5757\u540d\u79f0"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u538c\u5026\u4e86\u5730\u72f1\u822c\u5d4c\u5957\u7684\u76f8\u5bf9\u8def\u5f84\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"./")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"../"),"\uff0c\u6216\u8005\u5f53\u79fb\u52a8\u6587\u4ef6\u65f6\u9700\u8981\u4fee\u6539\u5bfc\u5165\u7684\u76f8\u5bf9\u8def\u5f84\uff0c\u63a8\u8350\u4f7f\u7528\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl")," \u89e3\u6790\u7684\u7edd\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"paths"},"Paths"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"paths")," - \u6839\u636e ",(0,a.kt)("strong",{parentName:"p"},"baseUrl")," \u4e3a\u7edd\u5bf9\u8def\u5f84\u5b9a\u4e49\u522b\u540d\uff0c\u907f\u514d\u4f7f\u7528\u8fc7\u957f\u7684\u76f8\u5bf9\u8def\u5f84"),(0,a.kt)("p",null,"\u4f7f\u7528\u8be5\u5c5e\u6027\u7684\u524d\u63d0\u662f\u5b9a\u4e49\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"baseUrl"),"\uff0c\u4f7f\u7528\u8be5\u5c5e\u6027\u53ef\u4ee5\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u6839\u636e\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u524d\u7f00\u53bb\u89e3\u6790\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "jquery": ["node_modules/jquery/dist/jquery"],\n      "src/*": ["src/*"]\n    }\n  }\n}\n')),(0,a.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7edd\u5bf9\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/*")," \u7684\u65b9\u5f0f\u6765\u5bfc\u5165 src \u76ee\u5f55\u4e2d\u7684\u6a21\u5757\u3002"),(0,a.kt)("admonition",{title:"\u8b66\u544a",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"paths")," \u53ea\u5f71\u54cd ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," \u7f16\u8bd1\uff0c\u4f46\u4e0d\u4f1a\u5bf9\u8f93\u51fa\u5185\u5bb9\u8fdb\u884c\u4fee\u6539\u3002\u4e0d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," \u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\u5c31\u4f1a\u62a5\u9519\u3002\u63a8\u8350\u5f15\u5165 ",(0,a.kt)("strong",{parentName:"p"},"webpack")," \u4e4b\u7c7b\u7684\u6784\u5efa\u5de5\u5177\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 \u5982\u4f55\u89e3\u51b3\uff1f"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u5f15\u5165 ",(0,a.kt)("strong",{parentName:"li"},"webpack")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)(l.Z,{bold:!0,openWindow:!0,link:"/docs/npm/ts-node",mdxType:"HyperLink"},"ts-node")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"Babel")," \u8f6c\u6362\u4ee3\u7801\uff08\u8f6c\u6362\uff1ababel-plugin-module-resolver\uff0clint\uff1aeslint-import-resolver-typescript\uff09"))))}m.isMDXComponent=!0}}]);