import React from 'react'

const HeaderLeft = () => {
  return (
    <div className='w-auto ml-[0px]  flex flex-row justify-around items-center 
    lg:ml-[10px] lg:w-[320px]
    '>
    <i className="fa-brands fa-facebook-f text-3xl border  border-blue-500 px-3 pt-1.5 bg-[#0E8CF1]
    text-white rounded-full pb-0 mx-[6px] lg:mx-0 cursor-pointer
    "></i>  

      <div className=' rounded-full w-auto h-[42px] flex flex-row items-center bg-[#434345bb]
      lg:w-[260px] cursor-pointer
      '>
      <i className="fa-solid fa-magnifying-glass px-[14px]  text-gray-300 "></i>
          <input
            type={'text'}
            className=' h-full bg-transparent outline-none w-full  hidden lg:inline text-sm  text-gray-300' 
            placeholder='Search Facebook'       
          />
      </div>
  </div>
  )
}

export default HeaderLeft