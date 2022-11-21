import React from 'react'
import LiveVd from '../img/live.png'
import Grey  from '../img/gerry.png'
import Profail from '../img/Profail.png'
import { useDispatch } from 'react-redux'
import { PostAddFormTrueFalse } from './PostContainer/ActionSlice'
const PostCreater = () => {

    const dispatch = useDispatch()
  return (
    <div className='w-[100%] h-[145px] bg-[#262727] my-[20px] rounded-[6px] overflow-hidden '>
        <div className='w-[100%] h-[65px]  flex flex-row items-center justify-center'>
            <img src={Profail}
            className='rounded-full mr-[10px] w-[43px] h-auto'
            />
            <div onClick={() => dispatch(PostAddFormTrueFalse(true))} className='select-none w-[89%] h-[44px] bg-[#8a898956] rounded-full cursor-pointer hover:bg-[#aba9a956] flex flex-row items-center '>
               <span className='ml-[12px] text-gray-300'> What's on your mind, Htet?</span>
            </div>
        </div>
        <div className='border-b-[0.01px] border-[#9497959c] my-[5px] mx-[15px]'></div>
        <div className='w-[98%] h-[65px] flex flex-row items-center justify-around m-auto  '>
            <div id='Live' className='w-[32%] h-[42px] flex flex-row items-center justify-center hover:bg-[#92909045] rounded'>
                <img className='w-[28px]'
                    src={LiveVd}
                />
                <span className='ml-[8px]'>Live video</span>
            </div>
            <div id='Photo' className='w-[32%] h-[42px] flex flex-row items-center justify-center hover:bg-[#92909045] rounded'>
                <img className='w-[28px]'
                    src={Grey}
                />
                <span className='ml-[8px]'>Photo/video</span>
            </div>
            <div className='w-[32%] h-[42px] flex flex-row items-center justify-center hover:bg-[#92909045] rounded' id='Feeling'>
                <span className='text-[27px]'>😄</span>
                <span className='ml-[2px]'>Feeling/activity</span>
            </div>
        </div>
    </div>
  )
}

export default PostCreater