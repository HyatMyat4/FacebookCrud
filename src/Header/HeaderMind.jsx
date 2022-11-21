import React from 'react'
import { Link } from 'react-router-dom'
const HeaderMind = () => {
  return (
  <div className='hidden sm:inline'> 
    <div className='flex flex-row items-center  w-[350px] h-[48px]  justify-between
    lg:w-[500px] cursor-pointer   select-none
    '>
         <Link to='/' className='w-[23%] h-[100%] hover:bg-[#3d3f40ec] rounded-md  flex flex-row items-center justify-center'>
        
           
            <i className="fa-solid fa-house text-xl  lg:text-[20px]  cursor-pointer
            "></i>            
        
        </Link>
        <Link to='/watch/Home' className='w-[23%] h-[100%]  hover:bg-[#3d3f40ec] rounded-md  flex flex-row items-center justify-center'>    
                    
            <i className="fa-solid fa-tv text-xl  lg:text-[20px]  cursor-pointer
            "></i>          
        
        </Link>     
        <Link to='/Music' className='w-[23%] h-[100%]  hover:bg-[#3d3f40ec] rounded-md  flex flex-row items-center justify-center'>
        <i class="fa-solid fa-music text-xl  lg:text-[20px]  cursor-pointer"></i>
        </Link> 
       
        <div className='w-[23%] h-[100%]  hover:bg-[#3d3f40ec] rounded-md  flex flex-row items-center justify-center'>
            <i className="fa-solid fa-gamepad text-xl lg:text-[20px]  cursor-pointer
            "></i>
        </div>        
    </div>
  </div>  
  )
}

export default HeaderMind