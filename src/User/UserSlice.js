import { createEntityAdapter } from "@reduxjs/toolkit"; 
import { ApiSlice } from "../Api/ApiSlice";

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState();


export const UserSlice =  ApiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: responseData => {
                return usersAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'User', id: "LIST" },
                ...result.ids.map(id => ({ type: 'User', id }))
            ]


        })

    })
});

export const {
    useGetUsersQuery
} = UserSlice