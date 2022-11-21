import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderMind from './HeaderMind'
import HeaderRight from './HeaderRight'
const HeaderContainer = () => {
  return (
    <div className='w-screen h-14 flex flex-row  items-center  justify-between  bg-[#242526] border-b 
    border-[#54545477]'>
      <HeaderLeft/>
      <HeaderMind/>
      <HeaderRight/>
    </div>
  )
}

export default HeaderContainer