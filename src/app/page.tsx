'use client'

import React from 'react'
import Navbar from './components/paragraphs/Navbar'
import FirstSection from './components/paragraphs/FirstSection'
import Hero from './components/paragraphs/Hero'

function page() {
  return (
    <div className='font-[Exo_2] flex flex-col gap-4 items-center justify-start w-[90rem] h-[173.75rem] bg-white'>
      <Navbar/>
      <Hero/>
      <FirstSection/>
    </div>
  )
}

export default page
