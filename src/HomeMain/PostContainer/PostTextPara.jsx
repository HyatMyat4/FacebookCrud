import React from 'react'


const PostTextPara = ({ post }) => {


 
 
  return (
    <div className='w-[96%] h-[auto} m-[auto] pb-[15px]'>
        <p className=' text-gray-300 font-sans' >
            {post.body}
        </p>
    </div>
  )
}

export default PostTextPara