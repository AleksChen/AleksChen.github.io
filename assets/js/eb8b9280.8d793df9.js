"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[5423],{9785:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={title:"\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u63d2\u5165\u64cd\u4f5c"},u=void 0,l={unversionedId:"algorithm/dataStructure/binary-tree/insert-into-a-binary-search-tree",id:"algorithm/dataStructure/binary-tree/insert-into-a-binary-search-tree",title:"\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u63d2\u5165\u64cd\u4f5c",description:"701. \u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u63d2\u5165\u64cd\u4f5c",source:"@site/docs/algorithm/dataStructure/binary-tree/insert-into-a-binary-search-tree.md",sourceDirName:"algorithm/dataStructure/binary-tree",slug:"/algorithm/dataStructure/binary-tree/insert-into-a-binary-search-tree",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/insert-into-a-binary-search-tree",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u63d2\u5165\u64cd\u4f5c"},sidebar:"algorithm",previous:{title:"\u4e8c\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/binary-tree-postorder-traversal"},next:{title:"\u7b97\u6cd5",permalink:"/blog/docs/algorithm/algorithm/"}},p={},s=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2}],f={toc:s};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/insert-into-a-binary-search-tree/"},"701. \u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u63d2\u5165\u64cd\u4f5c")),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e8c\u53c9\u641c\u7d22\u6811\uff08BST\uff09\u7684\u6839\u8282\u70b9 root \u548c\u8981\u63d2\u5165\u6811\u4e2d\u7684\u503c value \uff0c\u5c06\u503c\u63d2\u5165\u4e8c\u53c9\u641c\u7d22\u6811\u3002 \u8fd4\u56de\u63d2\u5165\u540e\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6839\u8282\u70b9\u3002 \u8f93\u5165\u6570\u636e \u4fdd\u8bc1 \uff0c\u65b0\u503c\u548c\u539f\u59cb\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u4efb\u610f\u8282\u70b9\u503c\u90fd\u4e0d\u540c\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u53ef\u80fd\u5b58\u5728\u591a\u79cd\u6709\u6548\u7684\u63d2\u5165\u65b9\u5f0f\uff0c\u53ea\u8981\u6811\u5728\u63d2\u5165\u540e\u4ecd\u4fdd\u6301\u4e3a\u4e8c\u53c9\u641c\u7d22\u6811\u5373\u53ef\u3002 \u4f60\u53ef\u4ee5\u8fd4\u56de \u4efb\u610f\u6709\u6548\u7684\u7ed3\u679c \u3002"),(0,o.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"))}y.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,m=f["".concat(u,".").concat(y)]||f[y]||s[y]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);