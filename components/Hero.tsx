import React from 'react';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

function Hero() {
  return (
    <div className="pb-20 pt-36">

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="magenta"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white
      dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
      flex items-center justify-center top-0 left-0 absolute">

        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none flex
        items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />

      </div>


      <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] flex flex-col items-center
        justify-center md:max-w-2xl lg:max-w-[60vw]'>
              <h2 className='uppercase text-blue-100 max-w-80 text-xs
          tracking-widest'>
                  Dynamic Web Magic with Next.js
              </h2>


              <TextGenerateEffect
                  className='text-center text-[40px] md:text-5xl lg:text-6xl'
                  words='Transforming Conscepts into
            Seamless Experiences'

              />


              <p className="text-center text-xs md:text-lg lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4 ">
                  Hey there 👋! I'm{' '}
                  <span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500 animate-gradient-x">
                    Keenan Rahmanda
                  </span>,{' '}
                  a{' '}
                  <span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient-x">
                    Next.js Developer
                  </span>{' '}
                  from <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white-100 animate-gradient-x">❤️️Indonesia.</span>❤️
              </p>


          </div>
      </div>
    </div>
  );
}

export default Hero;
