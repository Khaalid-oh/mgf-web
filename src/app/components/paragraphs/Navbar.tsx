import React from 'react'
import Logo from '../words/Logo'
import NavItems from '../sentences/NavItems'

function Navbar() {
  return (
    <div className='w-[90rem] h-[8rem] flex items-center ml-[16rem] bg-white gap-[4.31rem]'>
      <Logo/>
      <NavItems/>
    </div>
  )
}

export default Navbar
