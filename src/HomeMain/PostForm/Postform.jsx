import React from 'react'
import Aa from '../../img/Aa.png'
import Profail from '../../img/Profail.png'
import { useSelector , useDispatch } from 'react-redux'
import { PostAddFormTrueFalse } from '../PostContainer/ActionSlice'
import { PostAddFormOpenClose } from '../PostContainer/ActionSlice'
import { useAddNewPostMutation } from '../PostSlice'

import { useState } from "react";
const Postform = () => {

const userId = 11 ;

    const [ addNewPost , { isLoading }] = useAddNewPostMutation()



    const [title , setTitle ] = useState('')
   

 const OpenClose =useSelector(PostAddFormOpenClose)

 const dispatch = useDispatch()

const onTitleChange = e => setTitle(e.target.value)
const canSave = title && title && !isLoading

const onSave = async () => {
  
    if (canSave) {
        try{
            
            dispatch(PostAddFormTrueFalse(false))
            await addNewPost({ title , body: title , userId }).unwrap()            
            console.log(title)
           
          

            setTitle('')
            
        } catch (err) {
            console.error('Soorty Failed to save the post ', err)
        }
    }
}
  return (
    <div id='PostAddForm' className={`absolute z-50 w-full h-full flex flex-col items-center justify-center bg-[#0e0e0edd] backdrop-blur-0  ${ OpenClose ? 'inline' : 'hidden'}`}>
        <div className=' sm:min-w-[500px]  h-auto bg-[#242526] rounded-[5px] relative'>
            <div className='w-full h-[60px] flex flex-row items-center justify-center border-b border-[#58555542]'>
                <span className='text-[21px] font-bold'>Create Post</span>
                <i onClick={() => dispatch(PostAddFormTrueFalse(false))} class="fa-solid fa-x py-[9px] px-[12px] bg-[#4e4f50b3]  text-[18px] rounded-full absolute right-3 hover:bg-[#646567b3] cursor-pointer"></i>
            </div>
            <div className='w-full h-[70px] flex flex-row items-center '>
                <img className='rounded-full ml-[10px] mr-[8px] w-[40px]' src={Profail} />
                <div className='flex flex-col '>
                    <span>Htet Myat</span>
                    <span className='text-[13px] text-gray-200 py-[2px] px-[2px] bg-[#6866666a] rounded cursor-pointer'>
                        <i className="fa-solid fa-earth-europe mr-[3px] ml-[4px]"></i>
                        <span className='font-bold'>Plubic</span>
                        <i className="fa-solid fa-caret-down ml-[5px]"></i>
                    </span>
                </div>
            </div>
            <div>
                <textarea className='w-full h-[160px]  p-[18px] outline-none m-auto bg-transparent text-[22px] resize-none'
                    placeholder='Create a plubic post...'
                    onChange={onTitleChange}
                    value={title}
                >
             
                </textarea>
                <div className=' w-[94%] h-[40px] m-auto flex flex-row items-center justify-between'>
                    <img className='w-[38px]' src={Aa} />
                    <i class="fa-regular fa-face-smile text-[23px] text-[grey] hover:text-[#a09e9e]"></i>
                </div>
                <div className='w-[94%] h-[60px] border border-[#dad6d653] m-auto rounded-[8px] mt-[20px] flex flex-row items-center justify-between'>
                    <span className='text-[16px] ml-[15px]'>Add to your post</span>
                    <div>
                        <i class="fa-regular fa-image text-[23px] text-[#58C472] p-[6px] hover:bg-[#3A3B3C] rounded-full mr-[5px] cursor-pointer"></i>
                        <i class="fa-solid fa-user-tag text-[19px] text-[#3a8dfa] py-[7px] px-[5px] hover:bg-[#3A3B3C] rounded-full mr-[5px] cursor-pointer"></i>
                        <i class="fa-solid fa-video text-[21px] text-[#F23E5C] py-[6px] px-[5px] hover:bg-[#3A3B3C] rounded-full mr-[5px] cursor-pointer"></i>
                        <i class="fa-solid fa-location-dot text-[21px] text-[#F66551] py-[6px] px-[9px] hover:bg-[#3A3B3C] rounded-full mr-[5px] cursor-pointer"></i>
                        <i class="fa-solid fa-ellipsis text-[21px] text-[grey] py-[7px] px-[8px] hover:bg-[#3A3B3C] rounded-full mr-[5px] cursor-pointer"></i>
                    </div>
                </div>
                <button
                 className='w-[94%] h-[40px] ml-[15px] bg-[#1772ea] my-[15px]  rounded-[6px] hover:bg-[#3982E4] '
                disabled={!canSave}
                onClick={onSave}
                >Post</button>
            </div>
           
        </div>
    </div>
  )
}

export default Postform