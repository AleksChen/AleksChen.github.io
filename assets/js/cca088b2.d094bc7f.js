"use strict";(self.webpackChunkcww_blog=self.webpackChunkcww_blog||[]).push([[440],{8473:function(r,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return s}});var n=t(3117),a=t(102),o=(t(7294),t(3905)),l=["components"],u={title:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"},c=void 0,i={unversionedId:"algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",id:"algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",title:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",description:"144. \u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386",source:"@site/docs/algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal.md",sourceDirName:"algorithm/dataStructure/binary-tree",slug:"/algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/binary-tree-preorder-traversal",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"},sidebar:"algorithm",previous:{title:"\u4e8c\u53c9\u6811\u7684\u57fa\u672c\u64cd\u4f5c",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/basic-operation"},next:{title:"\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386",permalink:"/blog/docs/algorithm/dataStructure/binary-tree/binary-tree-inorder-traversal"}},p={},s=[{value:"\u89e3\u6790",id:"\u89e3\u6790",level:2},{value:"\u9012\u5f52\u5199\u6cd5",id:"\u9012\u5f52\u5199\u6cd5",level:2},{value:"\u975e\u9012\u5f52\u89e3\u6cd5",id:"\u975e\u9012\u5f52\u89e3\u6cd5",level:2}],d={toc:s};function f(r){var e=r.components,t=(0,a.Z)(r,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-preorder-traversal/"},"144. \u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386")),(0,o.kt)("h2",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("p",null,"\u4ece\u6839\u8282\u70b9\u5f00\u59cb\uff0c\u6309\u7167 ",(0,o.kt)("strong",{parentName:"p"},"\u6839\u8282\u70b9->\u5de6\u5b50\u8282\u70b9->\u53f3\u5b50\u8282\u70b9")," \u7684\u987a\u5e8f\u8fdb\u884c\u904d\u5386\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165: [1,null,2,3]  \n   1\n    \\\n     2\n    /\n   3 \n\u8f93\u51fa: [1,2,3]\n")),(0,o.kt)("h2",{id:"\u9012\u5f52\u5199\u6cd5"},"\u9012\u5f52\u5199\u6cd5"),(0,o.kt)("p",null,"\u5bf9\u6bcf\u4e2a\u8282\u70b9\u90fd\u662f\u4e00\u81f4\u7684\u64cd\u4f5c\u3002\u5982\u679c\u8282\u70b9\u5b58\u5728\u5c31\u5148\u8bbf\u95ee\u8be5\u8282\u70b9\uff0c\u7136\u540e\u524d\u5e8f\u904d\u5386\u8bbf\u95ee\u5de6\u5b50\u8282\u70b9\uff0c\u518d\u524d\u5e8f\u904d\u5386\u53f3\u5b50\u8282\u70b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var preorderTraversal = function(root) {\n    const result = [];\n    const preorderTraverse = (root) => {\n        if(root) {\n            result.push(root.val)\n            preorderTraverse(root.left);\n            preorderTraverse(root.right);\n        }\n    }\n    preorderTraverse(root)\n    return result\n};\n")),(0,o.kt)("h2",{id:"\u975e\u9012\u5f52\u89e3\u6cd5"},"\u975e\u9012\u5f52\u89e3\u6cd5"),(0,o.kt)("p",null,"\u53d6\u6839\u8282\u70b9\u4e3a\u76ee\u6807\u8282\u70b9\u5f00\u59cb\u904d\u5386\u3002\u4e0d\u7406\u89e3\u53ef\u4ee5\u753b\u56fe\u6765\u770b\u6267\u884c\u987a\u5e8f\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8bbf\u95ee\u76ee\u6807\u8282\u70b9"),(0,o.kt)("li",{parentName:"ol"},"\u5de6\u5b50\u8282\u70b9\u5165\u6808 -> \u76f4\u5230\u5de6\u5b50\u8282\u70b9\u4e3a\u7a7a"),(0,o.kt)("li",{parentName:"ol"},"\u8282\u70b9\u51fa\u6808\uff0c\u4ee5\u53f3\u5b50\u8282\u70b9\u4e3a\u76ee\u6807\u8282\u70b9\uff0c\u518d\u6b21\u6267\u884c 1\u30012\u30013 \u6b65\u9aa4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var preorderTraversal = function (root) {\n    const result = [];\n    const stack = [];\n    let current = root;\n    while (current || stack.length > 0) {\n        // \u8bbf\u95ee\u5230\u5de6\u5b50\u6811\u7684\u53f6\u5b50\u8282\u70b9\n        while (current) {\n            // \u5148\u8bbf\u95ee\u6839\u8282\u70b9\u7684\u503c\n            result.push(current.val);\n            stack.push(current);\n            current = current.left;\n        }\n        current = stack.pop(); // \u6839\u8282\u70b9\u5f39\u51fa\n        current = current.right;\n    }\n    return result\n};\n")))}f.isMDXComponent=!0},3905:function(r,e,t){t.d(e,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var c=n.createContext({}),i=function(r){var e=n.useContext(c),t=e;return r&&(t="function"==typeof r?r(e):l(l({},e),r)),t},p=function(r){var e=i(r.components);return n.createElement(c.Provider,{value:e},r.children)},s={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,c=r.parentName,p=u(r,["components","mdxType","originalType","parentName"]),d=i(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return t?n.createElement(m,l(l({ref:e},p),{},{components:t})):n.createElement(m,l({ref:e},p))}));function f(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,l=new Array(o);l[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=r,u.mdxType="string"==typeof r?r:a,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);