"use client"
import { useEffect, useState } from 'react';

export default function SingleCard() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const getSingleCard = async () => {
      try {
        const res = await fetch('https://whisker-watch-api.web.app/animalForms');
        const data = await res.json();
        setCards(data);
        setIsLoading(false); // Set isLoading to false once data is fetched
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
        return 'bg-rose-500';
    }
  };

  return (
    <div className="grid mx-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
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
          <section key={`single-card-${i}`}>
            <div className="h-[300px] rounded-3xl w-full  mx-auto overflow-hidden shadow-md flex mt-[150px]">
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
                  {card.location}
                </p>
                {/* ^^this is a just for now feature, planning on using maps */}
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
    <div className="h-[300px] rounded-3xl w-full  mx-auto overflow-hidden shadow-md flex mt-[150px] animate-pulse">
      <div className="w-3/4 h-full bg-rose-200"></div>
      <div className="bg-white w-full bg-opacity-50 p-4 sm:p-6">
        <div className="w-1/2 h-4 bg-green-200 mb-4"></div>
        <div className="w-3/4 h-4 bg-green-200 mb-4"></div>
        <div className="w-3/4 h-4 bg-green-200 mb-4"></div>
        <div className="w-2/4 h-4 bg-green-200 mb-4"></div>
        <div className="w-2/4 h-4 bg-green-200 mb-4"></div>
      </div>
    </div>
  </section>
);
