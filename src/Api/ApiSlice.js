import { createApi , fetchBaseQuery   } from '@reduxjs/toolkit/query/react';

export const ApiSlice  = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl : 'http://localhost:3500' }),
        tagTypes: ['posts' , 'User' , 'Comment' , 'Photo' ],
        endpoints: builder => ({})

})