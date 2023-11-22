import React from 'react'
import DoodleSVG from '../words/DoodleSVG';
import UpFooter from '../sentences/UpFooter';
import DownFooter from '../sentences/DownFooter';

function Footer() {
  return (
    <div className='mt-16'>
      <div className="flex justify-center items-center gap-4 mt-12">
        <span className="text-3xl">love</span>
        <DoodleSVG/>
        <span className="text-3xl">found</span>
      </div>
      <div className="bg-green-800 flex items-center justify-center w-[90rem] h-[26.125rem] mt-12">
        <UpFooter/>
      </div>
    </div>
  );
}

export default Footer
