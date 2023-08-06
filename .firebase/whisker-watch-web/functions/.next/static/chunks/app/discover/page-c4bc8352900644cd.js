(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{8232:function(e,s,t){Promise.resolve().then(t.bind(t,8930))},8673:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(9268);function l(){return(0,a.jsxs)("nav",{className:"mb-0 w-full h-[59px] left-0 top-0 absolute bg-[#8ae79a] flex items-center justify-end pr-4",children:[(0,a.jsx)("a",{href:"/",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"home"}),(0,a.jsx)("a",{href:"/about",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"about"}),(0,a.jsx)("a",{href:"/discover",className:"text-black text-xl font-light tracking-tight mr-4 hover:underline",children:"discover"}),(0,a.jsx)("a",{href:"/",className:"relative justify-start items-center",children:(0,a.jsx)("img",{className:"w-[45px] h-[45px] relative",src:"/images/favicon.png",alt:"Logo"})})]})}},8930:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var a=t(9268),l=()=>(0,a.jsx)("div",{className:"w-full h-[59px] left-0 top-[59px] absolute bg-white bg-opacity-60",children:(0,a.jsx)("a",{href:"/form",children:(0,a.jsx)("button",{className:"fixed top-[68px] right-4 px-4 py-2 bg-[#8ae79a] text-white font-bold rounded-md  hover:bg-green-400",children:"Add Stray"})})}),r=t(8673),n=t(6006),i=t(5846),c=t.n(i);function x(){let[e,s]=(0,n.useState)([]),[t,l]=(0,n.useState)(!0);(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://whisker-watch-api.web.app/animalForms"),t=await e.json();s(t),l(!1),console.log(t)}catch(e){console.error(e)}};e()},[]);let r=e=>{switch(e){case"stray":return"bg-blue-200";case"lost":return"bg-red-400";case"tnr":return"bg-green-500";case"help":return"bg-red-500";case"safe":return"bg-green-300";default:return"bg-rose-400"}};return(0,a.jsx)("div",{className:"grid mx-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ",children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{}),(0,a.jsx)(d,{}),(0,a.jsx)(d,{}),(0,a.jsx)(d,{}),(0,a.jsx)(d,{}),(0,a.jsx)(d,{})]}):e.map((e,s)=>(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"h-[300px] rounded-3xl w-full  mx-auto overflow-hidden shadow-md flex mt-[150px]",children:[(0,a.jsx)("img",{className:"lg:h-full md:h-full md: w-1/2 lg:w-3/4  max-w-[200px] min-w-[200px] object-cover rounded-tl-3xl rounded-bl-3xl",src:e.imageURL||"https://firebasestorage.googleapis.com/v0/b/whisker-watch-api.appspot.com/o/photos%2Fno-image.gif?alt=media",alt:"blog"}),(0,a.jsxs)("div",{className:"bg-white w-full bg-opacity-50 p-4 sm:p-6",children:[(0,a.jsx)("h2",{className:"tracking-widest font-medium mb-3 px-4 py-2 rounded-full inline-block ".concat(r(e.tag)),children:e.tag}),(0,a.jsx)("h1",{className:"title-font text-lg font-medium text-gray-900 mb-3",children:e.name}),(0,a.jsxs)("p",{className:"leading-relaxed mb-3 text-gray-400",children:[(0,a.jsx)("span",{className:"font-light text-xl text-black",children:"Description:"})," ",e.description]}),(0,a.jsxs)("p",{className:"leading-relaxed mb-3 text-gray-400",children:[(0,a.jsx)("span",{className:"font-light text-xl text-black",children:"Last Seen:"})," ",(0,a.jsx)(c(),{href:{pathname:"/map",query:{address:e.address,city:e.city,state:e.state,zip:e.zip,location:e.location}},children:(0,a.jsxs)("span",{className:"flex items-center",children:[(0,a.jsx)("h1",{className:"text-purple-600",children:"View on Map"}),(0,a.jsx)("img",{src:"/images/favicon.png",className:"w-[30px] mr-2 "})]})})]}),(0,a.jsxs)("p",{className:"leading-relaxed mb-3 text-gray-400",children:[(0,a.jsxs)("span",{className:"font-light text-xl text-black ",children:["Temperament:"," "]}),e.temperament]}),(0,a.jsx)("div",{className:"flex items-center flex-wrap"})]})]})},"single-card-".concat(s)))})}let d=()=>(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"h-[300px] rounded-3xl w-full  mx-auto overflow-hidden shadow-md flex mt-[150px] animate-pulse",children:[(0,a.jsx)("div",{className:"w-3/4 h-full bg-rose-200"}),(0,a.jsxs)("div",{className:"bg-white w-full bg-opacity-50 p-4 sm:p-6",children:[(0,a.jsx)("div",{className:"w-1/2 h-4 bg-green-200 mb-4"}),(0,a.jsx)("div",{className:"w-3/4 h-4 bg-green-200 mb-4"}),(0,a.jsx)("div",{className:"w-3/4 h-4 bg-green-200 mb-4"}),(0,a.jsx)("div",{className:"w-2/4 h-4 bg-green-200 mb-4"}),(0,a.jsx)("div",{className:"w-2/4 h-4 bg-green-200 mb-4"}),(0,a.jsx)("img",{src:"./images/catwalkt.gif",className:"w-1/2"})]})]})});function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(l,{}),(0,a.jsx)(x,{})]})}}},function(e){e.O(0,[629,253,698,744],function(){return e(e.s=8232)}),_N_E=e.O()}]);