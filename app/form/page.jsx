"use client"
import { useState } from "react";

export default function startPool() {
  const [tag, setTag] = useState("select");

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col max-w-md px-4 py-8 mt-10 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto border-2 border-pink-300">

         
        <h1 className="text-center text-3xl">Add a Stray</h1>
        <div className="p-6 mt-8">
          <form className="add">

          <div className="flex flex-col mb-2">
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

            <div className="flex flex-col mb-2">
              <div className=" relative">
                <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="Name" placeholder="Name" />
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <div className=" relative">
                <input type="text" className="rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="temperament" placeholder="Temperament" />
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <div className="relative">
                <input type="email" id="create-account-email" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" placeholder="Location Last Seen" name="Location" />
              </div>
            </div>


            <div className="flex flex-col mb-2">
              <div className=" relative">
                <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="Description" placeholder="Description" />
              </div>
            </div>
      
            <div className="flex w-full my-4 justify-center">
              <button type="submit" className="py-2 px-4 bg-pink-300 hover:bg-[#8ae79a] text-white w-[120px] display flex justify-center transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full">
                Add Stray
              </button>
            </div>
           
          </form>
        </div>
      </div>
       <a href="/discover">
          <div className="flex w-full my-4 justify-center">
              <button type="submit" className="py-2 px-4 bg-pink-300 hover:bg-[#8ae79a] text-white w-[190px] display flex justify-center transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full">
                Back to Discover
              </button>
            </div>
            </a>
    </>
  )
}
