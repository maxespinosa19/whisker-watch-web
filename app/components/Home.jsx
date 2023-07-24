import NavBar from "./NavBar";
export default function Home2() {
  return (
    <>
    <div className="overflow-y-hidden h-[832px] relative">
      <div className="w-[1393px] h-[936px] absolute bg-pink-100" />
     <NavBar/>

      <div className="w-[720px] h-[196px] left-[506px] top-[150px] absolute text-black text-9xl font-normal tracking-[12.80px]">WHISKER</div>
      <div className="w-[700px] h-[70px] left-[498px] top-[175px] absolute text-pink-300 text-9xl font-light tracking-[25.60px]">__________</div>
      <div className="h-[163px] left-[719px] top-[311px] absolute text-black text-9xl font-normal tracking-[12px]">WATCH</div>

      <a
       href="/discover"
       className="block w-[251px] h-[84px] left-[1084px] top-[530px] absolute bg-pink-100 rounded-[50px] border-2 border-black hover:bg-pink-200" >
       <div className="w-[214px] h-[74px]  text-stone-950 text-[17px] font-light tracking-[8px] flex items-center  transition ease-in-out duration-200 justify-center pl-9 pt-2">START NOW</div>
      </a>

   
      <img className="w-[467px] h-[350px] left-[152px] top-[1017.63px] absolute origin-top-left rotate-[-50.55deg] rounded-[100px]" src="/images/catpink.png" />
      <img className="w-[601.09px] h-[386.46px] left-[-112.56px] top-[531.39px] absolute origin-top-left rotate-[-7deg] rounded-tl-[500px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px]" src="/images/catpink.png" />
      <img className="w-[417px] h-[316px] left-0 top-[57px] absolute rounded-br-[25px]" src="/images/cat-green.png" />

      <div className="w-[383px] h-[187px] left-[598px] top-[510px] absolute text-center">
        <span className="text-green-500 text-1xl font-bold">Discover</span>
        <span className="text-black text-1xl font-normal"> and track cute cats and lovable stray dogs on our interactive map. Join the </span>
        <span className="text-pink-300 text-1xl font-bold">community</span>
        <span className="text-black text-1xl font-normal">, share info, and reunite lost pets with their owners while supporting adorable strays. Wagging tails and happy purrs await! </span>
      </div>


      <div className="w-[331px] h-[74px] left-[514px] top-[361px] absolute text-black text-[40px] font-black tracking-[8px]">(─‿‿─)</div>
      <div className="w-[78px] h-[25px] left-[1166.53px] top-[109px] absolute origin-top-left rotate-[8.12deg] text-center text-black text-8xl font-normal">🐾</div>
      </div>
    </>
  );
}
