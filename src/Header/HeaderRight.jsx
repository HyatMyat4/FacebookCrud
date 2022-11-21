import React from 'react'
import Profail from '../img/Profail.png'
import { useDispatch } from 'react-redux'
import { SideBarOpenloseEngin } from  '../watch/services/CouterMovieSlice'
const HeaderRight = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex flex-row items-center  w-[auto] h-[50px]  justify-between'>
        <div onClick={()  => dispatch(SideBarOpenloseEngin(false))} >
            <i className="fa-solid fa-layer-group text-xl  py-[6px] px-[9px] 
            bg-[#6966668d] rounded-full mr-[8px] hover:bg-[#5e6162ec] cursor-pointer
            "></i>
            
        </div>
        <div>
            <i className="fa-brands fa-facebook-messenger text-xl  py-[6px] px-[10px] 
            bg-[#6966668d] rounded-full mr-[8px] hover:bg-[#5e6162ec] cursor-pointer
            "></i>
        </div>
        <div>
            <i className="fa-solid fa-bell text-xl py-[6px] px-[11px] 
            bg-[#6966668d] rounded-full mr-[8px] hover:bg-[#5e6162ec] cursor-pointer
            "></i>
        </div>
        <div>
            <img src={Profail}
                className='w-[40px] h-auto rounded-full mr-[18px] cursor-pointer' 
            />
        </div>
    </div>
  )
}

export default HeaderRight