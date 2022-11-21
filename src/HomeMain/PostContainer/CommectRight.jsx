import React, { useState } from 'react'
import Emjo from '../../img/emjo.png'
import Profail from '../..//img/Profail.png'
import { useUpdatePostMutation , } from '../PostSlice'
import  {  useGetPostQuery } from '../PostSlice'

import { useDispatch , useSelector } from 'react-redux'

const CommectRight = ({Comments , isSuccess , isLoading , isError , error , postComment , postid , userId}) => {
const dispatch = useDispatch()





  







    let comments;
   
    if(isLoading){
        comments = <div className="loading"><i class="fa-solid fa-circle-nodes animate-spin  text-violet-700 m-[13px]"></i></div>;
    }else if(isSuccess){
        const { ids, entities } = Comments
        comments = (
            <div >
            {ids.map(id =>(
               
                <div key={id} className='flex mb-[40px]'>
                      <div className='min-w-[30px] h-[100%]' >
                      <img  className='w-[35px] h-[auto]  rounded-full'
                      src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'
                      />
                      </div>
                <div key={id} className='max-w-[620px] h-auto ml-[8px] bg-[#3A3B3C] px-[10px] py-[5px] rounded-[13px] mr-[30px]'>
                <div>
                    <span className=''>{entities[id].name.slice(0,9)}</span>
                </div>
                <div className='text-[16px]'>
                {entities[id].body}
                <div className='absolute mt-[3px]'>
                    <span className='hover:underline cursor-pointer ml-[5px] mr-[15px] text-[14px]'>Like</span>
                    <span className='text-[14px] cursor-pointer hover:underline'>Reply</span>
                  </div>
                </div>
           </div>  
           </div>
        
        
            ) )}
          </div>
        )
          
    }else if(isError){
        <div>Soorty Not Comments Found {error}</div>
    }
  return (
    <div key={postid} className='w-[96%] h-[auto] m-auto '>
        <div className='w-[100%] h-[16px] flex flex-row items-center justify-between mt-[10px]'>
                <span id={postid} className='text-[15px] hover:underline cursor-pointer' >View all comments</span>
                <span className=' cursor-pointer' >All Comments <i className="fa-solid fa-sort-down text-[17px] translate-y-[-2px]"></i></span>
        </div>
            <div className='w-[100%] h-[auto] mt-[10px] '>
             <div className=' '>

             {  postComment ?  comments : ''}

                   
                </div>    
                   
            </div>



        <div className='w-[100%] h-[60px] flex flex-row items-center'>
            <div className='mr-[10px]'>
                <img
                className='rounded-full w-[40px] h-auto'
                src={Profail}
                />
            </div>
            <div className='w-[100%] h-[38px] bg-[#3A3B3C] rounded-full flex flex-row items-centerr overflow-hidden'>
                <input
                 type={'text'}
                 placeholder='Write a comment...'   
                 className='w-[88%] h-[95%] px-[13px] rounded-full bg-[transparent] outline-none text-slate-200 text-[15px]'
                />
                <div className='flex flex-row items-center'>
                    <img className='w-[140px] h-[auto] mr-[30px] select-none' 
                    src={Emjo}
                        id='commecntimg'
                    />
                </div>
            </div>
        </div>        
    </div>
  )
}

export default CommectRight