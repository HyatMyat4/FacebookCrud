import { createEntityAdapter } from "@reduxjs/toolkit";
import { ApiSlice } from "../Api/ApiSlice";

const CommectAdapter = createEntityAdapter()

const initialState  = CommectAdapter.getInitialState();

export const CommectApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder =>({
        getCommectByUserId: builder.query({
            query: id => `/comments?postId=${id}`,
            transformResponse: responseData => {
                return CommectAdapter.setAll(initialState ,responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'Commect', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Comment', id }))
            ]
        })
    })
})

export const {
    useGetCommectByUserIdQuery,    
} = CommectApiSlice