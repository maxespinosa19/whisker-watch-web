"use client"
import { useEffect, useState } from 'react';

export default function SingleCard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getSingleCard = async () => {
      try {
        const res = await fetch('https://whisker-watch-api.web.app/animalForms');
        const data = await res.json();
        setCards(data);
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
        return 'bg-red-500'; 
      case 'tnr':
        return 'bg-green-500'; 
      case 'help':
        return 'bg-red-500'; 
      default:
        return 'bg-rose-500'; 
    }
  };

  return (
    <>
      {cards.map((card, i) => (
        <section key={`single-card-${i}`} className="text-gray-600 body-font pt-[150px] border border-solid rounded-lg flex flex-row ">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-3xl bg-white bg-opacity-50 overflow-hidden shadow-md">
                  <img
                    className="lg:h-[300px] md:h-36 w-full object-cover object-center rounded-t-3xl"
                    src={card.imageURL}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className={`tracking-widest font-medium mb-3 px-4 py-2 rounded-full inline-block ${getTagColorClass(card.tag)}`}>
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
                      <span className="font-light text-xl text-black">
                        Temperament:{' '}
                      </span>
                     {card.temperament}
                    </p>
                    <div className="flex items-center flex-wrap">
                      {/* Add any additional elements here if needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
