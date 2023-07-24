import React from 'react';

export default function SingleCard() {
  return (
    <section className="text-gray-600 body-font pt-10 border border-solid rounded-lg shadow-md">
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
                  Name
                </h1>
                <p className="leading-relaxed mb-3 text-gray-400">
                  <span className="font-light text-xl text-black">
                    Description:
                  </span>{' '}
                  Gray and White shorthaired cat
                </p>
                <p className="leading-relaxed mb-3 text-gray-400">
                  <span className="font-light text-xl text-black">
                    Last Seen:
                  </span>{' '}
                  Behind 7/11 at 123 Main Street
                </p>
                {/* ^^this is a just for now feature, planning on using maps */}
                <p className="leading-relaxed mb-3 text-gray-400">
                  <span className="font-light text-xl text-black">
                    Temperament:{' '}
                  </span>
                  Calm
                </p>
                <div className="flex items-center flex-wrap">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
