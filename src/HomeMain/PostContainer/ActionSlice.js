import { createSlice } from  '@reduxjs/toolkit';


const initialState = {
    PostAddFormOpenClose : false ,
    ChangeColour : 1 ,
    
}

export const PostFromTrueFalse = createSlice({
        name : 'PostTrueFalse',
        initialState,
        reducers: {
            PostAddFormTrueFalse: (state , actions ) => {
                state.PostAddFormOpenClose = actions.payload
            },       
            ChangeColourengin : ( state, actions ) => {
                state.ChangeColour = actions.payload
            },
         

        }
})

export const { PostAddFormTrueFalse , ChangeColourengin  } = PostFromTrueFalse.actions;



export const  PostAddFormOpenClose = (state) => state.PostTrueFalse.PostAddFormOpenClose;



export const ChangeColourC = (state) => state.PostTrueFalse.ChangeColour

export default PostFromTrueFalse.reducer;










