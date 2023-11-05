import React from 'react'
import Image from 'next/image';
import image from '../words/Image-1.png'
function FirstSection() {
  return (
    <div className="flex flex-col items-center bg-green-100 rounded-lg h-[26.6875rem] w-[77.5rem] gap-6 mt-6">
      <p className="font-bold text-3xl w-[48.375rem] mt-[2.94rem]">
        Wolfram Syndrome, also known as DIDMOAD, is an inherited genetic
        disorder in most cases it is caused by a mutation of the WFS1 gene.
      </p>

      <div className="flex gap-16">
        <div className="flex flex-col gap-8">
          <p className="w-[22.9375rem]">
            Wolfram syndrome is a genetic disease, Disease causing variants in
            the following gene(s) are known to cause this disease: WFS1, CISD2​
          </p>
          <button className="border-2 border-green-700 px-6 py-2 rounded-md text-green-700 w-[8.5625rem] hover:bg-green-200">
            Read More
          </button>
        </div>
        <div className="border-2 border-green-700 rounded-md w-[21.4735rem] h-[19.375rem] relative mt-4">
          <Image className='absolute left-[1.19rem] bottom-[1.06rem]' src={image} height={310} width={343} alt='Five curious happy kids'/>
        </div>
      </div>
    </div>
  );
}

export default FirstSection
