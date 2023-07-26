"use client"
import React, { useEffect, useState } from 'react';

export default function SingleCard({ animalForms }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getSingleCard = async () => {
      try {
        const res = await fetch('http://127.0.0.1:5002/animalForms');
        const data = await res.json();
        setCards(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    getSingleCard();
  }, []);

  return (
    <>
      {cards.map((card, i) => (
        <section key={`single-card-${i}`} className="text-gray-600 body-font pt-10 border border-solid rounded-lg shadow-md">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full rounded-3xl bg-white bg-opacity-50 overflow-hidden shadow-md">
                  <img
                    className="lg:h-[300px] md:h-36 w-full object-cover object-center rounded-t-3xl"
                    src="/images/cat.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest font-medium  mb-3 bg-rose-500 text-white px-4 py-2 rounded-full inline-block">
                      TAG HERE
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
