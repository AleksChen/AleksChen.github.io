import{r as a}from"./chunks/index.WFquGv8Z.js";var R={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function J(){if(h)return l;h=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(x,t,e){var u=null;if(e!==void 0&&(u=""+e),t.key!==void 0&&(u=""+t.key),"key"in t){e={};for(var i in t)i!=="key"&&(e[i]=t[i])}else e=t;return t=e.ref,{$$typeof:s,type:x,key:u,ref:t!==void 0?t:null,props:e}}return l.Fragment=r,l.jsx=n,l.jsxs=n,l}var j;function g(){return j||(j=1,R.exports=J()),R.exports}var y=g();const N=({text:s,speed:r=150,deleteSpeed:n=100,wait:x=1500,loop:t=!0,cursor:e=!0,className:u="",cursorChar:i="|"})=>{const p=Array.isArray(s)?s:[s],[c,S]=a.useState(""),[o,d]=a.useState(!1),[f,_]=a.useState(0),[k,T]=a.useState(r);return a.useEffect(()=>{let v;return v=setTimeout(()=>{const A=f%p.length,m=p[A];if(S(E=>o?m.substring(0,E.length-1):m.substring(0,E.length+1)),T(o?n:r),!o&&c===m){if(!t&&f===p.length-1)return;T(x),d(!0)}else o&&c===""&&(d(!1),_(f+1),T(r))},k),()=>clearTimeout(v)},[c,o,f,p,r,n,x,t]),y.jsxs("span",{className:u,children:[c,e&&y.jsx("span",{className:"animate-pulse ml-1",children:i})]})};export{N as TypeWriter};
