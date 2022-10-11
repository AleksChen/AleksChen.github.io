"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[2883],{9923:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),a="featureIconArea_kxlx",o="title_Utvl",i=r(6010),s=r(7002);function c(e){var t=e.onClick,r=e.src,c=e.srcDark,l=e.title,p=e.wrapperClassName,u=e.wrapperStyle;return n.createElement("div",{className:(0,i.Z)(a,p),style:u},n.createElement(s.Z,{sources:{light:r,dark:c||r},alt:l,loading:"lazy",onClick:t}),n.createElement("div",{className:o},l))}},2771:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a="list_rgtH",o="item_i3mt",i=r(6010),s=r(8746),c=r(7002);function l(e){var t=e.data,r=void 0===t?[]:t,l=e.wrapperClassName,p=e.wrapperStyle;return n.createElement("div",{style:p,className:(0,i.Z)(a,l)},r.map((function(e){return n.createElement("div",{key:e.title,className:o},n.createElement(s.Z,{to:e.link},n.createElement(c.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title))})))}},9591:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=r(9923),s=r(2771),c=r(9351),l=["components"],p={title:"\u8fd0\u7b97\u7b26\u548c\u8868\u8fbe\u5f0f",hide_title:!0},u=void 0,d={unversionedId:"javascript/operators-and-expressions/index",id:"javascript/operators-and-expressions/index",title:"\u8fd0\u7b97\u7b26\u548c\u8868\u8fbe\u5f0f",description:"<LinkList",source:"@site/docs/javascript/operators-and-expressions/index.mdx",sourceDirName:"javascript/operators-and-expressions",slug:"/javascript/operators-and-expressions/",permalink:"/blog/docs/javascript/operators-and-expressions/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8fd0\u7b97\u7b26\u548c\u8868\u8fbe\u5f0f",hide_title:!0},sidebar:"javascript",previous:{title:"\u7c7b\u578b\u8f6c\u6362",permalink:"/blog/docs/javascript/data-type/type-conversion"},next:{title:"\u6309\u4f4d\u975e ~",permalink:"/blog/docs/javascript/operators-and-expressions/bitwise-not"}},f={},m=[],v={toc:m};function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{src:c.Z,title:"\u8fd0\u7b97\u7b26\u548c\u8868\u8fbe\u5f0f",mdxType:"FeatureIcon"}),(0,o.kt)(s.Z,{data:[{title:"\u6309\u4f4d\u975e ~",link:"/docs/javascript/operators-and-expressions/bitwise-not",src:c.Z},{title:"\u903b\u8f91\u6216 ||",link:"/docs/javascript/operators-and-expressions/logic-or",src:c.Z},{title:"\u7a7a\u503c\u5408\u5e76 ??",link:"/docs/javascript/operators-and-expressions/nullish-coalescing",src:c.Z},{title:"\u903b\u8f91\u7a7a\u8d4b\u503c ??=",link:"/docs/javascript/operators-and-expressions/logical-nullish-assignment",src:c.Z},{title:"\u53ef\u9009\u94fe ?.",link:"/docs/javascript/operators-and-expressions/option-chaining",src:c.Z},{title:"\u89e3\u6784\u8d4b\u503c",link:"/docs/javascript/operators-and-expressions/destructuring-assignment",src:c.Z}],mdxType:"LinkList"}))}y.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9351:function(e,t,r){t.Z=r.p+"assets/images/javascript-a10d37851dff846a8a9e32cd99965a46.png"}}]);