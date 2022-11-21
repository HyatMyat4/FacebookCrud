import React from 'react'
import PostTIme from './HomeMain/PostContainer/PostTIme'
import { useParams } from 'react-router-dom'
import { useGetPostQuery } from './HomeMain/PostSlice'
import  thumbs from './img/Thumbs.gif'
import  Love from './img/Love.gif'
import  Care from './img/Care.gif'
import  Haha from './img/Haha.gif'
import  Wow from './img/Wow.gif'
import  Sad from './img/Sad.gif'
import  Angry from './img/Angry.gif'
import { useState , useEffect } from 'react'
import { useUpdatePostMutation , useDeletePostMutation } from './HomeMain/PostSlice'
import { useNavigate } from 'react-router-dom'
const PostDetail = () => {
const navigate=useNavigate()    
const [bodyupd , setbodyupd ] = useState('')
const {id} = useParams()
    const { post, isLoading: isLoadingPosts, isSuccess } = useGetPostQuery('getPosts', {
        selectFromResult: ({ data, isLoading, isSuccess }) => ({
            post: data?.entities[id],
            isLoading,
            isSuccess
        }),
    })
    
 
const [userIdreal, setUserIdreal] = useState('')
const [deletePost] = useDeletePostMutation()
console.log(post)
let ids1;
if ( post ){
  const { ids, entities } = post
  ids1=ids
}
console.log(id,'idididididididid')

const onUpdate = (e) => {
    setbodyupd(e.target.value)
}



useEffect(() => {
    setbodyupd(post?.body)
    setUserIdreal(post?.userId)
}, [isSuccess])

const [updatePost, { Loading }] = useUpdatePostMutation()
console.log(userIdreal,'userIdreal')


const delePost = async (e) => {
    try {
        await deletePost({ id:id }).unwrap()

        setUserIdreal('')
        setbodyupd('')
        navigate('/')
    } catch (err) {
        console.error('Failed to delete the post', err)
    }
}


const update = async (e) => { 
        try {         
         await updatePost({ id: id ,  Comment : true , title:bodyupd , content:bodyupd , userId:userIdreal }).unwrap()
         setUserIdreal('')
         setbodyupd('')
         navigate(`/`)
        }catch{
            console.error('Failed to delete the post')
        }


}
const canSave = [bodyupd, id, userIdreal].every(Boolean) && !Loading;


  return (
    <div className='w-full h-[1000px]'>
      <div className='w-1/2 h-auto m-auto mt-[20px] bg-[#262727] rounded overflow-hidden pb-[8px] animate-slideup'>
  

        <div className='w-[96%] h-[60px]  flex flex-row items-center justify-between m-auto '>
            <div className='flex flex-row'>
                <div >
                    <img alt='' className='w-[45px] rounded-full mr-[8px]'
                    src='data:image/png;base64,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'
                    />
                </div>
                <div className='flex flex-col'>
                    <span>By {post ? post.name : 'Unknown author'} </span>
                    <span className='text-[13px] text-gray-400'><PostTIme timestamp=''/></span>
                </div>
            </div>
            
                <div onClick={delePost}>                   
                    <i class="fa-solid fa-trash text-[20px] cursor-pointer text-[red] py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
                </div>
            
        </div>
        <div className='w-[96%] h-[auto] m-[auto] pb-[15px]'>    
        <textarea id='isdate' className='w-full h-[200px]  p-[15px] outline-none m-auto bg-transparent text-[22px] resize-none text-gray-300 font-sans'
                    placeholder='Create a plubic post...'
                    onChange={(e) => onUpdate(e)}
                    value={bodyupd}
                >
             
                </textarea>
    </div>
        <div className='w-[100%] h-[auto] m-auto bg-cover'>
        <img className='w-[94%] m-auto bg-cover'
        src=''
        />
    </div>
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
    <div className=' relative w-[96%] h-[43px] m-[auto] flex flex-row items-center justify-around border-b-[1px] border-[#96939350]'>

<div    className='group w-[32%] h-[34px] flex  items-center justify-center  hover:bg-[#7c78784b]   rounded cursor-pointer'>
<div className=' absolute group-hover:flex  hidden left-0 transform hover:translate-y-[-40px] hover:opacity-[1] opacity-[0]  transition duration-3000 ease-in   ] '>
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

   <div>
    <i class=" fa-regular fa-thumbs-up text-[20px] text-gray-100"></i>
    <span className='ml-[8px] text-[14px]'>Like</span>
   </div>
</div>
<div className='w-[32%] h-[34px] flex  items-center justify-center  hover:bg-[#7c78784b]  rounded cursor-pointer'>
    <i class="fa-regular fa-comment text-[20px] text-gray-100"></i>
    <span className='ml-[8px] text-[14px]'>Comment</span>
</div>
<div className='w-[32%] h-[34px] flex  items-center justify-center  hover:bg-[#7c78784b]  rounded cursor-pointer'>
    <i class="fa-solid fa-share text-[18px] text-gray-100"></i>
    <span className='ml-[8px] text-[14px]'>Share</span>
</div>

</div>
<div className='w-full h-[60px] flex flex-row items-center justify-center'>
<button onClick={update}
 disabled={!canSave} className='bg-[#aec6c9] cursor-pointer hover:bg-[#bee0e5] text-[black] rounded-full py-[5px] px-[10px]'>Save Post</button>
</div>
    </div>
    </div>
  )
}

export default PostDetail
