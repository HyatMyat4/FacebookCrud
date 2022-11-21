import React from 'react'
import  thumbs from '../img/Thumbs.gif'
import  Love from '../img/Love.gif'
import  Care from '../img/Care.gif'
import  Haha from '../img/Haha.gif'
import  Wow from '../img/Wow.gif'
import  Sad from '../img/Sad.gif'
import  Angry from '../img/Angry.gif'
const WatchPostFooter = ({MovieView , comment , reaction}) => {
  return (
    <div className='w-full h-[50px] flex flex-row  items-center justify-between bg-[#242526] '>
        <div className='w-[auto] sm:w-[280px] h-[40px] flex flex-row items-center '>
        <div   id='Likethumbs' className='w-[32%] h-[34px] flex  items-center justify-center  hover:bg-[#7c78784b]   rounded cursor-pointer'>
       <div id='reaction' className=' absolute  hidden left-0 transform hover:translate-y-[-40px] hover:opacity-[1] opacity-[0]  transition duration-3000 ease-in   ] '>
        <div  className='       cursor-pointer flex flex-row items-center justify-between w-[300px] h-[40px] bg-[white] rounded-full text-[white] px-[5px]'>
            <div className='mr-[12px] ' id='Like'>
                <img src={thumbs} className='w-[50px] hover:w-[85px]'  />
                <span id='ltext' className='absolute top-[-25px] bg-black px-[6px] text-[13px] font-bold rounded-[15px] transition-all opacity-0'>Like</span>
            </div>
            <div className='mr-[12px]' id='Like' >
                <img src={Love} className='rounded-full w-[50px] hover:w-[85px]'/>
                <span id='ltext'  className='absolute top-[-25px] opacity-0 bg-black px-[6px] text-[13px] font-bold rounded-[15px]'>Love</span>
            </div>
            <div  id='Like' >
                <img src={Care} className='rounded-full w-[50px] hover:w-[85px]' />
                <span id='ltext' className='absolute opacity-0 top-[-25px] bg-black px-[6px] text-[13px] font-bold rounded-[15px] '>Care</span>
            </div>
            <div id='Like' >
                <img src={Haha} className='rounded-full w-[80px] translate-x-[+9px] hover:w-[140px]' />
                <span id='ltext' className='absolute top-[-25px] opacity-0 ml-[15px] bg-black px-[6px] text-[13px] font-bold rounded-[15px]'>Haha</span>
            </div>
            <div  id='Like' >
                <img src={Wow} className='w-[50px]  translate-x-[+12px] hover:w-[85px] ' />
                <span id='ltext' className='absolute top-[-25px] opacity-0 ml-[8px] bg-black px-[6px] text-[13px] font-bold rounded-[15px]'>Wow</span>
            </div>
            <div id='Like' >
                <img src={Sad} className='rounded-full w-[80px]  hover:w-[140px] translate-x-[+15px] '/>
                <span id='ltext' className='absolute top-[-25px] opacity-0 ml-[23px] bg-black px-[6px] text-[13px] font-bold rounded-[15px]'>Sad</span>
            </div>
            <div id='Like'>
                <img src={Angry} className='w-[80px] translate-x-[+5px]  hover:w-[140px] ' />
                <span id='ltext' className='absolute top-[-25px]  opacity-0 ml-[8px] bg-black px-[6px] text-[13px] font-bold rounded-[15px]'>Anger</span>
            </div>
        </div>
        </div> 
            <div className=' w-[20%] sm:w-[25%] h-[34px] flex flex-row items-center mr-[5px]  justify-center rounded hover:bg-[#3A3B3C] ml-[15px] cursor-pointer  '>
                <i class="fa-regular fa-thumbs-up text-[20px] text-gray-100 mr-[5px]"></i>
                <span className=' text-[0px] sm:text-[14px]'>Like</span>
            </div>
            </div>
            <div className='w-[30%] sm:w-[35%] h-[34px] flex flex-row items-center mr-[5px]  justify-center rounded hover:bg-[#3A3B3C] cursor-pointer '>
                <i class="fa-regular fa-comment text-[20px] text-gray-100 mr-[5px]"></i>
                <span className=' text-[0px] sm:text-[14px]'>Comment</span>
            </div>
            <div className=' w-[25%] sm:w-[30%] h-[34px] flex flex-row items-center  justify-center rounded hover:bg-[#3A3B3C] cursor-pointer '>
                <i class="fa-solid fa-share text-[18px] text-gray-100  mr-[5px] "></i>
                <span className='text-[0px] sm:text-[14px]'>Share</span>
            </div>
            
        </div>
        <div>
            <span className='mr-[10px] text-[13px] hover:underline cursor-pointer '>
               <i class="fa-solid fa-thumbs-up p-[5px] bg-[#0376f2]  text-[11px] rounded-full translate-x-[] "></i>
               <i class="fa-solid fa-heart p-[5px]  bg-[#EC2B4B]  rounded-full text-[11px] translate-x-[-2px]"></i>
               <i class="fa-solid fa-face-laugh-squint text-[#F9B63C]  rounded-full text-[19px] translate-x-[-4px] translate-y-[+3px]"></i>
               {reaction}M <span>others</span>
            </span>
            <span className='text-[13px] hover:underline mr-[5px] cursor-pointer hidden md:inline'>{comment} comments . </span>
            <span className='text-[13px] mr-[10px] cursor-pointer'>{Math.floor(MovieView)}K views</span>
        </div>
    </div>
  )
}

export default WatchPostFooter