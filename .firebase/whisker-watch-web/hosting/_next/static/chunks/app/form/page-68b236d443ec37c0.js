(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{8862:function(e,t,a){Promise.resolve().then(a.bind(a,1245))},1245:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var r=a(9268),n=a(6006),l=a(6008);function s(){let e=(0,l.useRouter)(),[t,a]=(0,n.useState)(!1),[s,o]=(0,n.useState)("select");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"bg-gradient-to-b from-pink-100 to-pink-200 via-pink-300 w-full h-screen mt-0 pt-20 animate-gradient-y",children:(0,r.jsxs)("div",{className:"flex flex-col max-w-md px-9 py-8 bg-white bg-opacity-50 rounded-lg shadow sm:px-6 md:px:8 lg:px-10 mx-auto pb-[6px]",children:[(0,r.jsx)("h1",{className:"text-center text-3xl",children:"Add an Animal"}),(0,r.jsx)("div",{className:"p-6 mt-8",children:(0,r.jsxs)("form",{className:"add",onSubmit:t=>{var r;t.preventDefault();let n={name:t.target.name.value||"",imageURL:(null===(r=t.target.imageURL)||void 0===r?void 0:r.value)||"",location:t.target.location.value||"",temperament:t.target.temperament.value||"",description:t.target.description.value||"",tag:s};a(!0),fetch("http://127.0.0.1:5002/animalForms",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(()=>{t.target.name.value="",t.target.imageURL.value="",t.target.location.value="",t.target.temperament.value="",t.target.description.value="",e.push("/"),console.log(e)}).catch(alert).then(()=>a(!1)),console.log(n)},children:[(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent ".concat("stray"===s?"text-blue-500":"lost"===s?"text-red-700":"tnr"===s?"text-green-700":"help"===s?"text-red-500":"text-red-700"),value:s,onChange:e=>{var t;let a=(null===(t=e.target)||void 0===t?void 0:t.value)||"select";o(a)},name:"tag",children:[(0,r.jsx)("option",{value:"select",children:"Please select tag"}),(0,r.jsx)("option",{value:"stray",children:"Stray"}),(0,r.jsx)("option",{value:"lost",children:"Lost"}),(0,r.jsx)("option",{value:"tnr",children:"TNR"}),(0,r.jsx)("option",{value:"help",children:"In Need of Help"})]})})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"name",placeholder:"name"})})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"imageURL",placeholder:"imageURL"})})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",placeholder:"Location Last Seen",name:"location"})})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:" relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"temperament",placeholder:"temperament"})})}),(0,r.jsx)("div",{className:"flex flex-col mb-6",children:(0,r.jsx)("div",{className:" relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"description",placeholder:"description"})})}),(0,r.jsx)("div",{className:"flex w-full my-2 justify-center",children:(0,r.jsx)("button",{type:"submit",className:"py-3 px-4 mt-[5px] bg-pink-500 hover:bg-pink-600 text-white w-[130px] display flex justify-center transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full",disabled:t,children:t?(0,r.jsx)("img",{className:"transition ease-in-out 3s",src:"/images/cutecat.gif",alt:"Loading..."}):"Add Animal"})})]})})]})})})}function o(){return(0,r.jsxs)("nav",{className:"mb-0 w-full h-[59px] left-0 top-0 absolute bg-[#8ae79a] flex items-center justify-end pr-4",children:[(0,r.jsx)("a",{href:"/",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"home"}),(0,r.jsx)("a",{href:"/",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"about"}),(0,r.jsx)("a",{href:"/",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"signup"}),(0,r.jsx)("a",{href:"/",className:"relative justify-start items-center",children:(0,r.jsx)("img",{className:"w-[45px] h-[45px] relative",src:"/images/favicon.png",alt:"Logo"})})]})}function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(o,{})]})}},3177:function(e,t,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=a(6006),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var r,l={},c=null,d=null;for(r in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:l,_owner:o.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},9268:function(e,t,a){"use strict";e.exports=a(3177)},6008:function(e,t,a){e.exports=a(4e3)}},function(e){e.O(0,[253,698,744],function(){return e(e.s=8862)}),_N_E=e.O()}]);