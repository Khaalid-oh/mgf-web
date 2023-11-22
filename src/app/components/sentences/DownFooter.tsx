import React from 'react'
import LogoMark from '../words/LogoMark'
import PipeSVG from '../words/PipeSVG'
import MetaWSVG from '../words/MetaW'
import IgWSVG from '../words/IGWSVG'
import LinkedInWSVG from '../words/LinkedInW'
import TwitterWSVG from '../words/TwitterW'

function DownFooter() {
  return (
    <div className='text-white font-thin gap-4 flex justify-between'>
      <LogoMark/>
      <div className='flex gap-8'>
        <div className='flex gap-8'>
          <span>Privacy Policy</span>
          <span>Contact Us</span>
        </div>
        <PipeSVG/>
        <div className='flex gap-8'>
          <MetaWSVG/>
          <IgWSVG/>
          <LinkedInWSVG/>
          <TwitterWSVG/>
        </div>
      </div>
    </div>
  )
}

export default DownFooter
