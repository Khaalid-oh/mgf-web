'use client'

import React from 'react'
import Navbar from './components/paragraphs/Navbar'
import HeroRight from './components/sentences/HeroRight'

function page() {
  return (
    <div className='font-[Exo_2] flex flex-col gap-4 items-center justify-center w-[90rem] mx-auto bg-white'>
      <Navbar/>
      <HeroRight/>
    </div>
  )
}

export default page
