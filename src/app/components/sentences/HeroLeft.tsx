import React from 'react'
import ArrowSVG from '../words/ArrowSVG'
import MetaSVG from '../words/MetaSVG'
import IgSVG from '../words/IgSVG'
import TwitterSVG from '../words/TwitterSVG'

function HeroLeft() {
  return (
    <div className="flex flex-col justify-end items-center h-[38.5rem] w-[8.5rem] gap-6 py-2">
      <div className='flex flex-col gap-6 pb-20'>
        <div className="bg-gray-200 h-2 w-2 rounded-full"></div>
        <div className="bg-green-500 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-200 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-200 h-2 w-2 rounded-full"></div>
      </div>
      <div className="bg-green-700 p-4 rounded-full">
        <ArrowSVG />
      </div>
      <span className="text-center">DISCOVER FOUNDATION</span>
      <div className="flex gap-9 pt-24">
        <MetaSVG />
        <IgSVG />
        <TwitterSVG />
      </div>
    </div>
  );
}

export default HeroLeft
