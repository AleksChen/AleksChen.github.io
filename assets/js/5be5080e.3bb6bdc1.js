"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[9424],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c"},l=void 0,i={unversionedId:"algorithm/leetcode/record/53maximum-subarray",id:"algorithm/leetcode/record/53maximum-subarray",title:"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c",description:"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c",source:"@site/docs/algorithm/leetcode/record/53maximum-subarray.mdx",sourceDirName:"algorithm/leetcode/record",slug:"/algorithm/leetcode/record/53maximum-subarray",permalink:"/docs/algorithm/leetcode/record/53maximum-subarray",draft:!1,tags:[],version:"current",frontMatter:{title:"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c"},sidebar:"algorithm",previous:{title:"\u52a8\u6001\u89c4\u5212",permalink:"/docs/algorithm/algorithm/dp/"},next:{title:"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217",permalink:"/docs/algorithm/leetcode/record/300longest-increasing-subsequence"}},p={},u=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u590d\u6742\u5ea6",id:"\u590d\u6742\u5ea6",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/maximum-subarray/"},"53. \u6700\u5927\u5b50\u6570\u7ec4\u548c")),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u8bf7\u4f60\u627e\u51fa\u4e00\u4e2a\u5177\u6709\u6700\u5927\u548c\u7684\u8fde\u7eed\u5b50\u6570\u7ec4\uff08\u5b50\u6570\u7ec4\u6700\u5c11\u5305\u542b\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u8fd4\u56de\u5176\u6700\u5927\u548c\u3002"),(0,a.kt)("p",null,"\u5b50\u6570\u7ec4 \u662f\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u8fde\u7eed\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1anums = [-2,1,-3,4,-1,2,1,-5,4]\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a\u8fde\u7eed\u5b50\u6570\u7ec4\xa0[4,-1,2,1] \u7684\u548c\u6700\u5927\uff0c\u4e3a\xa06 \u3002\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1anums = [1]\n\u8f93\u51fa\uff1a1\n")),(0,a.kt)("p",null,"\u793a\u4f8b 3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1anums = [5,4,-1,7,8]\n\u8f93\u51fa\uff1a23\n")),(0,a.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"strong"},"nums[i]")," \u4e3a\u7ed3\u5c3e\u7684\u300c\u6700\u5927\u5b50\u6570\u7ec4\u548c\u300d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"strong"},"dp[i]"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dp[i]")," \u6709\u4e24\u79cd\u300c\u9009\u62e9\u300d\uff0c\u8981\u4e48\u4e0e\u524d\u9762\u7684\u76f8\u90bb\u5b50\u6570\u7ec4\u8fde\u63a5\uff0c\u5f62\u6210\u4e00\u4e2a\u548c\u66f4\u5927\u7684\u5b50\u6570\u7ec4\uff1b\u8981\u4e48\u4e0d\u4e0e\u524d\u9762\u7684\u5b50\u6570\u7ec4\u8fde\u63a5\uff0c\u81ea\u6210\u4e00\u6d3e\uff0c\u81ea\u5df1\u4f5c\u4e3a\u4e00\u4e2a\u5b50\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u52a8\u6001\u89c4\u5212\u8f6c\u79fb\u65b9\u7a0b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i] = max{dp[i-1] + nums[i], nums[i]}")),(0,a.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var maxSubArray = function(nums) {\n    let pre = 0, maxAns = nums[0];\n    nums.forEach((x) => {\n        pre = Math.max(pre + x, x);\n        maxAns = Math.max(maxAns, pre);\n    });\n    return maxAns;\n};\n")),(0,a.kt)("h2",{id:"\u590d\u6742\u5ea6"},"\u590d\u6742\u5ea6"),(0,a.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u5176\u4e2d n \u4e3a nums \u6570\u7ec4\u7684\u957f\u5ea6\u3002\u6211\u4eec\u53ea\u9700\u8981\u904d\u5386\u4e00\u904d\u6570\u7ec4\u5373\u53ef\u6c42\u5f97\u7b54\u6848\u3002\n\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"O(1)"),"\u3002\u6211\u4eec\u53ea\u9700\u8981\u5e38\u6570\u7a7a\u95f4\u5b58\u653e\u82e5\u5e72\u53d8\u91cf\u3002"))}m.isMDXComponent=!0}}]);