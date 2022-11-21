import React from 'react'
import MuiscLeftBar from './MuiscLeftBar'
import  MusicRight from './MusicRight'
import MusicHeader from './MusicHeader'
import MusicPlayer from './MusicPlayer'
import { OpenCLoseD } from './servicesApi/PlayerSlice'
import { useDispatch , useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import SongDetails from './SongDetails'
import { Outlet } from 'react-router-dom'
const MusicMain = () => {
const CLoseD =useSelector(OpenCLoseD)
console.log(CLoseD , 'is lll')
  const { activeSong } = useSelector((state) => state.player);
  return (
    <div className='w-full h-auto bg-gradient-to-br from-black to-[black]'>  
       
        <MusicHeader /> 
        <div id='MusicBarS' className=' w-full h-[87vh]  flex flex-row  flex-wrap  xl:flex-nowrap overflow-y-scroll   '>
         
          <MuiscLeftBar />      
          
          <MusicRight />
          <Routes>
            
          <Route path="/songs/:songid" element={<SongDetails />} />

        </Routes>
       
        </div> 
        {activeSong?.title && (
        <div className={` ${CLoseD ? ''  : 'hidden' }  absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg  z-10`}>
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}

export default MusicMain