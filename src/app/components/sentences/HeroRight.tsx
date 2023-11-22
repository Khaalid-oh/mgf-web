import React from 'react'
import HeroSVG from '../words/HeroSVG';



function HeroRight() {
  return (
    <div className=" relative flex flex-col w-[66.625rem] gap-[1.06rem]">
      <span className="flex w-[8.5rem] items-start justify-center relative before:absolute before:content-[''] before:w-3 before:h-[2px] before:bg-green-600 before:left-0 before:top-4">
        OUR MISSION
      </span>
      <h1 className="w-[70%] text-[2.5rem] leading-[2.8125rem]">
        We decided to carry the flag for rare diseases in Saudi Arabia
      </h1>
      <div className='block absolute -top-6'>
      <HeroSVG/>
      </div>
    </div>
  );``
}

export default HeroRight
