"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[8225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,c(c({ref:t},i),{},{components:n})):r.createElement(d,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5713:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294);const a="highlightArea__DwO";var o=n(6010),c=n(838);function s(e){let{children:t,bgColor:n,wrapperClassName:s,wrapperStyle:l}=e;const p={backgroundColor:`${(0,c.yz)(n)}`},i=Object.assign(p,l);return r.createElement("span",{className:(0,o.Z)(a,s),style:i},t)}},838:(e,t,n)=>{let r;function a(){const e=navigator.userAgent.toUpperCase();return!(!/IPHONE|IPOD/.test(e)||!/MOBILE/.test(e))||(!(!/ANDROID/.test(e)||!/MOBILE/.test(e))||(/IPAD/.test(e)&&/MOBILE/.test(e),!1))}function o(e){navigator.clipboard.writeText(e)}n.d(t,{tq:()=>a,Vf:()=>o,yz:()=>s}),function(e){e.Get="GET",e.Post="POST",e.Delete="DELETE",e.Put="PUT",e.Patch="PATCH"}(r||(r={}));var c;function s(e){switch(e){case c.Primary:case"":case void 0:case null:return"#25c2a0";case c.Red:return"#e53935";case c.Pink:return"#d81b60";case c.Blue:return"#1e88e5";case c.Purple:return"#ba68c8";case c.Yellow:return"#ffff8d";default:return e}}!function(e){e[e.Primary=0]="Primary",e[e.Red=1]="Red",e[e.Pink=2]="Pink",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow"}(c||(c={}))},218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905)),o=n(5713);const c={title:"useEffect",description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},s=void 0,l={unversionedId:"react/hooks/useEffect",id:"react/hooks/useEffect",title:"useEffect",description:"",source:"@site/docs/react/hooks/useEffect.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useEffect",permalink:"/blog/docs/react/hooks/useEffect",draft:!1,tags:[{label:"React",permalink:"/blog/docs/tags/react"}],version:"current",frontMatter:{title:"useEffect",description:"",tags:[{label:"React",permalink:"react"}],last_update:{date:"2022-07-19",author:"Winwoo"}},sidebar:"react",previous:{title:"useState",permalink:"/blog/docs/react/hooks/useState"},next:{title:"DOM",permalink:"/blog/docs/react/dom/"}},p={},i=[{value:"\u4f55\u65f6\u6267\u884c Effect",id:"\u4f55\u65f6\u6267\u884c-effect",level:2},{value:"\u8df3\u8fc7 Effect \u6267\u884c",id:"\u8df3\u8fc7-effect-\u6267\u884c",level:2},{value:"\u4ec5\u6267\u884c\u4e00\u6b21\u7684 Effect",id:"\u4ec5\u6267\u884c\u4e00\u6b21\u7684-effect",level:2},{value:"\u6e05\u9664 Effect",id:"\u6e05\u9664-effect",level:2},{value:"\u5206\u79bb\u903b\u8f91",id:"\u5206\u79bb\u903b\u8f91",level:2}],u={toc:i};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Effects")," \u7684\u4f5c\u7528\u662f\u8ba9\u6211\u4eec\u5728\u6e32\u67d3\u5b8c\u6210\u540e\u8fd0\u884c\u4e00\u6bb5\u4ee3\u7801\uff0c\u6765\u4fdd\u6301\u7ec4\u4ef6\u72b6\u6001\u4e0e\u5916\u90e8\u6570\u636e\u6e90\u540c\u6b65\u3002"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u6267\u884c-effect"},"\u4f55\u65f6\u6267\u884c Effect"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"useEffect")," \u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5230\u7ec4\u4ef6\u7684 ",(0,a.kt)("strong",{parentName:"p"},"props")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"state"),"\uff0c\u5f53\u5b83\u4eec\u53d1\u751f\u6539\u53d8\u7684\u65f6\u5019\uff0c\u4f1a\u6267\u884c\u91cd\u65b0\u6e32\u67d3\uff0c\u5728\u66f4\u65b0\u5b8c ",(0,a.kt)("strong",{parentName:"p"},"DOM")," \u540e\u4f1a\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},"useEffect"),"\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5728",(0,a.kt)(o.Z,{mdxType:"TH"},"\u7b2c\u4e00\u6b21\u6e32\u67d3\u4e4b\u540e"),"\u548c",(0,a.kt)(o.Z,{mdxType:"TH"},"\u6bcf\u6b21\u66f4\u65b0\u4e4b\u540e"),"\u90fd\u4f1a\u6267\u884c\u3002"),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"useEffect Hook")," \u662f ",(0,a.kt)("strong",{parentName:"p"},"React Class")," \u751f\u547d\u5468\u671f\u51fd\u6570 ",(0,a.kt)("strong",{parentName:"p"},"componentDidMount"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"componentDidUpdate")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"componentWillUnmount")," \u8fd9\u4e09\u4e2a\u51fd\u6570\u7684\u7ec4\u5408\u3002")),(0,a.kt)("h2",{id:"\u8df3\u8fc7-effect-\u6267\u884c"},"\u8df3\u8fc7 Effect \u6267\u884c"),(0,a.kt)("p",null,"\u4f20\u9012\u6570\u7ec4\u4f5c\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"useEffect")," \u7684\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5982\u679c\u7279\u5b9a\u503c\u5728\u4e24\u6b21\u6e32\u67d3\u95f4\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u5219\u8df3\u8fc7 Effect \u7684\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u4ec5\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," \u72b6\u6001\u6539\u53d8\u65f6\u624d\u4f1a\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},"useEffect"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]);\n")),(0,a.kt)("h2",{id:"\u4ec5\u6267\u884c\u4e00\u6b21\u7684-effect"},"\u4ec5\u6267\u884c\u4e00\u6b21\u7684 Effect"),(0,a.kt)("p",null,"\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"useEffect")," \u7684\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u4f20\u9012\u4e00\u4e2a",(0,a.kt)(o.Z,{mdxType:"TH"},"\u7a7a\u6570\u7ec4"),"\uff0c\u5373\u544a\u8bc9 React \u8be5 Effect \u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55 ",(0,a.kt)("strong",{parentName:"p"},"props")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"state"),"\uff0c\u4e14\u6c38\u8fdc\u4e0d\u4f1a\u91cd\u590d\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  // \u6b64\u5904\u4ee3\u7801\u4ec5\u5728\u7ec4\u4ef6\u6302\u8f7d\u548c\u5378\u8f7d\u65f6\u6267\u884c\n}, []);\n")),(0,a.kt)("h2",{id:"\u6e05\u9664-effect"},"\u6e05\u9664 Effect"),(0,a.kt)("p",null,"\u5f53",(0,a.kt)(o.Z,{mdxType:"TH"},"\u6570\u636e\u6e90\u6765\u81ea\u5916\u90e8"),"\u65f6\uff0c\u6bd4\u5982 API \u8c03\u7528\u3002\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0cAPI \u8c03\u7528\u8fc7\u7a0b\u6ca1\u6709\u7ed3\u675f\uff0c\u6240\u4ee5\u9700\u8981\u6e05\u9664\u6b64\u5904\u7684 Effect\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u662f\u4e00\u4e2a\u67e5\u770b\u597d\u53cb\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"useEffect")," \u8fd4\u56de\u4e00\u4e2a\u6e05\u9664\u51fd\u6570\uff0c\u5728\u7ec4\u4ef6\u5378\u8f7d\u7684\u65f6\u5019\u6267\u884c\u6e05\u9664\u64cd\u4f5c\uff0c\u521d\u59cb\u5316\u5176\u5728\u7ebf\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{11-13} title="JavaScript" showLineNumbers',"{11-13}":!0,title:'"JavaScript"',showLineNumbers:!0},'import React, { useState, useEffect } from "react";\n\nfunction FriendStatus(props) {\n  const [isOnline, setIsOnline] = useState(null);\n\n  useEffect(() => {\n    function handleStatusChange(status) {\n      setIsOnline(status.isOnline);\n    }\n    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);\n    return () => {\n      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);\n    };\n  });\n\n  if (isOnline === null) {\n    return "Loading...";\n  }\n  return isOnline ? "Online" : "Offline";\n}\n')),(0,a.kt)("h2",{id:"\u5206\u79bb\u903b\u8f91"},"\u5206\u79bb\u903b\u8f91"),(0,a.kt)("p",null,"Class \u7ec4\u4ef6\u901a\u5e38\u4f1a\u5c06\u4e0d\u540c\u7684\u7ec4\u4ef6\u903b\u8f91\u5206\u6563\u5230\u5404\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\uff0c",(0,a.kt)("strong",{parentName:"p"},"useEffect Hook")," \u5f88\u597d\u5730\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u58f0\u660e\u591a\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"useEffect")," \u5728\u540c\u4e00\u4e2a Function \u7ec4\u4ef6\u4e4b\u4e2d\uff0c\u4e14\u5b83\u4eec\u4e4b\u95f4\u4e92\u4e0d\u5e72\u6270\uff0c\u5404\u81ea\u5904\u7406\u5404\u81ea\u7684\u903b\u8f91\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"React")," \u4f1a\u6309\u7167 ",(0,a.kt)("strong",{parentName:"p"},"useEffect")," \u58f0\u660e\u7684\u987a\u5e8f\u8fdb\u884c\u8c03\u7528\u3002")))}f.isMDXComponent=!0}}]);