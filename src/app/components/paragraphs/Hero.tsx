import React from 'react'
import HeroLeft from '../sentences/HeroLeft'
import HeroRight from '../sentences/HeroRight'

function Hero() {
  return (
    <div className='flex gap-4'>
      <HeroLeft/>
      <HeroRight/>
    </div>
  )
}

export default Hero
