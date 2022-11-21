import React from 'react'
import { Outlet } from 'react-router-dom'
import WatchPost from './WatchPost'
import { sub } from "date-fns"
import { parseISO , formatDistanceToNow } from 'date-fns'
const RightWatch = () => {
  let min = 1;
  let timestamp = sub(new Date(), { minutes: min++ }).toISOString();
  const date = parseISO(timestamp)
  const timePeriod = formatDistanceToNow(date)

 let timeAgo = `${timePeriod} ago`
  
  return (

    <div className=' w-[100%] sm:w-[81%] h-[100%]  pb-[30px]   sm:m-auto '   >
     {/* <div className='max-w-[900px] h-[160px] bg-[#242526] m-auto mt-[10px] rounded-[8px] '>
          <span className='w-full h-[40px] translate-y-[+8px] text-[20px] font-bold ml-[50px] mt-[10px] flex flex-row items-center'>New videos for you</span>
        <div className='w-full h-[110px]  flex flex-row items-center justify-around '>
              <div className='w-[48%] h-[80px] flex flex-row items-center hover:bg-[#323435] rounded-[5px] cursor-pointer '>
                <img src='https://i.pinimg.com/originals/4e/b3/59/4eb359766faf2364a099b03879b4d181.jpg' className='w-[50px] sm:w-[60px] h-auto rounded-full mr-[10px] ml-[15px] '/>
              <div className='flex flex-col'> 
               <span className='text-[13px] sm:text-[17px] '>New Video From Replubic of Movie </span>
                <span className='text-[14px] text-blue-500 font-bold'><i className="fa-solid fa-circle text-[9px] mr-[5px] "></i>{timeAgo} </span>
              </div>  
              </div>
              <div className='w-[48%] h-[80px] flex flex-row items-center  hover:bg-[#323435] rounded-[5px] cursor-pointer '>
                <img src='https://i.pinimg.com/originals/4e/b3/59/4eb359766faf2364a099b03879b4d181.jpg' className='w-[50px] sm:w-[60px]  h-auto rounded-full mr-[10px] ml-[15px]'/>
              <div className='flex flex-col'> 
               <span className='text-[13px] sm:text-[17px] '>New Video From Replubic of Movie </span>
                <span className='text-[14px] text-blue-500 font-bold'><i className="fa-solid fa-circle text-[9px] mr-[5px] "></i>7 hr ago</span>
              </div>  
              </div>
        </div>
  </div> */}
  
      <WatchPost/>
    </div>
  )
}

export default RightWatch