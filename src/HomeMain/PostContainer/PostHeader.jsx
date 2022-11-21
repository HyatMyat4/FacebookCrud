import React from 'react'
import { useGetUsersQuery } from '../../User/UserSlice'
import PostTIme from './PostTIme'
import { Link } from 'react-router-dom'
import Any from  '../../img/Any.png'
const PostHeader = ({userId , post , postid}) => {
    const { user : username} =useGetUsersQuery('getUser',{
       selectFromResult: ({ data , isLoading}) => ({
        user : data?.entities[userId]
       }),
    })

 
  
  return (
    <div className='w-[96%] h-[60px]  flex flex-row items-center justify-between m-auto ]'>
        <div className='flex flex-row'>
            <div >
                <img alt='' className='w-[45px] rounded-full mr-[8px]'
                src={Any}
                />
            </div>
            <div className='flex flex-col'>
                <span>By {username ? username.name : 'Unknown author'} </span>
                <span className='text-[13px] text-gray-400'><PostTIme timestamp={post.date}/></span>
            </div>
        </div>
        <Link to={`/PostDetail/${postid}`}>
            <div>
                <i className="fa-solid fa-ellipsis text-[19px] cursor-pointer text-gray-200 py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
            </div>
        </Link>
    </div>
  )
}

export default PostHeader