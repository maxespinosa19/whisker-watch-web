(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{8862:function(e,a,t){Promise.resolve().then(t.bind(t,1245))},1245:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return d}});var r=t(9268),s=t(6006),n=t(6008),l=t(4202),o=t(1313);function i(){let[e,a]=(0,s.useState)(),[t,i]=(0,s.useState)(),c=(0,n.useRouter)(),[d,p]=(0,s.useState)(!1),x={apiKey:"AIzaSyCO2LVRNnGZJR-f1Id79oFrkzw3ZB4I3No",authDomain:"whisker-watch-api.firebaseapp.com",projectId:"whisker-watch-api",storageBucket:"whisker-watch-api.appspot.com",messagingSenderId:"267334187889",appId:"1:267334187889:web:cf86a53f6c044479f994d0"},[u,m]=(0,s.useState)("select");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"bg-gradient-to-b from-pink-100 to-pink-200 via-pink-300 w-full h-screen mt-0 pt-20 animate-gradient-y",children:(0,r.jsxs)("div",{className:"flex flex-col max-w-md px-9 py-8 bg-white bg-opacity-50 rounded-lg shadow sm:px-6 md:px:8 lg:px-10 mx-auto pb-[6px]",children:[(0,r.jsx)("h1",{className:"text-center text-rose-800 text-3xl",children:"Add an Animal"}),(0,r.jsx)("div",{className:"p-6 mt-8",children:(0,r.jsxs)("form",{className:"add",onSubmit:a=>{a.preventDefault();let t="";if(e){let a=(0,o.ZF)(x),r=(0,l.cF)(a),s=e.name,n=(0,l.iH)(r,"photos/"+s);t="https://firebasestorage.googleapis.com/v0/b/whisker-watch-api.appspot.com/o/photos%2F".concat(encodeURI(s),"?alt=media"),(0,l.KV)(n,e).catch(alert),i(t)}let r={name:a.target.name.value||"",imageURL:t||"",location:a.target.location.value||"",temperament:a.target.temperament.value||"",description:a.target.description.value||"",tag:u};p(!0),fetch("https://whisker-watch-api.web.app/animalForms",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(()=>{a.target.name.value="",a.target.imageURL.value="",a.target.location.value="",a.target.temperament.value="",a.target.description.value="",a.target.tag.value="",c.push("/discover"),console.log(c)}).catch(alert).then(()=>p(!1)),console.log(r)},children:[(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)("select",{className:"rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent ".concat("stray"===u?"text-blue-500":"lost"===u?"text-red-700":"tnr"===u?"text-green-700":"help"===u?"text-red-500":"safe"===u?"text-green-400":"text-red-700"),value:u,onChange:e=>{var a;let t=(null===(a=e.target)||void 0===a?void 0:a.value)||"select";m(t)},name:"tag",children:[(0,r.jsx)("option",{value:"select",children:"Please select tag"}),(0,r.jsx)("option",{value:"stray",children:"Stray"}),(0,r.jsx)("option",{value:"lost",children:"Lost"}),(0,r.jsx)("option",{value:"tnr",children:"TNR"}),(0,r.jsx)("option",{value:"help",children:"In Need of Help"}),(0,r.jsx)("option",{value:"safe",children:"Safe"})]})})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"name",placeholder:"name"})})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{console.log(e.target.files[0]),a(e.target.files[0])},className:"rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"imageURL",placeholder:"imageURL"}),e&&(0,r.jsx)("div",{className:"w-[20px] rounded",children:(0,r.jsx)("img",{src:URL.createObjectURL(e),className:"object-cover"})})]})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",placeholder:"Location Last Seen",name:"location"})})}),(0,r.jsx)("div",{className:"flex flex-col mb-2 pb-3",children:(0,r.jsx)("div",{className:" relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"temperament",placeholder:"temperament"})})}),(0,r.jsx)("div",{className:"flex flex-col mb-6",children:(0,r.jsx)("div",{className:" relative",children:(0,r.jsx)("input",{type:"text",className:"rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent",name:"description",placeholder:"description"})})}),(0,r.jsx)("div",{className:"flex w-full my-2 justify-center",children:(0,r.jsx)("button",{type:"submit",className:"py-3 px-4 mt-[5px] bg-pink-500 hover:bg-pink-600 text-white w-[130px] display flex justify-center transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full",disabled:d,children:d?(0,r.jsx)("img",{className:"transition ease-in-out 3s",src:"/images/cutecat.gif",alt:"Loading..."}):"Add Animal"})})]})})]})})})}function c(){return(0,r.jsxs)("nav",{className:"mb-0 w-full h-[59px] left-0 top-0 absolute bg-[#8ae79a] flex items-center justify-end pr-4",children:[(0,r.jsx)("a",{href:"/",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"home"}),(0,r.jsx)("a",{href:"/about",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"about"}),(0,r.jsx)("a",{href:"/signup",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"signup"}),(0,r.jsx)("a",{href:"/",className:"relative justify-start items-center",children:(0,r.jsx)("img",{className:"w-[45px] h-[45px] relative",src:"/images/favicon.png",alt:"Logo"})})]})}function d(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(c,{})]})}}},function(e){e.O(0,[874,253,698,744],function(){return e(e.s=8862)}),_N_E=e.O()}]);