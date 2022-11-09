"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[1554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),k=a,d=m["".concat(s,".").concat(k)]||m[k]||p[k]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={title:"Promise \u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u6570\u91cf"},i=void 0,o={unversionedId:"interview/hands-on-practice/concurrent-requests",id:"interview/hands-on-practice/concurrent-requests",title:"Promise \u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u6570\u91cf",description:"\u6240\u8c13\u5e76\u53d1\u8bf7\u6c42\uff0c\u5c31\u662f\u6307\u5728\u4e00\u4e2a\u65f6\u95f4\u70b9\u591a\u4e2a\u8bf7\u6c42\u540c\u65f6\u6267\u884c\u3002\u5f53\u5e76\u53d1\u7684\u8bf7\u6c42\u8d85\u8fc7\u4e00\u5b9a\u6570\u91cf\u65f6\uff0c\u4f1a\u9020\u6210\u7f51\u7edc\u5835\u585e\uff0c\u670d\u52a1\u5668\u538b\u529b\u5927\u5d29\u6e83\u6216\u8005\u5176\u4ed6\u9ad8\u5e76\u53d1\u95ee\u9898\uff0c\u6b64\u65f6\u9700\u8981\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u7684\u6570\u91cf\u3002",source:"@site/docs/interview/hands-on-practice/concurrent-requests.mdx",sourceDirName:"interview/hands-on-practice",slug:"/interview/hands-on-practice/concurrent-requests",permalink:"/blog/docs/interview/hands-on-practice/concurrent-requests",draft:!1,tags:[],version:"current",frontMatter:{title:"Promise \u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u6570\u91cf"},sidebar:"interview",previous:{title:"\u9762\u8bd5 - \u624b\u5199\u5b9e\u73b0",permalink:"/blog/docs/interview/hands-on-practice/"},next:{title:"\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",permalink:"/blog/docs/interview/hands-on-practice/deep-copy"}},s={},u=[{value:"Promise \u7248\u672c",id:"promise-\u7248\u672c",level:2},{value:"Async+Promise.race",id:"asyncpromiserace",level:2},{value:"asyncPool",id:"asyncpool",level:2}],c={toc:u};function p(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6240\u8c13\u5e76\u53d1\u8bf7\u6c42\uff0c\u5c31\u662f\u6307\u5728\u4e00\u4e2a\u65f6\u95f4\u70b9\u591a\u4e2a\u8bf7\u6c42\u540c\u65f6\u6267\u884c\u3002\u5f53\u5e76\u53d1\u7684\u8bf7\u6c42\u8d85\u8fc7\u4e00\u5b9a\u6570\u91cf\u65f6\uff0c\u4f1a\u9020\u6210\u7f51\u7edc\u5835\u585e\uff0c\u670d\u52a1\u5668\u538b\u529b\u5927\u5d29\u6e83\u6216\u8005\u5176\u4ed6\u9ad8\u5e76\u53d1\u95ee\u9898\uff0c\u6b64\u65f6\u9700\u8981\u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u7684\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u5f02\u6b65\u5e76\u53d1\u6570\u9650\u5236\u95ee\u9898\u8fd8\u662f\u6bd4\u8f83\u5bb9\u6613\u7406\u89e3\uff0c\u5047\u8bbe\u6211\u4eec\u67d0\u4e2a\u9875\u9762\u6709 10 \u4e2a\u63a5\u53e3\u6570\u636e\u9700\u8981\u8bf7\u6c42\uff0c\u73b0\u5728\u8003\u8651\u5230\u7f51\u7edc\u5e76\u53d1\u901a\u9053\u963b\u585e\u95ee\u9898\uff0c\u73b0\u5728\u9700\u8981\u9650\u5236\u8fd9 10 \u4e2a\u63a5\u53e3\u8bf7\u6c42\u65f6\u6700\u591a\u4e00\u6b21\u6027 3 \u4e2a\u5728\u5904\u7406\uff0c\u5f53\u6700\u5927\u8bf7\u6c42\u6b21\u6570\u8d85\u8fc7 3 \u4e2a\u65f6\uff0c\u672a\u5904\u7406\u7684\u63a5\u53e3\u53ea\u80fd\u7b49\u5f85\u3002\u5f53\u6709\u63a5\u53e3\u6570\u636e\u8bf7\u6c42\u5b8c\u6210\u540e\uff0c\u7acb\u5373\u5c06\u8bf7\u6c42\u8d44\u6e90\u7ed9\u5176\u4f59\u63a5\u53e3\u4f7f\u7528\u3002\u8fd9\u4e2a\u5904\u7406\u662f\u4e0d\u662f\u5f88\u50cf\u64cd\u4f5c\u7cfb\u7edf\u7684\u7ebf\u7a0b\u4efb\u52a1\u961f\u5217\u3002"),(0,a.kt)("p",null,"\u573a\u666f\uff1a \u73b0\u5728\u63d0\u4f9b 10 \u4e2a id \u548c\u8bf7\u6c42\u51fd\u6570\uff08\u8bf7\u6c42\u8fd4\u56de promise \u5bf9\u8c61\uff09\uff0c\u73b0\u5728\u8981\u6c42\u4f60\u8bbe\u7f6e\u4e00\u4e2a\u5e76\u53d1\u6570\uff08\u5047\u8bbe\u4e3a 3\uff09\uff0c\u8fbe\u5230\u5e76\u53d1\u8bbe\u7f6e\u6548\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let request = (delay, id) => {\n    return new Promise((resolve) => {\n        setTimeout(resolve, delay, id)\n    })\n}\nlet test_requests = [\n    request(6000, 1),\n    request(3000, 2),\n    request(4000, 3),\n    request(6000, 4),\n    request(1000, 5),\n    request(2000, 6),\n]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u610f\u601d\u5c31\u662f\u5148\u53d1\u5e76\u53d1\u6570\u7684\u8bf7\u6c42\uff0c\u7136\u540e\u6bcf\u6709\u4e00\u4e2a\u8bf7\u6c42\u56de\u8c03\u7ed3\u675f\u63a5\u7740\u53d1\u5457\uff0c\u4fdd\u8bc1\u540c\u4e00\u65f6\u523b\u6700\u591a\u4e09\u4e2a\u8bf7\u6c42\u5728\u5904\u7406\u8fc7\u7a0b\u4e2d\u3002")),(0,a.kt)("h2",{id:"promise-\u7248\u672c"},"Promise \u7248\u672c"),(0,a.kt)("p",null,"\u601d\u8def\uff1a "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u5c42\u9012\u5f52\u90fd\u5f80 run \u91cc\u52a0\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ol"},"\u9012\u5f52\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c run \u8fbe\u5230\u4e34\u754c\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.race"),"\u6765\u89e6\u53d1\u9012\u5f52\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u7684\u56de\u8c03\u4e3a\u4ece run \u4e2d\u5220\u9664 \u81ea\u8eab"),(0,a.kt)("li",{parentName:"ol"},"\u9012\u5f52\u7ec8\u70b9\u662f\u6240\u6709\u7684 request \u90fd\u5df2\u7ecf\u52a0\u5b8c\uff0c\u8fd4\u56de resolve\u3002\u6b64\u65f6\uff0c\u5c31\u50cf\u76d7\u68a6\u7a7a\u95f4\u4e00\u6837\uff0c\u8fd9\u4e2aresolve\u4f1a\u4e0d\u65ad\u7684\u88ab\u8fd4\u56de\u3002\uff08\u6b64\u523b\uff0c\u8bf7\u6c42\u5e76\u6ca1\u6709\u7ed3\u675f\uff09\u3002\u6700\u5916\u5c42\u4f1a\u63a5\u53d7\u8fd9\u4e2a resolve\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.all"),"\u7b49\u5f85\u6240\u6709\u8bf7\u6c42\u7ed3\u675f\uff0c\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function requestWithLimit(requesets = [], max = 1, callback = () => {}) {\n    let run = []\n    let next = 0\n    let executor = () => {\n        if (next === requesets.length) {  // \u9012\u5f52\u7ec8\u6b62\u6761\u4ef6 \n            return Promise.resolve()\n        }\n        let currentRequest = requesets[next++]  // \u83b7\u53d6\u8bf7\u6c42 \n        run.push(\n            currentRequest.then(requestRes => { // \u8bf7\u6c42\u63a8\u5165\u5230run\u6570\u7ec4\u4e2d\n                console.log(requestRes) \n                run.splice(run.indexOf(currentRequest), 1) // \u5220\u6389\u81ea\u5df1\n            })\n        )\n\n        let res = null\n        if (run.length === max) {\n            res = Promise.race(run) // \u9700\u8981\u7b49\u5f85\u4e00\u4e2a\u8bf7\u6c42\u5230\u8fbe\n        } else {\n            res = Promise.resolve() // \u4e0d\u9700\u8981\u7b49\u5f85\n        }\n        return res.then(()= > executor()) // \u5411\u4e0b\u9012\u5f52\n    }\n    \n    executor().then(() => { \n        // \u6b64\u65f6 run \u91cc\u7684\u8bf7\u6c42\u8fd8\u6ca1\u7ed3\u675f \n        Promise.all(run).then(() => callback())\n    })\n}\nrequestWithLimit(test_requests, 3, () => console.log("requeset end"))\n')),(0,a.kt)("h2",{id:"asyncpromiserace"},"Async+Promise.race"),(0,a.kt)("p",null,"\u601d\u8def\uff1a\u9012\u5f52\u7b97\u6cd5\u90fd\u6709\u8fed\u4ee3\u5199\u6cd5\u3002\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u9898\u76ee\uff0c\u4f7f\u7528\u8fed\u4ee3\u66f4\u597d\u7406\u89e3\u3002 \u8fd9\u91cc\u4f7f\u7528await\u8bed\u6cd5\u6765\u5b9e\u73b0 run \u6ee1\u7684\u7b49\u5f85\u3002 await promise \u4f1a\u6682\u505c\u51fd\u6570\u6267\u884c\uff0c\u76f4\u5230 promise \u6210\u529f\u3002 \u8fd9\u91cc\u7684\u903b\u8f91\u975e\u5e38\u7b80\u5355\uff0c\u5c31\u662f\u904d\u5386\u8bf7\u6c42\u6570\u7ec4\uff0c\u628a\u5b83\u4eec\u52a0\u5230run \u4e2d\u3002\u4f46\u662f\uff0c\u7531\u4e8emax\u7684\u5b58\u5728\uff0c\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"run.length === max")," \u65f6\uff0c\u4f7f\u7528await\u7b49\u5f85\uff0crace\u5230\u8fbe\u3002\u540c\u6837\uff0c\u6dfb\u52a0\u5b8c\u540e\uff0c\u9700\u8981\u7b49\u5f85 run \u91cc\u6240\u6709\u8bf7\u6c42\u7ed3\u675f\uff0c\u7136\u540e\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function requestWithLimit(requesets = [], max = 1, callback = () => { }) {\n    let run = [], i = 0;\n    for (const request of requesets) { // \u6570\u7ec4\u904d\u5386\n        run.push(request.then((requesetRes) => { // \u4f9d\u6b21 \u63a8\u5165\u5230 run\n            console.log(requesetRes)\n            run.splice(run.indexOf(request), 1)\n        }))\n        if (run.length === max) { \n            console.log('wait')\n            await Promise.race(run) // \u7b49\u5f85 race \u5230\u8fbe\u3002\n        }\n    }\n    Promise.all(run).then(() => callback())\n}\nrequestWithLimit(test_requests, 3, () => console.log(\"requeset end\"))\n")),(0,a.kt)("h2",{id:"asyncpool"},"asyncPool"),(0,a.kt)("p",null,"asyncPool(concurrency, iterable, iteratorFn)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5f02\u6b65\u51fd\u6570\uff0c\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff08\u9650\u5236\u6570\u91cf\u3001\u6570\u636e\u6570\u7ec4\u3001\u5904\u7406\u51fd\u6570\uff09\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u51fd\u6570\u5185\u90e8\u6267\u884c\u5904\u7406\u903b\u8f91\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u7ed3\u679c\u6570\u7ec4\u3001\u8fd0\u884c\u6267\u884c\u6570\u7ec4\u53d8\u91cf \uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5faa\u73af\u6570\u636e\u6570\u7ec4\uff0c\u5305\u88f9\u5904\u7406\u51fd\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise\u5bf9\u8c61"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"Promise\u5bf9\u8c61"),"\u5230\u7ed3\u679c\u6570\u7ec4\uff08\u4e4b\u540e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Promise\u5bf9\u8c61"),"\u6267\u884c\u7ed3\u679c\u4ecd\u4fdd\u5b58\u5728\u7ed3\u679c\u6570\u7ec4\u4e2d\uff09\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5224\u65ad\u6570\u636e\u6570\u7ec4\u7684\u957f\u5ea6\u662f\u5426\u5c0f\u4e8e\u7b49\u4e8e\u9650\u5236\u6570\u91cf\uff1b"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u7ee7\u7eed\u9650\u91cf\u6267\u884c\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5f53\u524d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"Promise\u5bf9\u8c61"),"\u5176\u540e\u6dfb\u52a0\u5220\u9664\u81ea\u8eab\u7684\u5904\u7406\u903b\u8f91\uff08\u6e05\u9664\u6267\u884c\u6570\u7ec4\uff09\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u5f53\u524d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"Promise\u5bf9\u8c61"),"\u6dfb\u52a0\u5230\u6267\u884c\u6570\u7ec4\u4e2d\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5224\u65ad\u6267\u884c\u6570\u7ec4\u957f\u5ea6\u662f\u5426\u5927\u4e8e\u7b49\u4e8e\u9650\u5236\u6570\u91cf\uff1b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u771f\uff0c\u5219\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"Promise.race(\u6267\u884c\u6570\u7ec4)"),"\uff0c\u8fdb\u5165\u5fae\u4efb\u52a1\u961f\u5217\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u5047\uff0c\u8df3\u8fc7\uff1b"))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u5219\u8df3\u8fc7\uff1b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Promise.all"),"\u5168\u91cf\u6267\u884c\u7ed3\u679c\u6570\u7ec4\u5e76\u8fd4\u56de\u7ed3\u679c\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd4\u56de\u8fd0\u884c\u7ed3\u679c\uff1b"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const asyncPool = async (poolLimit, array, iteratorFn) => {\n  const resultList = [];\n  const executing = [];\n  for (const item of array) {\n    console.log("\u5faa\u73af", item);\n    const p = Promise.resolve().then(() => {\n      console.log("\u521d\u59cb\u5316", item);\n      return iteratorFn(item, array);\n    });\n    resultList.push(p);\n    if (poolLimit <= array.length) {\n      const e = p.then(() => {\n        return executing.splice(executing.indexOf(e), 1);\n      });\n      executing.push(e);\n      if (executing.length >= poolLimit) {\n        console.log("\u8fd0\u884cPromise.race");\n        await Promise.race(executing);\n      }\n    }\n  }\n  return Promise.all(resultList);\n};\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const timeout = (i) =>\n  new Promise( (resolve) => {\n    setTimeout(resolve, i, i)\n  });\n\nconst main = async () => {\n  const aa = await asyncPool(\n    3,\n    [10, 20, 30, 40, 50, 60, 60, 70, 80, 1000,],\n    timeout\n  );\n  console.log("aa=>", aa);\n};\n\nmain();\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a\u51fd\u6570\u8fd0\u884c\uff0c\u4e00\u76f4\u4fdd\u6301\u5728\u9650\u5236\u8fd0\u884c\u6570\u91cf\u4e3a3\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20221027121242676",src:t(6294).Z,width:"679",height:"759"})))}p.isMDXComponent=!0},6294:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image-20221027121242676-93423ea3a1aa5ad420bd734c60c32373.png"}}]);