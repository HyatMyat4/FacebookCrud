import { createSlice } from  '@reduxjs/toolkit';

const initialState = {
    AllMovieData : [] ,
    ChangeCounter : 3 ,
    ChangeCounter2 : 4 ,
    showCounter3 : 1 ,
    SearchCounter : 1 ,
    simerCounter : 1 ,
    searchValue : 'Spider Man' ,
    sideOpenClose: true ,
    CompiesOpenClose: true,
    movietv: 'movie'
}

export const CounterMovieSlice = createSlice({
        name : 'CounterMovie',
        initialState,
        reducers: {
            AddAllMovieData: (state , actions ) => {
                state.AllMovieData = actions.payload
            },       
            ChangeCounterEngin: ( state, actions ) => {
                state.ChangeCounter += actions.payload
            },
            ChangeCounterEngin2: ( state, actions ) => {
                state.ChangeCounter2 += actions.payload
            },
            ChangeCounterEngin3: ( state, actions ) => {
                state.showCounter3 += actions.payload
            },
            SearchCounterEngin: ( state, actions ) => {
                state.SearchCounter += actions.payload
            },
            simerCounterEngin: ( state, actions ) => {
                state.simerCounter += actions.payload
            },
            OnSearchEngin: (state , actions ) => {
                state.searchValue = actions.payload
            } ,
            SideBarOpenloseEngin: (state , actions ) => {
                state.sideOpenClose = actions.payload
            } ,
            CompiesOpenCloseEngin: (state , actions ) => {
                state.CompiesOpenClose = actions.payload
            } ,
            MovieTvengin: (state , actions ) => {
                state.movietv = actions.payload
            } 

        }
})

export const { AddAllMovieData 
    , ChangeCounterEngin ,
     ChangeCounterEngin2 ,
      ChangeCounterEngin3 ,
       OnSearchEngin ,
        SearchCounterEngin ,
        SideBarOpenloseEngin ,
        simerCounterEngin ,
        CompiesOpenCloseEngin,
        MovieTvengin
    } = CounterMovieSlice.actions;



export const  AllMovieDataC = (state) => state.CounterMovie.AllMovieData;

export const ChangeCounterC = (state) => state.CounterMovie.ChangeCounter
export const ChangeCounter2 = (state) => state.CounterMovie.ChangeCounter2
export const showCounter3 = (state) => state.CounterMovie.showCounter3
export const searchValue = (state) => state.CounterMovie.searchValue
export const SearchCounter = (state) => state.CounterMovie.SearchCounter
export const sideOpenCloseC = (state) => state.CounterMovie.sideOpenClose
export const simerCounter = (state) => state.CounterMovie.simerCounter
export const CompiesOpenClose = (state) => state.CounterMovie.CompiesOpenClose
export const movietv = (state) => state.CounterMovie.movietv

export default CounterMovieSlice.reducer;