"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[5443],{8447:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],c={title:"\u56fe\u7247\u5bfc\u5165",description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Cww"}},l=void 0,u={unversionedId:"react/solutions/import-image",id:"react/solutions/import-image",title:"\u56fe\u7247\u5bfc\u5165",description:"",source:"@site/docs/react/solutions/import-image.mdx",sourceDirName:"react/solutions",slug:"/react/solutions/import-image",permalink:"/blog/docs/react/solutions/import-image",draft:!1,tags:[{label:"React",permalink:"/blog/docs/tags/react"}],version:"current",frontMatter:{title:"\u56fe\u7247\u5bfc\u5165",description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Cww"}},sidebar:"react",previous:{title:"\u6587\u4ef6\u4e0b\u8f7d",permalink:"/blog/docs/react/solutions/download-file"},next:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/blog/docs/react/best-practice/"}},s={},p=[{value:"import \u65b9\u6cd5",id:"import-\u65b9\u6cd5",level:2},{value:"require \u65b9\u6cd5",id:"require-\u65b9\u6cd5",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"import-\u65b9\u6cd5"},"import \u65b9\u6cd5"),(0,a.kt)("p",null,"ES6 \u4e0d\u652f\u6301\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<img />")," \u6807\u7b7e\u91cc\u76f4\u63a5\u5199\u56fe\u7247\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1} showLineNumbers","{1}":!0,showLineNumbers:!0},'import src from "@asset/images/icon.png";\n\nrender(){\n    return <img src={src} />\n}\n')),(0,a.kt)("h2",{id:"require-\u65b9\u6cd5"},"require \u65b9\u6cd5"),(0,a.kt)("p",null,"require \u65b9\u6cd5\u91cc\u53ea\u80fd\u5199\u5b57\u7b26\u4e32\uff0c\u4e0d\u53ef\u4ee5\u5199\u53d8\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2} showLineNumbers","{2}":!0,showLineNumbers:!0},'render(){\n    <img src={require("@asset/images/icon.png")} />\n}\n')))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);