(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{1359:function(e,t,r){Promise.resolve().then(r.bind(r,9477)),Promise.resolve().then(r.bind(r,4360))},4360:function(e,t,r){"use strict";r.r(t);var s=r(9268);t.default=()=>(0,s.jsx)("div",{className:"w-full h-[59px] left-0 top-[59px] absolute bg-white bg-opacity-60",children:(0,s.jsx)("a",{href:"/form",children:(0,s.jsx)("button",{className:"fixed top-[68px] right-4 px-4 py-2 bg-[#8ae79a] text-white font-bold rounded-md hover:bg-green-400",children:"Add Stray"})})})},9477:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var s=r(9268),a=r(6006);function n(){let[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let e=async()=>{try{let e=await fetch("http://127.0.0.1:5002/animalForms"),r=await e.json();t(r),console.log(r)}catch(e){console.error(e)}};e()},[]),(0,s.jsx)(s.Fragment,{children:e.map((e,t)=>(0,s.jsx)("section",{className:"text-gray-600 body-font pt-10 border border-solid rounded-lg shadow-md",children:(0,s.jsx)("div",{className:"container px-5 py-24 mx-auto",children:(0,s.jsx)("div",{className:"flex flex-wrap -m-4",children:(0,s.jsx)("div",{className:"p-4 md:w-1/3",children:(0,s.jsxs)("div",{className:"h-full rounded-3xl bg-white bg-opacity-50 overflow-hidden shadow-md",children:[(0,s.jsx)("img",{className:"lg:h-[300px] md:h-36 w-full object-cover object-center rounded-t-3xl",src:e.imageURL,alt:"blog"}),(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)("h2",{className:"tracking-widest font-medium  mb-3 bg-rose-500 text-white px-4 py-2 rounded-full inline-block",children:e.tag}),(0,s.jsx)("h1",{className:"title-font text-lg font-medium text-gray-900 mb-3",children:e.name}),(0,s.jsxs)("p",{className:"leading-relaxed mb-3 text-gray-400",children:[(0,s.jsx)("span",{className:"font-light text-xl text-black",children:"Description:"})," ",e.description]}),(0,s.jsxs)("p",{className:"leading-relaxed mb-3 text-gray-400",children:[(0,s.jsx)("span",{className:"font-light text-xl text-black",children:"Last Seen:"})," ",e.location]}),(0,s.jsxs)("p",{className:"leading-relaxed mb-3 text-gray-400",children:[(0,s.jsxs)("span",{className:"font-light text-xl text-black",children:["Temperament:"," "]}),e.temperament]}),(0,s.jsx)("div",{className:"flex items-center flex-wrap"})]})]})})})})},"single-card-".concat(t)))})}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(6006),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,n={},o=null,d=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,s)&&!i.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:a,type:e,key:o,ref:d,props:n,_owner:c.current}}t.Fragment=n,t.jsx=o,t.jsxs=o},9268:function(e,t,r){"use strict";e.exports=r(3177)}},function(e){e.O(0,[253,698,744],function(){return e(e.s=1359)}),_N_E=e.O()}]);