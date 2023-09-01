"use strict";(self.webpackChunkwinwoo_blog=self.webpackChunkwinwoo_blog||[]).push([[7883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,d=u["".concat(i,".").concat(b)]||u[b]||g[b]||a;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={title:"\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d"},l=void 0,c={unversionedId:"interview/hands-on-practice/deep-copy",id:"interview/hands-on-practice/deep-copy",title:"\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d",description:"\u6d45\u62f7\u8d1d",source:"@site/docs/interview/hands-on-practice/deep-copy.mdx",sourceDirName:"interview/hands-on-practice",slug:"/interview/hands-on-practice/deep-copy",permalink:"/blog/docs/interview/hands-on-practice/deep-copy",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6d45\u62f7\u8d1d\u548c\u6df1\u62f7\u8d1d"},sidebar:"interview",previous:{title:"Promise \u9650\u5236\u5e76\u53d1\u8bf7\u6c42\u6570\u91cf",permalink:"/blog/docs/interview/hands-on-practice/concurrent-requests"},next:{title:"\u9632\u6296\u8282\u6d41",permalink:"/blog/docs/interview/hands-on-practice/throttle-debounce"}},i={},p=[{value:"\u6d45\u62f7\u8d1d",id:"\u6d45\u62f7\u8d1d",level:2},{value:"\u6df1\u62f7\u8d1d",id:"\u6df1\u62f7\u8d1d",level:2},{value:"\u7b80\u5355\u65b9\u6cd5",id:"\u7b80\u5355\u65b9\u6cd5",level:3},{value:"\u9012\u5f52\u5b9e\u73b0",id:"\u9012\u5f52\u5b9e\u73b0",level:3},{value:"\u5b8c\u6574\u7248",id:"\u5b8c\u6574\u7248",level:2},{value:"\u590d\u6742\u7248\u672c\u5b9e\u73b0",id:"\u590d\u6742\u7248\u672c\u5b9e\u73b0",level:3}],s={toc:p};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6d45\u62f7\u8d1d"},"\u6d45\u62f7\u8d1d"),(0,o.kt)("p",null,"\u6211\u4eec\u7528\u5f88\u591a\u7b80\u5355\u7684\u65b9\u6cd5\u90fd\u80fd\u5b9e\u73b0\u6d45\u62f7\u8d1d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"arr.slice();\narr.concat();\n")),(0,o.kt)("h2",{id:"\u6df1\u62f7\u8d1d"},"\u6df1\u62f7\u8d1d"),(0,o.kt)("h3",{id:"\u7b80\u5355\u65b9\u6cd5"},"\u7b80\u5355\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"JSON.parse(JSON.stringify(obj));\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u62f7\u8d1d\u65b9\u5f0f\u5c40\u9650\u6027\u6bd4\u8f83\u5927\uff0c\u4f46\u662f\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u4e00\u822c\u53ea\u662f\u62f7\u8d1d\u57fa\u672c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e2a\u4eba\u5728\u5f00\u53d1\u4e2d\u7528\u7684\u8fd8\u662f\u6bd4\u8f83\u591a")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7f3a\u9677")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),"\u91cc\u9762\u6709\u65f6\u95f4\u5bf9\u8c61\uff0c\u5219\u5e8f\u5217\u5316\u540e\u4f1a\u5c06\u65f6\u95f4\u5bf9\u8c61\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u683c\u5f0f"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),"\u91cc\u6709",(0,o.kt)("inlineCode",{parentName:"li"},"function"),",",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u5219\u5e8f\u5217\u5316\u540e\u4f1a\u5c06",(0,o.kt)("inlineCode",{parentName:"li"},"function"),",",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," \u4e22\u5931"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),"\u91cc\u6709",(0,o.kt)("inlineCode",{parentName:"li"},"NaN"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Infinity"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"-Infinity"),"\uff0c\u5219\u5e8f\u5217\u5316\u540e\u4f1a\u53d8\u6210",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),"\u91cc\u6709\u5bf9\u8c61\u662f\u7531\u6784\u9020\u51fd\u6570\u751f\u6210\u7684\uff0c\u5219\u5e8f\u5217\u5316\u7684\u7ed3\u679c\u4f1a\u4e22\u5f03\u5bf9\u8c61\u7684 constructor"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u5bf9\u8c61\u4e2d\u5b58\u5728\u5faa\u73af\u5f15\u7528\u7684\u60c5\u51b5\u5c06\u629b\u51fa\u9519\u8bef")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let obj = {\n  a: undefined,\n  b: {\n    c: function () {\n      console.log(1);\n    },\n    d: null,\n    e: new Date(),\n    f: new RegExp("\\\\w+"),\n    g: NaN,\n  },\n};\nobj.c = obj;\n\nlet copyObj = JSON.parse(JSON.stringify(obj));\nconsole.log(obj, copyObj);\n')),(0,o.kt)("h3",{id:"\u9012\u5f52\u5b9e\u73b0"},"\u9012\u5f52\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function deepClone(obj) {\n  let newobj = null;\n  if (typeof obj == "object" && obj !== null) {\n    newobj = obj instanceof Array ? [] : {};\n    for (var i in obj) {\n      newobj[i] = deepClone(obj[i]);\n    }\n  } else {\n    newobj = obj;\n  }\n  return newobj;\n}\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u65b9\u6cd5\u5b58\u5728\u5faa\u73af\u5f15\u7528\u7684\u95ee\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n  a: 1,\n};\nobj.a = obj;\nlet copyObj = copy(obj);\nconsole.log(obj, copyObj);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let map = new Map();\nfunction deepClone(origin) {\n  let target = null;\n  if (typeof origin == "object" && origin !== null) {\n    if (map.get(origin)) {\n      target = map.get(origin); // \u8bb0\u5f55\u5f15\u7528\u5173\u7cfb\n    } else {\n      target = Array.isArray(origin) ? [] : {};\n      map.set(origin, target);\n      for (var i in origin) {\n        target[i] = deepClone(origin[i]);\n      }\n    }\n  } else {\n    target = origin;\n  }\n  return target;\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u9047\u5230\u65f6\u95f4\u5bf9\u8c61\uff0c\u6b63\u5219\u7b49\u7c7b\u578b\uff0c\u9700\u8981\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"new"),"\u5173\u952e\u5b57\u53bb\u521b\u5efa")),(0,o.kt)("p",null,"\u63aa\u65bd\uff1a\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"WeakMap"),"\u8bb0\u5f55\u4e0b\u5bf9\u8c61\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\uff0c\u5e76\u4e0e\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4e00\u4e00\u5bf9\u5e94\uff0c\u5373\u8bb0\u5f55\u5f15\u7528\u5173\u7cfb\u3002"),(0,o.kt)("h2",{id:"\u5b8c\u6574\u7248"},"\u5b8c\u6574\u7248"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5229\u7528 WeakMap \u89e3\u51b3\u5faa\u73af\u5f15\u7528\nlet map = new WeakMap();\nfunction deepClone(obj) {\n  if (obj instanceof Object) {\n    if (map.has(obj)) {\n      return map.get(obj);\n    }\n    let newObj;\n    if (obj instanceof Array) {\n      newObj = [];\n    } else if (obj instanceof Function) {\n      newObj = function () {\n        return obj.apply(this, arguments);\n      };\n    } else if (obj instanceof RegExp) {\n      // \u62fc\u63a5\u6b63\u5219\n      newobj = new RegExp(obj.source, obj.flags);\n    } else if (obj instanceof Date) {\n      newobj = new Date(obj);\n    } else {\n      newObj = {};\n    }\n    // \u514b\u9686\u4e00\u4efd\u5bf9\u8c61\u51fa\u6765\n    // Object.getOwnPropertyDescriptors() \u65b9\u6cd5\u7528\u6765\u83b7\u53d6\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\u3002\n    // \u6240\u6307\u5b9a\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\uff0c\u5982\u679c\u6ca1\u6709\u4efb\u4f55\u81ea\u8eab\u5c5e\u6027\uff0c\u5219\u8fd4\u56de\u7a7a\u5bf9\u8c61\u3002\n    let desc = Object.getOwnPropertyDescriptors(obj);\n    let clone = Object.create(Object.getPrototypeOf(obj), desc);\n    map.set(obj, clone);\n    for (let key in obj) {\n      if (obj.hasOwnProperty(key)) {\n        newObj[key] = deepClone(obj[key]);\n      }\n    }\n    return newObj;\n  }\n  return obj;\n}\n\nobj.b = obj;\nlet copyObj = deepClone(obj);\nconsole.log(obj, copyObj);\n")),(0,o.kt)("h3",{id:"\u590d\u6742\u7248\u672c\u5b9e\u73b0"},"\u590d\u6742\u7248\u672c\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const mapTag = "[object Map]";\nconst setTag = "[object Set]";\nconst arrayTag = "[object Array]";\nconst objectTag = "[object Object]";\nconst argsTag = "[object Arguments]";\n\nconst boolTag = "[object Boolean]";\nconst dateTag = "[object Date]";\nconst numberTag = "[object Number]";\nconst stringTag = "[object String]";\nconst symbolTag = "[object Symbol]";\nconst errorTag = "[object Error]";\nconst regexpTag = "[object RegExp]";\nconst funcTag = "[object Function]";\n\nconst deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];\n\nfunction forEach(array, iteratee) {\n  let index = -1;\n  const length = array.length;\n  while (++index < length) {\n    iteratee(array[index], index);\n  }\n  return array;\n}\n\nfunction isObject(target) {\n  const type = typeof target;\n  return target !== null && (type === "object" || type === "function");\n}\n\nfunction getType(target) {\n  return Object.prototype.toString.call(target);\n}\n\nfunction getInit(target) {\n  const ctor = target.constructor;\n  return new ctor();\n}\n\nfunction cloneSymbol(target) {\n  return Object(Symbol.prototype.valueOf.call(target));\n}\n\nfunction cloneReg(target) {\n  const reFlags = /\\w*$/;\n  const result = new target.constructor(target.source, reFlags.exec(target));\n  result.lastIndex = target.lastIndex;\n  return result;\n}\n\nfunction cloneFunction(fn) {\n  const bodyReg = /(?<={)(.|\\n)+(?=})/m;\n  const paramReg = /(?<=\\().+(?=\\)\\s+{)/;\n  const funcString = fn.toString();\n  if (fn.prototype) {\n    const param = paramReg.exec(funcString);\n    const body = bodyReg.exec(funcString);\n    if (body) {\n      if (param) {\n        const paramArr = param[0].split(",");\n        return new Function(...paramArr, body[0]);\n      } else {\n        return new Function(body[0]);\n      }\n    } else {\n      return null;\n    }\n  } else {\n    return eval(funcString);\n  }\n}\n\nfunction cloneOtherType(target, type) {\n  const Ctor = target.constructor;\n  switch (type) {\n    case boolTag:\n    case numberTag:\n    case stringTag:\n    case errorTag:\n    case dateTag:\n      return new Ctor(target);\n    case regexpTag:\n      return cloneReg(target);\n    case symbolTag:\n      return cloneSymbol(target);\n    case funcTag:\n      return cloneFunction(target);\n    default:\n      return null;\n  }\n}\n\nfunction deepClone(target, map = new WeakMap()) {\n  // \u514b\u9686\u539f\u59cb\u7c7b\u578b\n  if (!isObject(target)) {\n    return target;\n  }\n\n  // \u521d\u59cb\u5316\n  const type = getType(target);\n  let cloneTarget;\n  if (deepTag.includes(type)) {\n    cloneTarget = getInit(target, type);\n  } else {\n    return cloneOtherType(target, type);\n  }\n\n  // \u9632\u6b62\u5faa\u73af\u5f15\u7528\n  if (map.get(target)) {\n    return target;\n  }\n  map.set(target, cloneTarget);\n\n  // \u514b\u9686 set\n  if (type === setTag) {\n    target.forEach((value) => {\n      cloneTarget.add(deepClone(value));\n    });\n    return cloneTarget;\n  }\n\n  // \u514b\u9686 map\n  if (type === mapTag) {\n    target.forEach((value, key) => {\n      cloneTarget.set(key, deepClone(value));\n    });\n    return cloneTarget;\n  }\n\n  // \u514b\u9686\u5bf9\u8c61\u548c\u6570\u7ec4\n  const keys = type === arrayTag ? undefined : Object.keys(target);\n  forEach(keys || target, (value, key) => {\n    if (keys) {\n      key = value;\n    }\n    cloneTarget[key] = deepClone(target[key], map);\n  });\n\n  return cloneTarget;\n}\n')))}g.isMDXComponent=!0}}]);