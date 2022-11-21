import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const api_key = '69a65b17b82a689fb8dfbe96fb1ccde0';  
export const BaseApi = createApi ({
    reducerPath: "BaseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
     
    }),
    endpoints: (builder) => ({
      getPopularMovies : builder.query({ query: ({pageId}) => `/movie/popular?api_key=${api_key}&language=en-US&page=${pageId}`}),  
      getNowPlaying : builder.query({ query: ({pageId}) =>   `/movie/now_playing?api_key=${api_key}&language=en-US&page=${pageId}`}),
      getTv: builder.query({ query: ({pageId}) => `/tv/top_rated?api_key=${api_key}&language=en-US&page=${pageId}` }),
      videoFound: builder.query({query: ({value , pageId}) => `/search/movie?api_key=${api_key}&query=${value}&language=en-US&page=${pageId}`}),
      upComing: builder.query({ query: ({value , pageId}) => `/movie/upcoming?api_key=${api_key}&language=en-US&page=${pageId}`})  , 
      overViewDetail: builder.query({query: ({id , MovieorTv}) => `/${MovieorTv}/${id}?api_key=${api_key}&language=en-US`}),
      overViewVideo: builder.query({query: ({id , MovieorTv}) => `/${MovieorTv}/${id}/videos?api_key=${api_key}&language=en-US `}),
      overViewcridits: builder.query({query: ({id , MovieorTv}) => `/${MovieorTv}/${id}/credits?api_key=${api_key}&language=en-U`}), 
      overViewCridits:builder.query({ query: ({id , MovieorTv}) => `/${MovieorTv}/${id}/credits?api_key=${api_key}&language=en-US`}),
      similar:builder.query({query: ({id , MovieorTv , pageId }) => `/${MovieorTv}/${id}/similar?api_key=${api_key}&language=en-US&page=${pageId}`})
        
    }),
});

export const {
    useGetPopularMoviesQuery,
    useGetNowPlayingQuery,
    useGetTvQuery,
    useVideoFoundQuery,
    useUpComingQuery,
    useOverViewDetailQuery,
    useOverViewVideoQuery,
    useOverViewCriticQuery,
    useOverViewCriditsQuery,
    useSimilarQuery



} = BaseApi;



