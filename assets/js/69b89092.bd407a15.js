"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[9347],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),f=a,m=h["".concat(s,".").concat(f)]||h[f]||d[f]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3278:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7294);const a="list_rgtH",i="item_i3mt";var l=t(6010),o=t(9960),s=t(941);function c(e){let{data:n=[],wrapperClassName:t,wrapperStyle:c}=e;return r.createElement("div",{style:c,className:(0,l.Z)(a,t)},n.map((e=>r.createElement("div",{key:e.title,className:i},r.createElement(o.Z,{to:e.link},r.createElement(s.Z,{sources:{light:e.src,dark:e.srcDark?e.srcDark:e.src},alt:e.title,loading:"lazy"}),e.title)))))}},3628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));t(3278),t(15);const i={title:"\u6392\u5e8f\u7b97\u6cd5"},l=void 0,o={unversionedId:"algorithm/algorithm/sort/index",id:"algorithm/algorithm/sort/index",title:"\u6392\u5e8f\u7b97\u6cd5",description:"\u6982\u89c8",source:"@site/docs/algorithm/algorithm/sort/index.mdx",sourceDirName:"algorithm/algorithm/sort",slug:"/algorithm/algorithm/sort/",permalink:"/docs/algorithm/algorithm/sort/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6392\u5e8f\u7b97\u6cd5"},sidebar:"algorithm",previous:{title:"\u7b97\u6cd5",permalink:"/docs/algorithm/algorithm/"},next:{title:"\u52a8\u6001\u89c4\u5212",permalink:"/docs/algorithm/algorithm/dp/"}},s={},c=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u5192\u6ce1\u6392\u5e8f",id:"\u5192\u6ce1\u6392\u5e8f",level:2},{value:"\u9009\u62e9\u6392\u5e8f",id:"\u9009\u62e9\u6392\u5e8f",level:2},{value:"\u63d2\u5165\u6392\u5e8f",id:"\u63d2\u5165\u6392\u5e8f",level:2},{value:"\u5f52\u5e76\u6392\u5e8f",id:"\u5f52\u5e76\u6392\u5e8f",level:2},{value:"\u5feb\u901f\u6392\u5e8f",id:"\u5feb\u901f\u6392\u5e8f",level:2},{value:"\u5806\u6392\u5e8f",id:"\u5806\u6392\u5e8f",level:2}],p={toc:c};function d(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(5660).Z,width:"476",height:"201"})),(0,a.kt)("h2",{id:"\u5192\u6ce1\u6392\u5e8f"},"\u5192\u6ce1\u6392\u5e8f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bd4\u8f83\u6240\u6709\u76f8\u90bb\u5143\u7d20,\u5982\u679c\u7b2c\u4e00\u4e2a\u6bd4\u7b2c\u4e8c\u4e2a\u5927\uff0c\u5219\u4ea4\u6362\u5b83\u4eec"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u8f6e\u4e0b\u6765\u4fdd\u8bc1\u53ef\u4ee5\u627e\u5230\u4e00\u4e2a\u6570\u662f\u6700\u5927\u7684"),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884cn-1\u8f6e\uff0c\u5c31\u53ef\u4ee5\u5b8c\u6210\u6392\u5e8f")),(0,a.kt)("p",null,"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u904d\u5386\uff0c\u6709\u5e8f\u533a\u7684\u5143\u7d20\u90fd\u4f1a+1\u3002\u6709\u5e8f\u533a\u7684\u5143\u7d20\u8fbe\u5230 n \u4e2a\u3002\u56e0\u6b64\u590d\u6742\u5ea6\u4e3a\uff1aO(n^2)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:t(9297).Z,width:"2389",height:"1022"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u5b9a\u4e49\u4e00\u4e2a\u539f\u751f\u7684bubbleSort\u65b9\u6cd5\nArray.prototype.bubbleSort = function () {\n    for(let i = 0; i < this.length - 1; i += 1) {\n        // \u901a\u8fc7 this.length \u6b21\u628a\u7b2c\u4e00\u4f4d\u653e\u5230\u6700\u540e,\u5b8c\u6210\u6392\u5e8f\n        // -i\u662f\u56e0\u4e3a\u6700\u540e\u7684\u4f4d\u7f6e\u662f\u4f1a\u52a8\u6001\u6539\u53d8\u7684\uff0c\u5f53\u5b8c\u6210\u4e00\u6b21\u540e,\u6700\u540e\u4e00\u4f4d\u4f1a\u53d8\u6210\u5012\u6570\u7b2c\u4e8c\u4f4d\u3002\n        for(let j = 0; j < this.length - 1 - i; j += 1) { \n            if(this[j] > this[j+1]) { \n                const temp = this[j];\n                this[j] = this[j+1];\n                this[j+1] = temp;\n            }\n        }\n    }\n}\n\nconst arr = [4,8,0,1,43,53,22,11,0];\narr.bubbleSort();\nconsole.log(arr);\n")),(0,a.kt)("h2",{id:"\u9009\u62e9\u6392\u5e8f"},"\u9009\u62e9\u6392\u5e8f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u6570\u7ec4\u4e2d\u7684\u6700\u5c0f\u503c\uff0c\u9009\u4e2d\u5b83\u5e76\u5c06\u5176\u653e\u7f6e\u5728\u7b2c\u4e00\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u7740\u627e\u5230\u7b2c\u4e8c\u4e2a\u6700\u5c0f\u503c\uff0c\u9009\u4e2d\u5b83\u5e76\u5c06\u5176\u653e\u7f6e\u5230\u7b2c\u4e8c\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884cn-1\u8f6e\uff0c\u5c31\u53ef\u4ee5\u5b8c\u6210\u6392\u5e8f")),(0,a.kt)("p",null,"\u590d\u6742\u5ea6\u5206\u6790\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u904d\u5386\uff0c\u6709\u5e8f\u533a\u7684\u5143\u7d20\u90fd\u4f1a+1\u3002\u6709\u5e8f\u533a\u7684\u5143\u7d20\u8fbe\u5230 n \u4e2a\u3002\u56e0\u6b64\u590d\u6742\u5ea6\u4e3a\uff1aO(n^2)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:t(6926).Z,width:"2388",height:"1025"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.selectionSort = function() { \n    for(let i = 0; i < this.length - 1; ++i) { \n        // \u5047\u8bbe\u6700\u5c0f\u7684\u503c\u662f\u5f53\u524d\u7684\u4e0b\u6807\n        let indexMin = i;\n        //\u904d\u5386\u5269\u4f59\u957f\u5ea6\u627e\u5230\u6700\u5c0f\u4e0b\u6807\n        for(let j = i; j < this.length; ++j) { \n            if(this[j] < this[indexMin] ) { \n                indexMin = j;\n            }\n        }\n        if(indexMin !== i) { \n            //\u4ea4\u6362\u5f53\u524d\u4e0b\u6807i\u4e0e\u6700\u5c0f\u4e0b\u6807\u7684\u503c\uff0c\u91cd\u590dthis.length\u6b21\n            const temp = this[i];\n            this[i] = this[indexMin];\n            this[indexMin] = temp;\n        }\n    }\n};\n\n\nconst arr = [5,4,3,2,1];\narr.selectionSort();\nconsole.log(arr);\n")),(0,a.kt)("h2",{id:"\u63d2\u5165\u6392\u5e8f"},"\u63d2\u5165\u6392\u5e8f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece\u7b2c\u4e8c\u4e2a\u6570\u5f00\u59cb\u5f80\u524d\u6bd4"),(0,a.kt)("li",{parentName:"ol"},"\u6bd4\u5b83\u5927\u5c31\u5f80\u540e\u6392"),(0,a.kt)("li",{parentName:"ol"},"\u4ee5\u6b64\u7c7b\u63a8\u8fdb\u884c\u5230\u6700\u540e\u4e00\u4e2a\u6570")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:t(6880).Z,width:"2388",height:"1025"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.insertionSort = function() { \n    //\u4ece\u7b2c\u4e8c\u4e2a\u6570\u5f00\u59cb\u5f80\u524d\u6bd4\n    for(let i = 1; i<this.length; ++i) { \n        //\u5148\u628a\u503c\u4fdd\u5b58\u8d77\u6765\n        const temp = this[i];\n        let j = i;\n        while(j > 0) { \n            if(this[j-1] > temp) { \n                this[j] = this[j-1];\n            } else { \n                //\u56e0\u4e3a\u5df2\u7ecf\u662f\u6392\u5e8f\u8fc7\u7684\u4e86\uff0c\u5982\u679c\u6bd4\u4e0a\u4e00\u4f4d\u5927\uff0c\u90a3\u5c31\u6ca1\u5fc5\u8981\u518d\u8ddf\u4e0a\u4e0a\u4f4d\u6bd4\u8f83\u4e86\n                break;\n            }\n            j -= 1;\n        }\n        //\u8fd9\u91cc\u7684j\u6709\u53ef\u80fd\u662f\u7b2c0\u4f4d\uff0c\u4e5f\u6709\u53ef\u80fd\u662f\u5230\u4e86\u4e00\u534a\u505c\u6b62\u4e86\n        this[j] = temp;\n    }\n};\n\nconst arr = [5,4,3,2,1];\narr.insertionSort();\n")),(0,a.kt)("h2",{id:"\u5f52\u5e76\u6392\u5e8f"},"\u5f52\u5e76\u6392\u5e8f"),(0,a.kt)("p",null,"\u5206: \u628a\u6570\u7ec4\u5288\u6210\u4e24\u534a\uff0c\u518d\u9012\u5f52\u5730\u5bf9\u6570\u7ec4\u8fdb\u884c\u201c\u5206\u201d\u64cd\u4f5c\uff0c\u76f4\u5230\u5206\u6210\u4e00\u4e2a\u4e2a\u5355\u72ec\u7684\u6570\n\u5408\uff1a\u628a\u4e24\u4e2a\u6570\u5408\u5e76\u4e3a\u6709\u5e8f\u6570\u7ec4\uff0c\u518d\u5bf9\u6709\u5e8f\u6570\u7ec4\u8fdb\u884c\u5408\u5e76\uff0c\u76f4\u5230\u5168\u90e8\u5b50\u6570\u7ec4\u5408\u5e76\u4e3a\u4e00\u4e2a\u5b8c\u6574\u6570\u7ec4"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:t(3969).Z,width:"2388",height:"1025"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.mergeSort = function () { \n    const rec = (arr) => {\n        //\u5982\u679c\u6570\u7ec4\u957f\u5ea6\u4e3a1\uff0c\u8bf4\u660e\u5207\u5b8c\u4e86\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fd4\u56de\n        if (arr.length === 1) { return arr; }\n        //\u5207\u5206\u6570\u7ec4\uff0c\u628a\u6bcf\u4e00\u9879\u90fd\u5355\u72ec\u5207\u51fa\u6765\n        const mid = Math.floor(arr.length / 2);\n        const left = arr.slice(0,mid);\n        const right = arr.slice(mid,arr.length);\n        //\u6709\u5e8f\u7684\u5de6\u8fb9\u6570\u7ec4\n        const orderLeft = rec(left);\n        //\u6709\u5e8f\u7684\u53f3\u8fb9\u6570\u7ec4\n        const orderRight = rec(right);\n        //\u5b9a\u4e49\u4e00\u4e2a\u6570\u7ec4\u6765\u5b58\u653e\u987a\u5e8f\u6570\u7ec4\n        const res = [];\n        // \u628a\u5de6\u53f3\u4e24\u4e2a\u6709\u5e8f\u7684\u5408\u5e76\u4e3a\u4e00\u4e2a\u6709\u5e8f\u7684\u8fd4\u56de\n        while(orderLeft.length || orderRight.length) { \n            if(orderLeft.length && orderRight.length) { \n                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())\n            } else if (orderLeft.length) { \n                res.push(orderLeft.shift());\n            } else if (orderRight.length) { \n                res.push(orderRight.shift());\n            }\n        }\n        return res;\n    };\n    const res = rec(this);\n    //\u62f7\u8d1d\u5230\u6570\u7ec4\u672c\u8eab\n    res.forEach((n,i) => { this[i] = n; });\n}\n\n\nconst arr = [5,4,3,2,1];\narr.mergeSort();\nconsole.log(arr);\n")),(0,a.kt)("h2",{id:"\u5feb\u901f\u6392\u5e8f"},"\u5feb\u901f\u6392\u5e8f"),(0,a.kt)("p",null,"\u5206\u533a: \u4ece\u6570\u7ec4\u4e2d\u4efb\u610f\u9009\u62e9\u4e00\u4e2a\u57fa\u51c6\uff0c\u6240\u6709\u6bd4\u57fa\u51c6\u5c0f\u7684\u5143\u7d20\u653e\u5230\u57fa\u51c6\u524d\u9762\uff0c\u6bd4\u57fa\u51c6\u5927\u7684\u5143\u7d20\u653e\u5230\u57fa\u51c6\u7684\u540e\u9762\n\u9012\u5f52\uff1a\u9012\u5f52\u5730\u5bf9\u57fa\u51c6\u524d\u540e\u7684\u5b50\u6570\u7ec4\u8fdb\u884c\u5206\u533a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0",src:t(7654).Z,width:"2388",height:"1025"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Array.prototype.quickSort = function () { \n    const rec = (arr) => { \n       // \u9884\u9632\u6570\u7ec4\u662f\u7a7a\u7684\u6216\u8005\u53ea\u6709\u4e00\u4e2a\u5143\u7d20, \u5f53\u6240\u6709\u5143\u7d20\u90fd\u5927\u4e8e\u7b49\u4e8e\u57fa\u51c6\u503c\u5c31\u4f1a\u4ea7\u751f\u7a7a\u7684\u6570\u7ec4\n       if(arr.length === 1 || arr.length === 0) { return arr; }\n       const left = [];\n       const right = [];\n       //\u4ee5\u7b2c\u4e00\u4e2a\u5143\u7d20\u4f5c\u4e3a\u57fa\u51c6\u503c   \n       const mid = arr[0];\n       //\u5c0f\u4e8e\u57fa\u51c6\u503c\u7684\u653e\u5de6\u8fb9\uff0c\u5927\u4e8e\u57fa\u51c6\u503c\u7684\u653e\u53f3\u8fb9\n       for(let i = 1; i < arr.length; ++i) { \n           if(arr[i] < mid) { \n               left.push(arr[i]);\n           } else { \n               right.push(arr[i]);\n           }\n       }\n        //\u9012\u5f52\u8c03\u7528\uff0c\u6700\u540e\u653e\u56de\u6570\u7ec4    \n       return [...rec(left),mid,...rec(right)];\n    };\n    const res = rec(this);\n    res.forEach((n,i) => { this[i] = n; })\n}\n\n\nconst arr = [2,3,4,5,3,1];\narr.quickSort();\nconsole.log(arr);\n")),(0,a.kt)("h2",{id:"\u5806\u6392\u5e8f"},"\u5806\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];\n \nfunction heap_sort(arr) {\n  var len = arr.length\n  var k = 0\n  function swap(i, j) {\n    var temp = arr[i]\n    arr[i] = arr[j]\n    arr[j] = temp\n  }\n \n  function max_heapify(start, end) {\n    var dad = start\n    var son = dad * 2 + 1\n    if (son >= end) return\n    if (son + 1 < end && arr[son] < arr[son + 1]) {\n      son++\n    }\n \n    if (arr[dad] <= arr[son]) {\n      swap(dad, son)\n      max_heapify(son, end)\n    }\n  }\n \n  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {\n    max_heapify(i, len)\n  }\n \n \n \n  for (var j = len - 1; j > k; j--) {\n    swap(0, j)\n    max_heapify(0, j)\n  }\n  return arr\n \n}\n \nheap_sort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]\n")))}d.isMDXComponent=!0},15:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/algorithm-6611aee5c6d989d2dc91b89f6c87d04b.png"},6926:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/0768fddbe21c4e96930181050f203963-b56fa73a2bff25a948e481e07401e9de.gif"},7654:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1422bc9767454b08b6225dac636ab33a-0a2e45f090e19e898a9f65331703b95c.gif"},9297:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/465e6006be434ad890efeab48d153ce1-d3407928fd8197385012dd7dbce4179a.gif"},5660:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/99ebb3c24afb4a7a8e9dd327642d4ab9-0f26dbd2fe4be9ceab533c67f99f2924.png"},3969:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/be3ea526b9504d6eba2b036a91430e9a-50fe809b8dc9395813d786a3314d33af.gif"},6880:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/eff8219ab2ee4f30a093bca9b68633d3-f2e5d4224d912e069d63304f5e8e6821.gif"}}]);