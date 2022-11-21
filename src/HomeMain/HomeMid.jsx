import React from 'react'
import UserStory from './UserStory'
import PostCreater from './PostCreater'
import Createroom from './Createroom'
import PostContainer from './PostContainer/PostContainer'
import { useGetPostQuery } from './PostSlice'

const HomeMid = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetPostQuery('getPost')

console.log(posts,'postsllllllllllllllllllllll')

let content;
if (isLoading){
  content = <div className='flex flex-col items-center justify-center mt-[30px] mb-[30px]'>      
      <i class="fa-regular fa-snowflake text-[80px] text-cyan-200 animate-spin"></i>
      <p className='text-[20px] text-emerald-300 animate-ping mt-[100px]'>Loading... </p>    
    </div>
}else if (isSuccess){
  content = posts?.ids.map(postId =>  <PostContainer key={postId} postId={postId} /> )
}else if (isError) {
  content = <p>{error}</p>;
}
  return (
    <div className='w-[758px] h-[96vh]  relative overflow-scroll m-auto ' id='main'>
      <div className='w-[100%] h-[100%] '> 
               
          <UserStory/>
          <PostCreater/>
          <Createroom/>
          {content}
      </div>
          
    </div>
  )
}

export default HomeMid