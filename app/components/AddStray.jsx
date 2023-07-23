"use client"

const AddStrayButton = () => {
  return (
    <div className="w-full h-[59px] left-0 top-[59px] absolute bg-white bg-opacity-60">
   
    <button
      className="fixed top-[68px] right-4 px-4 py-2 bg-[#8ae79a] text-white font-bold rounded-md"
      onClick={() => {
     
        console.log("button works");
      }}
    >
      Add Stray
    </button>
    </div>
  );
};

export default AddStrayButton;
