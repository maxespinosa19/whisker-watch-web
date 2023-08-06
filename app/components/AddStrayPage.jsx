"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
import { initializeApp } from "firebase/app";
const loadingSpinnerImg = '/images/cutecat.gif';


export default function AddAnimalPage() {
  const [file, setFile] = useState()
  const [uploadedFile, setUploadedFile] = useState()
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addAnimalCard = (e) => {
    e.preventDefault();
    let url = ""

    if (file){
    const app = initializeApp(firebaseConfig); 
    const storage = getStorage(app) 
    const filename = file.name 
    const imageRef = ref(storage, 'photos/' + filename)
    url = `https://firebasestorage.googleapis.com/v0/b/whisker-watch-api.appspot.com/o/photos%2F${encodeURI(filename)}?alt=media`
    uploadBytes(imageRef, file) 
    .catch(alert)
    setUploadedFile(url)
}
 
    const newAnimalCard = {
      name: e.target.name.value || "",
      imageURL: url || "", 
      location: location || "",
      temperament: e.target.temperament.value || "",
      description: e.target.description.value || "",
      tag,
      address: e.target.address.value || "",
      city: e.target.city.value || "",
      state: e.target.state.value || "",
      zip: e.target.zip.value || "",
    };

    setLoading(true); // move to top 

    fetch("https://whisker-watch-api.web.app/animalForms", { // one
      method: 'POST', 
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newAnimalCard),
    }) // command
    .then(res => res.json()) //unneeded
    .then(() => {
      e.target.name.value = "";
      e.target.imageURL.value = "";
      e.target.temperament.value = "";
      setLocation("");
      e.target.description.value = "";
      e.target.tag.value = "";
      router.push("/discover");
      console.log(router)
    })
    .catch(alert)
    .finally(() => setLoading(false)); //.finally good
    console.log(newAnimalCard);
  };
  
  const firebaseConfig = {
    apiKey: "AIzaSyCO2LVRNnGZJR-f1Id79oFrkzw3ZB4I3No",
    authDomain: "whisker-watch-api.firebaseapp.com",
    projectId: "whisker-watch-api",
    storageBucket: "whisker-watch-api.appspot.com",
    messagingSenderId: "267334187889",
    appId: "1:267334187889:web:cf86a53f6c044479f994d0"
  };


  const [tag, setTag] = useState("select");

  const handleTagChange = (event) => {
    const selectedTag = event.target?.value || "select"; // ? to ensure code isnt null or undefined
    setTag(selectedTag);

  };

  const handleFile = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  const [location, setLocation] = useState('')

  const getLocationCoordinates = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`@${position.coords.latitude},${position.coords.longitude}`)
        console.log(`@${position.coords.latitude},${position.coords.longitude}`)
      });
    } else {
      return alert("Not supported by this browser.")
    }
  }

  return (
    <>
      <div className="bg-gradient-to-b from-pink-100 to-pink-200 via-pink-300 w-full  mt-0 pt-16 animate-gradient-y">
        <div className="flex flex-col max-w-md px-4 py-4 bg-white bg-opacity-50 rounded-lg shadow sm:px-6 md:px:8 lg:px-10 mx-auto pb-[6px]">
          <h1 className="text-center text-rose-800 text-3xl">Add an Animal</h1>
          <div className="p-2 mt-8">
            <form className="add" onSubmit={addAnimalCard}>
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
                              : tag === "safe"
                                ? "text-green-400"
                                : "text-red-700"
                    }`}
                    value={tag}
                    onChange={handleTagChange}
                    name="tag"
                  >
                    <option value="select">Please select tag</option>
                    <option value="stray">Stray</option>
                    <option value="lost">Lost</option>
                    <option value="tnr">TNR</option>
                    <option value="help">In Need of Help</option>
                    <option value="safe">Safe</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col mb-2 pb-3">
                <div className="relative">
                  <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="name" placeholder="Name" />
                </div>
              </div>

              <div className="flex flex-col mb-2 pb-3">
                <div className="relative">
                  <input type="file" accept="image/*" onChange={handleFile} className="rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="imageURL" placeholder="imageURL" />
                  {file && (
                    <div className="w-[20px] rounded absolute right-4 top-4">
                      <img src={URL.createObjectURL(file)} className="object-cover" />
                    </div>
                  )}
                </div>
              </div>

              {/* <div className="flex flex-col mb-2 pb-3">
                <div className="relative">
                  <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" placeholder="Location Last Seen" name="location" />
                </div>
              </div> */}

              <h2 className="flex flex-row justify-center text-pink-400 font-bold pb-3" >- Location last seen -</h2>

              <div className="flex flex-row mb-2 pb-3 justify-center ">
                <div className="relative">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent"
                    name="address"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div className="flex flex-row mb-2 pb-3 w-3/4 mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    className="rounded-lg border-transparent pr-4 flex-1 appearance-none border border-gray-300 w-full py-2 px-4  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent"
                    name="city"
                    placeholder="City"
                  />
                </div>
                </div>

                <div className="flex flex-row mb-2 pb-3 w-3/4 mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    className="rounded-lg border-transparent pr-4 flex-1 appearance-none border border-gray-300 w-full py-2 px-4  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent"
                    name="state"
                    placeholder="State"
                  />
                </div>


                <div className="relative ml-4">
                  <input
                    type="text"
                    className="rounded-lg border-transparent pr-4 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent"
                    name="zip"
                    placeholder="Zip Code"
                  />
                </div>
              </div>

              <h2 className="flex flex-row justify-center text-pink-400 font-bold pb-3" > - or - </h2>

              <div className="flex flex-row mb-2 pb-3 w-3/4 mx-auto justify-center">
                <div className="relative">
                  <button
                    type="button" 
                    className="rounded-lg bg-pink-500 hover:bg-pink-400  text-white border-transparent pr-4 flex-1 appearance-none border border-gray-300 w-full py-2 px-4  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent"
                    onClick={getLocationCoordinates}
                  >
                    Use my current location
                  </button>
                </div>
              </div>


              
              <div className="flex flex-col mb-2 pb-3">
                <div className=" relative">
                  <input type="text" className="rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="temperament" placeholder="Temperament" />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <div className=" relative">
                  <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="description" placeholder="Description" />
                </div>
              </div>

              <div className="flex w-full my-2 justify-center">
                <button
                  type="submit"
                  className="py-3 px-4 mt-[5px] bg-pink-500 hover:bg-pink-600 text-white w-[130px] display flex justify-center transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full"
                  disabled={loading}
                >
                  {loading ? (
                    <img className="transition ease-in-out 3s" src={loadingSpinnerImg} alt="Loading..." />
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
  );
}