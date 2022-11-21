import React from 'react'
import LeftWatch from './LeftWatch'
import { Outlet } from 'react-router-dom';


const WatchContainer = () => {

  

  

  return (
    <div className='w-[100%] h-[100vh] bg-[#000000] flex flxe-row    '>
         <LeftWatch/>
        <Outlet/>         
      
        
    </div>
  )
}

export default WatchContainer