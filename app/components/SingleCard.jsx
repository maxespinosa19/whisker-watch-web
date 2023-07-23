export default function singleCard(){
  return(
   

    <section className="text-gray-600 body-font pt-10 border border-solid ">
    <div className="container px-5 py-24 mx-auto ">
      <div className="flex flex-wrap -m-4" >
        <div className="p-4 md:w-1/3 ">
          <div className="h-full border-[5px] border-rose-300  rounded-xl  bg-slate-50 bg-opacity-50 overflow-hidden">
            <img className="lg:h-[300px] md:h-36 w-full object-cover object-center" src="/images/cat.jpg" alt="blog"/>
            <div className="p-9">
              <h2 className="tracking-widest  title-font font-medium text-slate-100 mb-1 border-2 border-rose-500 bg-rose-500 w-[100px] text-l rounded-full">TAG HERE</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Name</h1>
              <p className="leading-relaxed mb-3"><span className="font-bold text-xl text-pink-500">Description:</span> Gray and White shorthaired cat </p>
              <p className="leading-relaxed mb-3"><span className="font-bold text-xl text-green-400">Last Seen:</span> Behind 7/11 at 123 Main Street </p> 
              {/* ^^this is a just for now feature, planning on using maps */}
              <p className="leading-relaxed mb-3"><span className="font-bold text-xl text-red-500 ">Temperament: </span>Calm </p>
              <div className="flex items-center flex-wrap ">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}