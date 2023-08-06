"use client"
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'


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

        <div className="bg-pink-1 w-full h-full">
    <NavBar/>

          <h1 className="text-purple-900 font-sans text-5xl pt-[80px]  flex flex-row justify-center">Location Last Seen</h1>
          <h1 className="flex flex-row justify-center tracking-wide text-7xl text-pink-400">--------------</h1>
       
    {!location
      ? <>
      </>
      : <iframe
        width="95%"
        height="85%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/?q=${location}&output=embed`}
        className='mx-auto my-5'
      ></iframe>
    }
        </div>
       
       
  )
}


