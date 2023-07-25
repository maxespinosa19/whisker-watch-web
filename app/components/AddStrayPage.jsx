"use client"

import React, { useState } from "react";
const loadingSpinnerImg = '/images/cutecat.gif';

export default function AddAnimalPage() {
  const [tag, setTag] = useState("select");
  const [loading, setLoading] = useState(false);

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);  // just for display purposes
    }, 2000);
  };

  return (
    
    <>
  

    <div className="bg-gradient-to-b from-pink-100 to-pink-200 via-pink-300 w-full h-screen mt-0 pt-20 animate-gradient-y">
        <div className="flex flex-col max-w-md px-9 py-8 bg-white bg-opacity-50 rounded-lg shadow sm:px-6 md:px:8 lg:px-10 mx-auto pb-[6px]">
          <h1 className="text-center text-3xl">Add an Animal</h1>
          <div className="p-6 mt-8">
            <form className="add" onSubmit={handleSubmit}>
    

          <div className="flex flex-col mb-2 pb-3">
              <div className="relative">
                <select
                  className={`rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent ${
                    tag === "stray"
                    ? "text-blue-500"
                    : tag === "lost"
                    ? "text-red-700"
                    : tag === "tnr"
                    ? "text-green-700"
                    : tag === "help"
                    ? "text-red-500"
                    : "text-red-700"
                  }`}
                  value={tag}
                  onChange={handleTagChange}
                >
                  <option value="select">Please select tag</option>
                  <option value="stray">Stray</option>
                  <option value="lost">Lost</option>
                  <option value="tnr">TNR</option>
                  <option value="help">In Need of Help</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mb-2 pb-3">
              <div className=" relative">
                <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="Name" placeholder="Name" />
              </div>
            </div>

            <div className="flex flex-col mb-2 pb-3">
              <div className=" relative">
                <input type="text" className="rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="Image URL" placeholder="Image URL" />
              </div>
            </div>

            <div className="flex flex-col mb-2 pb-3">
              <div className="relative">
                <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" placeholder="Location Last Seen" name="Location" />
              </div>
            </div>

            <div className="flex flex-col mb-2 pb-3">
              <div className=" relative">
                <input type="text" className="rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="temperament" placeholder="Temperament" />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <div className=" relative">
                <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="Description" placeholder="Description" />
              </div>
            </div>
      
            <div className="flex w-full my-2 justify-center">
                <button
                  onClick=""
                  type="submit"
                  className="py-3 px-4 mt-[5px] bg-pink-500 hover:bg-pink-600 text-white w-[130px] display flex justify-center transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full"
                  disabled={loading} 
                  >
                  {loading ? (
                    <img  className= "transition ease-in-out 3s"src={loadingSpinnerImg} alt="Loading..." />
                  ) : (
                    "Add Animal"
                  )}
                </button>
              </div>

          </form>
        </div>
      </div>
      </div>
    
    </>
  )
}
