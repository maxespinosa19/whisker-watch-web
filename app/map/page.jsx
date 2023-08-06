"use client"
import { useState, useEffect } from 'react'


export default function Home({searchParams}) {
  const data = searchParams
  console.log(data)
  const [location, setLocation] = useState(data?.location || "")

  useEffect(() => { 
    if (location) return

    const address = data?.address?.trim().replace(/\s/g, '+')
    const city = data?.city?.trim().replace(/\s/g, '+')
    const state = data?.state?.trim().replace(/\s/g, '+')
    const zip = data?.zip?.trim().replace(/\s/g, '+')
    const fullAddress = `${address},${city},${state},${zip}`
    setLocation(fullAddress)

  }, [])
    


 
  
  return (
        <div className="bg-purple-800 w-full h-full">
          <h1 className="text-green-300 text-4xl pt-5 flex flex-row justify-center">Location Last Seen</h1>
          <h1 className="flex flex-row justify-center text-6xl text-pink-200">---------------</h1>
     
    
    {!location
      ? <>
      </>
      : <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/?q=${location}&output=embed`}
      ></iframe>
    }
        
        </div>
  )
}


