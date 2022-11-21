import React from 'react'

const ReactionBar = ({Comments}) => {
  let ids1;
  if ( Comments ){
    const { ids, entities } = Comments
    ids1=ids
  }
   
  return (
    <div className='w-[96%] h-[46px] flex flex-row items-center m-auto justify-between border-b-[1px] border-[#96939350]'>
        <div className='flex flex-row items-center'>
        <div className='mr-[4px]'>
            <span><i class="fa-solid fa-thumbs-up p-[5px] bg-[#0376f2]  text-[11px] rounded-full translate-x-[] "></i></span>
            <span><i class="fa-solid fa-heart p-[5px]  bg-[#EC2B4B]  rounded-full text-[11px] translate-x-[-2px]"></i></span>
            <span><i class="fa-solid fa-face-laugh-squint text-[#F9B63C]  rounded-full text-[19px] translate-x-[-4px] translate-y-[+3px]"></i></span>
        </div>
        <span className='text-[13px] text-gray-300 hover:underline'><span className='yo'>you and</span> 4.9k <span className='yo'>others</span></span>
        </div>
        <div>
        <span  className='text-[13px] text-gray-300 hover:underline mr-[9px]'>{ ids1 ? ids1.length  : 'No have '}  <span>commects</span></span>
        <span className='text-[13px] text-gray-300 hover:underline'>187 <span>shares</span></span>
        </div>
        
    </div>
  )
}

export default ReactionBar