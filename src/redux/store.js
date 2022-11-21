import { configureStore } from "@reduxjs/toolkit";
import PostFromTrueFalseReducer from "../HomeMain/PostContainer/ActionSlice";
import CounterMovieSliceReducer from "../watch/services/CouterMovieSlice"
import { ApiSlice } from "../Api/ApiSlice";
import { MusicCoreApi } from "../Music/servicesApi/MusicBaseApi"
import { BaseApi } from "../watch/services/BeseApi";
import PlayerReducer from "../Music/servicesApi/PlayerSlice"
export const store = configureStore({
 reducer:{
   [ApiSlice.reducerPath]: ApiSlice.reducer,
   [BaseApi.reducerPath]:BaseApi.reducer,
   [MusicCoreApi.reducerPath]:MusicCoreApi.reducer,
    PostTrueFalse:PostFromTrueFalseReducer,
    CounterMovie:CounterMovieSliceReducer,  
   player: PlayerReducer ,
 },
 middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(ApiSlice.middleware , BaseApi.middleware , MusicCoreApi.middleware   ),   
    
   
    devTools: true
})

