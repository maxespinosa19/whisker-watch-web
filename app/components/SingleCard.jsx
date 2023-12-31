"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SingleCard() {
  const [cards, setCards] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const getSingleCard = async () => {
      try {
        const res = await fetch('https://whisker-watch-api.web.app/animalForms');
        const data = await res.json();
        setCards(data);
        setIsLoading(false); 
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    getSingleCard();
  }, []);



  const getTagColorClass = (tag) => {
    switch (tag) {
      case 'stray':
        return 'bg-blue-200';
      case 'lost':
        return 'bg-red-400';
      case 'tnr':
        return 'bg-green-500';
      case 'help':
        return 'bg-red-500';
      case 'safe':
        return 'bg-green-300';
      default:
        return 'bg-rose-400';
    }

    
  };
  

  return (
    <div className="grid mx-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[150px]">
      {isLoading ? ( 
        <>
          <SkeletonCard />  
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        cards.map((card, i) => (
          <section  key={`single-card-${i}`}>
            <div className="h-[350px] rounded-3xl w-full  mx-auto overflow-hidden shadow-md flex">
              <img
                className="lg:h-full md:h-full md: w-1/2 lg:w-3/4  max-w-[200px] min-w-[200px] object-cover rounded-tl-3xl rounded-bl-3xl"
                src={
                  card.imageURL ||
                  'https://firebasestorage.googleapis.com/v0/b/whisker-watch-api.appspot.com/o/photos%2Fno-image.gif?alt=media'
                }
                alt="blog"
              />
              <div className="bg-white w-full bg-opacity-50 p-4 sm:p-6">
                <h2
                  className={`tracking-widest font-medium mb-3 px-4 py-2 rounded-full inline-block ${getTagColorClass(
                    card.tag
                  )}`}
                >
                  {card.tag}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {card.name}
                </h1>
                <p className="leading-relaxed mb-3 text-gray-400">
                  <span className="font-light text-xl text-black">
                    Description:
                  </span>{' '}
                  {card.description}
                </p>


                 <p className="leading-relaxed mb-3 text-gray-400">
                <span className="font-light text-xl text-black">
                  Last Seen:
                </span>{' '}
                <Link
                  href={{
                    pathname: '/map',
                    query: {
                      address: card.address,
                      city: card.city,
                      state: card.state,
                      zip: card.zip,
                      location: card.location,
                    }, //passes info to the next page
                  }}
                >
              <span className="flex items-center">
                <h1 className='text-purple-600'>View on Map</h1>
                <img src="/images/favicon.png" className="w-[30px] mr-2 " />
                {/* You can adjust the margin (mr-2) to control the spacing between the image and the text */}
              </span>
            </Link>
          </p>



                
                <p className="leading-relaxed mb-3 text-gray-400">
                  <span className="font-light text-xl text-black ">
                    Temperament:{' '}
                  </span>
                  {card.temperament}
                </p>
                <div className="flex items-center flex-wrap"></div>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
}


const SkeletonCard = () => (
  <section>
    <div className="h-[350px] rounded-3xl w-full  mx-auto overflow-hidden shadow-md flex  animate-pulse">
      <div className="w-3/4 h-full bg-rose-200"></div>
      <div className="bg-white w-full bg-opacity-50 p-4 sm:p-6">
        <div className="w-1/2 h-4 bg-green-200 mb-4"></div>
        <div className="w-3/4 h-4 bg-green-200 mb-4"></div>
        <div className="w-3/4 h-4 bg-green-200 mb-4"></div>
        <div className="w-2/4 h-4 bg-green-200 mb-4"></div>
        <div className="w-2/4 h-4 bg-green-200 mb-4"></div>
        <img
        src="./images/catwalkt.gif"
        className="w-1/2"
      />
        
      </div>
    </div>
  </section>
);
