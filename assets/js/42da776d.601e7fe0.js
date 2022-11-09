"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[8644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,p(p({ref:t},i),{},{components:r})):n.createElement(y,p({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5713:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);const a="highlightArea__DwO";var o=r(6010),p=r(838);function l(e){let{children:t,bgColor:r,wrapperClassName:l,wrapperStyle:s}=e;const c={backgroundColor:`${(0,p.yz)(r)}`},i=Object.assign(c,s);return n.createElement("span",{className:(0,o.Z)(a,l),style:i},t)}},838:(e,t,r)=>{let n;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}function o(e){navigator.clipboard.writeText(e)}r.d(t,{tq:()=>a,Vf:()=>o,yz:()=>l}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(n||(n={}));var p;function l(e){switch(e){case p.Primary:case"":case void 0:case null:return"#25c2a0";case p.Red:return"#e53935";case p.Pink:return"#d81b60";case p.Blue:return"#1e88e5";case p.Purple:return"#ba68c8";case p.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(p||(p={}))},708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905)),o=r(5713);const p={title:"splice"},l=void 0,s={unversionedId:"javascript/reference-types/array/splice",id:"javascript/reference-types/array/splice",title:"splice",description:"splice() \u65b9\u6cd5\u901a\u8fc7\u5220\u9664\u6216\u66ff\u6362\u73b0\u6709\u5143\u7d20\u3001\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u6765\u4fee\u6539\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u4fee\u6539\uff08\u5220\u9664\uff09\u5185\u5bb9\u7684\u6570\u7ec4\uff0c\u6b64\u65b9\u6cd5\u4f1a\u6539\u53d8\u539f\u6570\u7ec4\u3002",source:"@site/docs/javascript/reference-types/array/splice.mdx",sourceDirName:"javascript/reference-types/array",slug:"/javascript/reference-types/array/splice",permalink:"/blog/docs/javascript/reference-types/array/splice",draft:!1,tags:[],version:"current",frontMatter:{title:"splice"},sidebar:"javascript",previous:{title:"\u6570\u7ec4",permalink:"/blog/docs/javascript/reference-types/array/"},next:{title:"\u7c7b\u6570\u7ec4\u5bf9\u8c61",permalink:"/blog/docs/javascript/reference-types/array-like-object"}},c={},i=[{value:"\u622a\u53d6\u6570\u7ec4\u524d n \u9879",id:"\u622a\u53d6\u6570\u7ec4\u524d-n-\u9879",level:2},{value:"\u622a\u53d6\u6570\u7ec4\u540e n \u9879",id:"\u622a\u53d6\u6570\u7ec4\u540e-n-\u9879",level:2},{value:"\u63d2\u5165 n \u4e2a\u5143\u7d20",id:"\u63d2\u5165-n-\u4e2a\u5143\u7d20",level:2},{value:"\u66ff\u6362 n \u4e2a\u5143\u7d20",id:"\u66ff\u6362-n-\u4e2a\u5143\u7d20",level:2}],u={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"splice()")," \u65b9\u6cd5\u901a\u8fc7",(0,a.kt)(o.Z,{mdxType:"TH"},"\u5220\u9664"),"\u6216",(0,a.kt)(o.Z,{mdxType:"TH"},"\u66ff\u6362"),"\u73b0\u6709\u5143\u7d20\u3001",(0,a.kt)(o.Z,{mdxType:"TH"},"\u6dfb\u52a0"),"\u65b0\u7684\u5143\u7d20\u6765\u4fee\u6539\u6570\u7ec4\uff0c\u5e76",(0,a.kt)(o.Z,{mdxType:"TH"},"\u8fd4\u56de\u4fee\u6539\uff08\u5220\u9664\uff09\u5185\u5bb9\u7684\u6570\u7ec4"),"\uff0c\u6b64\u65b9\u6cd5",(0,a.kt)(o.Z,{mdxType:"TH"},"\u4f1a\u6539\u53d8\u539f\u6570\u7ec4"),"\u3002"),(0,a.kt)("h2",{id:"\u622a\u53d6\u6570\u7ec4\u524d-n-\u9879"},"\u622a\u53d6\u6570\u7ec4\u524d n \u9879"),(0,a.kt)("p",null,"\u5982\u4e0b superHero \u6570\u7ec4\uff0c\u6211\u60f3\u5c06\u5176\u4e2d\u7684 DC \u8d85\u7ea7\u82f1\u96c4\u548c\u6f2b\u5a01\u8d85\u7ea7\u82f1\u96c4\u5206\u5f00\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"splice()")," \u65b9\u6cd5\uff0c\u4ece 0 \u4e0b\u6807\u7684\u5143\u7d20\u5f00\u59cb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const superHeros = [\n  "Batman",\n  "Superman",\n  "Wonderwoman",\n  "Ironman",\n  "Spiderman",\n];\nlet deleteItems = superHeros.splice(0, 3);\nconsole.log(superHeros); // expected output: Array ["Ironman", "Spiderman"]\nconsole.log(deleteItems); // expected output: Array ["Batman", "Superman", "Wonderwoman"]\n')),(0,a.kt)("h2",{id:"\u622a\u53d6\u6570\u7ec4\u540e-n-\u9879"},"\u622a\u53d6\u6570\u7ec4\u540e n \u9879"),(0,a.kt)("p",null,"\u4e0a\u8ff0 superHero \u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u53bb\u9664\u524d\u9762\u7684\u6f2b\u5a01\u8d85\u7ea7\u82f1\u96c4\uff0c\u6765\u5f97\u5230 DC \u8d85\u7ea7\u82f1\u96c4\u7684\u6570\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(3, 2);\nconsole.log(superHeros); // expected output: Array ["Batman", "Superman", "Wonderwoman"]\nconsole.log(deleteItems); // expected output: Array ["Ironman", "Spiderman"]\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"splice()")," \u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"start:int")," \u5982\u679c",(0,a.kt)("strong",{parentName:"p"},"\u8d85\u8fc7\u6570\u7ec4\u957f\u5ea6"),"\uff0c\u5219\u4ece",(0,a.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u672b\u5c3e\u5f00\u59cb\u6dfb\u52a0\u5185\u5bb9"),"\uff1b\u5982\u679c\u662f",(0,a.kt)("strong",{parentName:"p"},"\u8d1f\u6570"),"\uff0c\u5219\u8868\u793a",(0,a.kt)("strong",{parentName:"p"},"\u4ece\u672b\u5c3e\u5f00\u59cb"),"\u7684\u7b2c\u51e0\u4f4d\uff0c\u5982\u679c\u8d1f\u6570\u7684\u7edd\u5bf9\u503c\u5927\u4e8e\u6570\u7ec4\u957f\u5ea6\uff0c\u5219\u8868\u793a\u5f00\u59cb\u4f4d\u7f6e\u4e3a\u4e0b\u6807\u4e3a 0 \u7684\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u540c\u7406\u4e0a\u8ff0\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u5199\u6210\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"start")," \u53c2\u6570\u53d6\u5176\u7edd\u5bf9\u503c 2\uff0c\u8868\u793a\u4ece\u672b\u5c3e\u7b2c\u4e8c\u4e2a\u5143\u7d20\u5f00\u59cb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHero.splice(-2, 2);\nconsole.log(deleteItems); // expect output: Array ["Ironman", "Spiderman"]\n')),(0,a.kt)("h2",{id:"\u63d2\u5165-n-\u4e2a\u5143\u7d20"},"\u63d2\u5165 n \u4e2a\u5143\u7d20"),(0,a.kt)("p",null,'\u5728\u7d22\u5f15\u4e3a 0 \u5904\uff0c\u63d2\u5165\u4e00\u4e2a\u5143\u7d20 "Aquaman"\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(0, 0, "Aquaman");\nconsole.log(superHeros); // expect output: Array ["Aquaman", "Batman", "Superman", "Wonderwoman", "Ironman", "Spiderman"]\nconsole.log(deleteItems); // expect output: Array []\n')),(0,a.kt)("p",null,"\u63d2\u5165 n \u4e2a\u5143\u7d20\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(0, 0, "Aquaman", "Aquaman", "Aquaman");\nconsole.log(superHeros); // expect output: Array ["Aquaman", "Aquaman", "Aquaman", "Batman", "Superman", "Wonderwoman", "Ironman", "Spiderman"]\nconsole.log(deleteItems); // expect output: Array []\n')),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteCount")," \u4e3a 0\uff0c\u8868\u793a\u4e0d\u5220\u9664\u5143\u7d20\uff0c\u6240\u4ee5\u4f1a\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002")),(0,a.kt)("h2",{id:"\u66ff\u6362-n-\u4e2a\u5143\u7d20"},"\u66ff\u6362 n \u4e2a\u5143\u7d20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let deleteItems = superHeros.splice(0, 1, "Aquaman");\nconsole.log(superHeros); // expect output: Array ["Aquaman", "Superman", "Wonderwoman", "Ironman", "Spiderman"]\nconsole.log(deleteItems); // expect output: Array ["Batman"]\n')),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4f1a",(0,a.kt)(o.Z,{mdxType:"TH"},"\u5148\u6267\u884c\u5220\u9664\u64cd\u4f5c"),"\u518d\u6267\u884c\u6dfb\u52a0\u64cd\u4f5c\u3002")))}m.isMDXComponent=!0}}]);