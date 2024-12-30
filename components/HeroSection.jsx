"use client";

import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starElements = [];
      for (let i = 0; i < 100; i++) {
        const xPosition = Math.random() * 100; // Percentage for CSS positioning
        const yPosition = Math.random() * 100;
        const starType = Math.floor(Math.random() * 3) + 1;

        starElements.push(
          <div
            key={i}
            className={`star star-type${starType}`}
            style={{
              top: `${yPosition}%`,
              left: `${xPosition}%`,
            }}
          />
        );
      }
      setStars(starElements);
    };

    generateStars();
  }, []);

  return (
    <div className='z-10 galaxy flex flex-col items-center pb-32 pt-20 text-center'>
      {/* Render Stars */}
      {stars}

      <h1 className='mb-8 max-w-4xl font-Grotesk text-6xl text-hero_header font-medium leading-tight tracking-tighter text-white'>
        Building Businesses,
        <br />
        One Pool at a Time
      </h1>

      <p className='mx-auto mb-12 max-w-3xl font-display text-sub_header leading-9 text-gray-300'>
        Discover alternative funding solutions tailored for your business needs.
        Save smarter for long-term projects while accessing flexible,
        cost-effective financing.
      </p>

      <button className='button-icon heroBtn px-34 inline-flex items-center rounded-lg bg-blue-600 py-4 font-display text-base font-medium text-white transition-colors hover:bg-blue-700'>
        Start Building Today
        <svg
          width='70'
          height='48'
          viewBox='0 0 70 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.2104 12C10.2104 5.37258 15.583 0 22.2104 0H46.2104C52.8379 0 58.2104 5.37258 58.2104 12V36C58.2104 42.6274 52.8379 48 46.2104 48H22.2104C15.583 48 10.2104 42.6274 10.2104 36V12Z'
            fill='white'
          />
          <path
            d='M39.113 22.8686L33.8442 17.5998L35.4439 16L43.4439 24L35.4439 32L33.8442 30.4002L39.113 25.1314H28.736V22.8686H39.113ZM24.2104 31.9197V16.0803H26.4732V31.9197H24.2104Z'
            fill='#3D51F4'
          />
        </svg>
      </button>

      <div className='relative mt-16 w-full'>
        {/* Placeholder for future content */}
      </div>
    </div>
  );
};

export default HeroSection;