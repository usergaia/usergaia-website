import React from 'react';

export default function Test() {
  return (
    <>
      <div className="mx-auto grid w-full grid-cols-2 gap-0">
        <div
          className="relative overflow-hidden rounded-full border-8 shadow-lg"
          style={{
            width: '19rem', // Change this to resize the frame
            height: '19rem',
            padding: '0em', // Outer padding to create outline effect
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
            test
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="section-title-h1 mt-5">
            <span className="section-title-span">Behind the Code</span>
          </h1>
          <p className="section-desc mt-6 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            assumenda iure sit incidunt voluptatem voluptas autem vel, ab
            deleniti nulla doloribus natus eaque ipsam. Natus ex magni dolorum
            omnis quae!
          </p>
        </div>
      </div>
    </>
  );
}
