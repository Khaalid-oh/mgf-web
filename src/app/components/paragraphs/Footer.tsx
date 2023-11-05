import React from 'react'
import DoodleSVG from '../words/DoodleSVG';

function Footer() {
  return (
    <div className='mt-16'>
      <div className="flex justify-center items-center gap-4 mt-12">
        <span className="text-3xl">love</span>
        <DoodleSVG/>
        <span className="text-3xl">found</span>
      </div>
      <div className="bg-green-800 w-[90rem] h-[26.125rem] mt-12"></div>
    </div>
  );
}

export default Footer
