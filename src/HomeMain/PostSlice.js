import { createEntityAdapter  } from "@reduxjs/toolkit";
import { ApiSlice } from "../Api/ApiSlice";
import { sub } from "date-fns"
const postsAdapter = createEntityAdapter({
    sortComparer: (a , b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState();


export const extendedApiSlice = ApiSlice.injectEndpoints({
   endpoints: builder => ({
        getPost: builder.query({
            query: () => '/posts',            
             transformResponse: responseData => {
                let min = 1;
              const loadedPosts =   responseData.map(post => {
                if(!post.Comment) post.Comment= false ;
               
                if(!post.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                if(!post.reaction) post.reaction =  {
                    Totalreaction:0,
                }
               
                return post ;
              });
              return postsAdapter.setAll(initialState , loadedPosts)
            },
            providesTags: (result , error , arg) => [
                {type : 'posts' , id: 'LIST' },    
              ...result.ids.map(id => ({type:'posts' , id}))        
            ],
     
        }),
        getPostsByUserId: builder.query({
          query: userId => `/posts/?userId=${userId}`,
          transformResponse: responseData => {
              let min = 1;
              const loadedPosts = responseData.map(post => {
                  if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                  if (!post?.reactions) post.reactions = {
                      thumbsUp: 0,
                      wow: 0,
                      heart: 0,
                      rocket: 0,
                      coffee: 0
                  }
                  return post;
              });
              return postsAdapter.setAll(initialState, loadedPosts)
          },
          providesTags: (result, error, arg) => [
              ...result.ids.map(id => ({ type: 'Post', id }))
          ]
      }),

        addNewPost: builder.mutation({
          query: initialPost => ({
              url: '/posts',
              method: 'POST',
              body: {
                  ...initialPost,  
                                                             
                  date: new Date().toISOString(),
                  reactions: {
                    Totalreaction:0,
                  }
              }
          }),
          invalidatesTags: [
              { type: 'posts', id: "LIST" }
             
          ]
      }),
      
      updatePost: builder.mutation({
        query: initialPost => ({
          url: `/posts/${initialPost.id}`,
          method: 'PUT',
            body: {
              ...initialPost,
              date: new Date().toISOString(),
              reactions: {
                Totalreaction:0,
            }
            }
         }),
         invalidatesTags: (result, error, arg) => [
          { type: 'posts', id: arg.id }
        ]

      }),
      deletePost: builder.mutation({
        query: ({ id }) => ({
            url: `/posts/${id}`,
            method: 'DELETE',
            body: { id }
        }),
        invalidatesTags: (result, error, arg) => [
            { type: 'Post', id: arg.id }
        ]
    }),
    }),
});

export const { 
  useGetPostQuery ,
  useGetPostsByUserIdQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation
 
} = extendedApiSlice

