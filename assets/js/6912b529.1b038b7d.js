"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[7876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={title:"\u5f02\u6b65\u5faa\u73af\u6253\u5370"},a=void 0,c={unversionedId:"interview/hands-on-practice/async-print",id:"interview/hands-on-practice/async-print",title:"\u5f02\u6b65\u5faa\u73af\u6253\u5370",description:"\u4f7f\u7528promise + async await\u5b9e\u73b0\u5f02\u6b65\u5faa\u73af\u6253\u5370",source:"@site/docs/interview/hands-on-practice/async-print.mdx",sourceDirName:"interview/hands-on-practice",slug:"/interview/hands-on-practice/async-print",permalink:"/blog/docs/interview/hands-on-practice/async-print",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5f02\u6b65\u5faa\u73af\u6253\u5370"},sidebar:"interview",previous:{title:"\u57fa\u4e8e Promise \u7684 Ajax \u5c01\u88c5",permalink:"/blog/docs/interview/hands-on-practice/promise-ajax"},next:{title:"\u6a21\u62df\u5b9e\u73b0 instanceof",permalink:"/blog/docs/interview/hands-on-practice/hands-on-instanceof"}},s={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"promise + async await"),"\u5b9e\u73b0\u5f02\u6b65\u5faa\u73af\u6253\u5370"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var sleep = function (time, i) {\n    return new Promise(function (resolve, reject) {\n        setTimeout(function () {\n            resolve(i);\n        }, time);\n    })\n};\n\n\nvar start = async function () {\n    for (let i = 0; i < 6; i++) {\n        let result = await sleep(1000, i);\n        console.log(result);\n    }\n};\n\nstart();\n")))}u.isMDXComponent=!0}}]);