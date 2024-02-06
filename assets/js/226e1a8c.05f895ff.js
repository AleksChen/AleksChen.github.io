"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[5656],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7462),l=(t(7294),t(3905));const a={title:"\u9632\u6296\u8282\u6d41"},i=void 0,o={unversionedId:"interview/hands-on-practice/throttle-debounce",id:"interview/hands-on-practice/throttle-debounce",title:"\u9632\u6296\u8282\u6d41",description:"foo",source:"@site/docs/interview/hands-on-practice/throttle-debounce.mdx",sourceDirName:"interview/hands-on-practice",slug:"/interview/hands-on-practice/throttle-debounce",permalink:"/docs/interview/hands-on-practice/throttle-debounce",draft:!1,tags:[],version:"current",frontMatter:{title:"\u9632\u6296\u8282\u6d41"},sidebar:"interview",previous:{title:"\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",permalink:"/docs/interview/hands-on-practice/deep-copy"},next:{title:"\u5b9e\u73b0 call\u3001apply\u3001bind",permalink:"/docs/interview/hands-on-practice/call-apply-bind"}},p={},c=[{value:"\u9632\u6296 Debounce",id:"\u9632\u6296-debounce",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"\u8282\u6d41 Throttle",id:"\u8282\u6d41-throttle",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0-1",level:3},{value:"\u65f6\u95f4\u6233\u5b9e\u73b0",id:"\u65f6\u95f4\u6233\u5b9e\u73b0",level:4},{value:"\u5b9a\u65f6\u5668\u5b9e\u73b0",id:"\u5b9a\u65f6\u5668\u5b9e\u73b0",level:4},{value:"\u7ed3\u5408\u7248",id:"\u7ed3\u5408\u7248",level:4}],u={toc:c};function s(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"foo",src:t(8626).Z,width:"1069",height:"600"})),(0,l.kt)("h2",{id:"\u9632\u6296-debounce"},"\u9632\u6296 Debounce"),(0,l.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"\u9632\u6296\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"debounce"),"\uff09\uff1a\u4e0d\u7ba1\u4e8b\u4ef6\u89e6\u53d1\u9891\u7387\u591a\u9ad8\uff0c\u4e00\u5b9a\u5728\u4e8b\u4ef6\u89e6\u53d1",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u79d2\u540e\u624d\u6267\u884c\u3002\u5982\u679c\u4f60\u5728\u4e00\u4e2a\u4e8b\u4ef6\u89e6\u53d1\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u79d2\u5185\u53c8\u89e6\u53d1\u4e86\u8fd9\u4e2a\u4e8b\u4ef6\uff0c\u5c31\u4ee5\u65b0\u7684\u4e8b\u4ef6\u7684\u65f6\u95f4\u4e3a\u51c6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u79d2\u540e\u624d\u6267\u884c\u3002\u603b\u4e4b\uff0c\u89e6\u53d1\u5b8c\u4e8b\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u79d2\u5185\u4e0d\u518d\u89e6\u53d1\u4e8b\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u79d2\u540e\u518d\u6267\u884c\u3002"),(0,l.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7a97\u53e3\u5927\u5c0f\u53d8\u5316\uff0c\u8c03\u6574\u6837\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('resize', debounce(handleResize, 200));\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7d22\u6846\uff0c\u8f93\u5165\u540e1000\u6beb\u79d2\u641c\u7d22")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"debounce(fetchSelectData, 300);\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u8868\u5355\u9a8c\u8bc1\uff0c\u8f93\u51651000\u6beb\u79d2\u540e\u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"debounce(validator, 1000);\n")),(0,l.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,l.kt)("p",null,"\u6ce8\u610f\u8003\u8651\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"debounce"),"\u51fd\u6570\u4e2d\u8fd4\u56de\u4e00\u4e2a\u95ed\u5305\uff0c\u8fd9\u91cc\u7528\u7684\u666e\u901a",(0,l.kt)("inlineCode",{parentName:"li"},"function"),"\uff0c\u91cc\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\u5219\u7528\u7684\u7bad\u5934\u51fd\u6570\uff0c\u8fd9\u6837\u505a\u7684\u610f\u4e49\u662f\u8ba9",(0,l.kt)("inlineCode",{parentName:"li"},"this"),"\u7684\u6307\u5411\u51c6\u786e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"this"),"\u7684\u771f\u5b9e\u6307\u5411\u5e76\u975e",(0,l.kt)("inlineCode",{parentName:"li"},"debounce"),"\u7684\u8c03\u7528\u8005\uff0c\u800c\u662f\u8fd4\u56de\u95ed\u5305\u7684\u8c03\u7528\u8005\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4f20\u5165\u95ed\u5305\u7684\u53c2\u6570\u8fdb\u884c\u900f\u4f20\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function debounce(fn, delay) {\n    let timer = null;\n    return function (...args) {\n        clearTimeout(timer);\n        timer = setTimeout(() => {\n            fn.apply(this, args);\n        }, delay);\n    };\n}\n")),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u8ba9\u51fd\u6570\u7acb\u5373\u6267\u884c\u4e00\u6b21\uff0c\u518d\u7b49\u540e\u9762\u4e8b\u4ef6\u89e6\u53d1\u540e\u7b49\u5f85",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u79d2\u6267\u884c\uff0c\u6211\u4eec\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"debounce"),"\u51fd\u6570\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"isImmediate"),"\u7528\u4e8e\u6807\u793a\u662f\u5426\u7acb\u5373\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5f53\u5b9a\u65f6\u5668\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"timer"),"\u4e3a\u7a7a\u65f6\uff0c\u8bf4\u660e\u662f\u7b2c\u4e00\u6b21\u6267\u884c\uff0c\u6211\u4eec\u7acb\u5373\u6267\u884c\u5b83\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function debounce(fn, delay, isImmediate) {\n    let timer = null;\n    return function (...args) {\n        clearTimeout(timer);\n        if (isImmediate && !timer) {\n            // \u521d\u6b21\u6267\u884c\u7684\u65f6\u673a\n            fn.apply(this, args);\n        }\n        timer = setTimeout(() => {\n            fn.apply(this, args);\n        }, delay);\n    };\n}\n")),(0,l.kt)("h2",{id:"\u8282\u6d41-throttle"},"\u8282\u6d41 Throttle"),(0,l.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,"\u8282\u6d41\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"throttle"),"\uff09\uff1a\u4e0d\u7ba1\u4e8b\u4ef6\u89e6\u53d1\u9891\u7387\u591a\u9ad8\uff0c\u53ea\u5728\u5355\u4f4d\u65f6\u95f4\u5185\u6267\u884c\u4e00\u6b21\u3002\u591a\u7528\u4e8e\u63a7\u5236\u4e8b\u4ef6\u89e6\u53d1\u7684\u9891\u7387\u3002"),(0,l.kt)("h3",{id:"\u5b9e\u73b0-1"},"\u5b9e\u73b0"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u8282\u6d41\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u65f6\u95f4\u6233"),(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u65f6\u5668")),(0,l.kt)("h4",{id:"\u65f6\u95f4\u6233\u5b9e\u73b0"},"\u65f6\u95f4\u6233\u5b9e\u73b0"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u4e8b\u4ef6\u80af\u5b9a\u89e6\u53d1\uff0c\u6700\u540e\u4e00\u6b21\u4e0d\u4f1a\u89e6\u53d1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function throttle(fn, interval) {\n    let pre = 0;\n    return function (...args) {\n        if (Date.now() - pre > interval) {\n            pre = Date.now();\n            fn.apply(this, args);\n        }\n    }\n")),(0,l.kt)("h4",{id:"\u5b9a\u65f6\u5668\u5b9e\u73b0"},"\u5b9a\u65f6\u5668\u5b9e\u73b0"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u4e8b\u4ef6\u4e0d\u4f1a\u89e6\u53d1\uff0c\u6700\u540e\u4e00\u6b21\u4e00\u5b9a\u89e6\u53d1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function throttle(fn, interval) {\n    let timer = null;\n    return function (...args) {\n        if (!timer) {\n            timer = setTimeout(() => {\n                timer = null;\n                fn.apply(this, args);\n            }, interval);\n        }\n    }\n}\n")),(0,l.kt)("h4",{id:"\u7ed3\u5408\u7248"},"\u7ed3\u5408\u7248"),(0,l.kt)("p",null,"\u5b9a\u65f6\u5668\u548c\u65f6\u95f4\u6233\u7684\u7ed3\u5408\u7248\uff0c\u4e5f\u76f8\u5f53\u4e8e\u8282\u6d41\u548c\u9632\u6296\u7684\u7ed3\u5408\u7248\uff0c\u7b2c\u4e00\u6b21\u548c\u6700\u540e\u4e00\u6b21\u90fd\u4f1a\u89e6\u53d1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function throttle(fn, interval) {\n    let pre = 0;\n    let timer = null;\n    return function (...args) {\n        if (Date.now() - pre > interval) {\n            clearTimeout(timer);\n            timer = null;\n            pre = Date.now();\n            fn.apply(this, args);\n        } else if (!timer) {\n            timer = setTimeout(() => {\n                fn.apply(this, args);\n            }, interval);\n        }\n    }\n}\n")))}s.isMDXComponent=!0},8626:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/\u8282\u6d41\u9632\u6296-cd54c28317b797ef0d39095936f5fd39.gif"}}]);