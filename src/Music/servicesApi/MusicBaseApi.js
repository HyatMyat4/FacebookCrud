import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const MusicCoreApi = createApi({
    reducerPath: 'MusicCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key' , '39fe95dc84mshc94e1f3b496448cp1a0816jsn65cd29596e0c' )
           
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }), 
        getSongsByGener: builder.query({ query: (genre) =>  `/charts/genre-world?genre_code=${genre}` })
    })
})


export const {
    useGetTopChartsQuery,
    useGetSongsByGenerQuery,
} = MusicCoreApi;