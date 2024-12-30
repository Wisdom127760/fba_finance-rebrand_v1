"use client";
import HeroSection from '../components/HeroSection'
import NavBar from '../components/Nav/NavBar'
import Image from 'next/image'
import backgroundImage from '../public/assets/img/Hero_Background.webp'

import React, { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false); // Hide loader once the page is fully loaded
    };

    if (document.readyState === "complete") {
      handlePageLoad(); // If the page is already loaded
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (isLoading) {
    // Render the loader while the page is loading
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <img src="/assets/icons/logo_coloured_&_black.svg" alt="Loading..." className="animate-pulse w-24 h-24" />
      </div>
    );
  }

  return (
    <main className='w-full max-w-[1273px] max-md:mt-4 max-md:max-w-full'>
      {/* Section wrapping NavBar and HeroSection */}
      <section className='relative h-screen w-full'>
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt='Hero Background Image'
          priority // Ensures image loads faster
          className='bgHero'
          unoptimized={true} // Bypasses Next.js optimization
        />
        {/* Content overlay */}
        <div className='absolute inset-0'>
          <NavBar />
          <HeroSection />
        </div>

      </section>
    </main>
  )
}
