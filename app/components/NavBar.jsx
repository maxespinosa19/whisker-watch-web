export default function NavBar(){
  return(

<nav className="w-full h-[59px] left-0 top-0 absolute bg-[#8ae79a]">
<a href="/" className=" h-14 left-[966px] top-[18px] absolute text-black text-2xl font-light tracking-[4.80px] hover:underline">home</a>

   <a href="/" className=" h-14 left-[1086px] top-[18px] absolute text-black text-2xl font-light tracking-[4.80px] hover:underline">about</a>
   
    <a href="/" className=" h-14 left-[1206px] top-[18px] absolute text-black text-2xl font-light tracking-[4.80px] hover:underline">signup</a>

<a href="/"className="pr-[34px] pb-[33px] left-[1330px] top-[-9px] absolute justify-start items-center">
<img className="w-[75px] h-[75px] top-[-8px] fixed" src="/images/favicon.png" />
</a>

</nav>
  )
}