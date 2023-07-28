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
      location: e.target.location.value || "",
      temperament: e.target.temperament.value || "",
      description: e.target.description.value || "",
      tag
    };

    setLoading(true);

    fetch("https://whisker-watch-api.web.app/animalForms", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newAnimalCard),
    })
    .then(res => res.json())
    .then(() => {
      e.target.name.value = "";
      e.target.imageURL.value = "";
      e.target.location.value = "";
      e.target.temperament.value = "";
      e.target.description.value = "";
      e.target.tag.value = "";
      router.push("/discover");
      console.log(router)
    })
    .catch(alert)
    .then(() => setLoading(false));
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
    const selectedTag = event.target?.value || "select";
    setTag(selectedTag);

  };

  const handleFile = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])



  }



  return (
    <>
      <div className="bg-gradient-to-b from-pink-100 to-pink-200 via-pink-300 w-full h-screen mt-0 pt-20 animate-gradient-y">
        <div className="flex flex-col max-w-md px-9 py-8 bg-white bg-opacity-50 rounded-lg shadow sm:px-6 md:px:8 lg:px-10 mx-auto pb-[6px]">
          <h1 className="text-center text-rose-800 text-3xl">Add an Animal</h1>
          <div className="p-6 mt-8">
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
                  </select>
                </div>
              </div>

              <div className="flex flex-col mb-2 pb-3">
                <div className="relative">
                  <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="name" placeholder="name" />
                </div>
              </div>

              <div className="flex flex-col mb-2 pb-3">
                <div className="relative">
                  <input type="file" accept="image/*"  onChange={handleFile}className="rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="imageURL" placeholder="imageURL"   />
                  {file &&
                <div className="w-[20px] rounded">
              <img src = {URL.createObjectURL(file)} className="object-cover"/>
             </div>
                }
               
              
                </div>
              </div>
              

              <div className="flex flex-col mb-2 pb-3">
                <div className="relative">
                  <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" placeholder="Location Last Seen" name="location" />
                </div>
              </div>

              <div className="flex flex-col mb-2 pb-3">
                <div className=" relative">
                  <input type="text" className="rounded-lg border-transparent flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="temperament" placeholder="temperament" />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <div className=" relative">
                  <input type="text" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#8ae79a] focus:border-transparent" name="description" placeholder="description" />
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
