import React from 'react'
import PostHeader from './PostHeader'
import PostTextPara from './PostTextPara'
import Postimg from './Postimg'
import ReactionBar from './ReactionBar'
import ReactionCommect from './ReactionCommect'
import CommectRight from './CommectRight'
import { useGetPostQuery } from '../PostSlice';
import Postform from "../PostForm/Postform";
import { useGetCommectByUserIdQuery } from '../../commect/CommectSlice'
import { FaCommentsDollar } from 'react-icons/fa'

const PostContainer = ({ postId  }) => {  
  console.log(postId,'postId')
  const { post } = useGetPostQuery('getPost',{
    selectFromResult: ({ data }) => ({
      post: data?.entities[postId]
    })
  })

console.log(post.id , 'is postId')

const {
  data: Comments,
  isLoading,
  isSuccess,
  isError,
  error
} = useGetCommectByUserIdQuery(post.id);

  return (
    <div key={postId} className='w-[100%] h-[auto] mt-[20px] bg-[#262727] rounded overflow-hidden pb-[8px] animate-slideup'>
        <PostHeader userId={post.userId} post={post} postid={post.id} />
        <PostTextPara post={post}/>
        <Postimg />
        <ReactionBar Comments={Comments}/>
        <ReactionCommect/>
        <CommectRight 
        key={post.id}
        postid={post.id}
        postComment={post.Comment}
        Comments={Comments}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={ error} 
        userId={post.userId}/>
      
    </div>
  )
}

export default PostContainer