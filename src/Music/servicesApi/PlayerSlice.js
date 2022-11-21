import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
    FooterOpenClose: true,
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: ( state , action ) => {
          state.activeSong = action.payload.song  ;

          if (action.payload?.data?.tracks?.hits) {
            state.currentSongs = action.payload.data.tracks.hits;
          }else if (action.payload?.data?.properties) {
            state.currentSongs = action.payload?.data?.tracks;
          } else {
            state.currentSongs = action.payload.data
          }

          state.currentIndex = action.payload.i;
          state.isActive = true;
        },
        nextSong: (state, action) => {
            if(state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload].track
            }else {
                state.activeSong = state.currentSongs[action.payload];
            }
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        prevSong: (state, action) => {
            if(state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload].track
            }else {
                state.activeSong = state.currentSongs[action.payload];
            }
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        playPause: (state, action) => {
            state.isPlaying = action.payload;
        },
        selectGenreListId: ( state , action ) => {
            state.genreListId = action.payload
        },
        OpeNClose: ( state, action ) => {
            state.FooterOpenClose = action.payload;
        }

    },


})


export const { setActiveSong , nextSong , prevSong  , playPause , selectGenreListId , OpeNClose } = playerSlice.actions

export const genreListIdC = (state) => state.player.genreListId

export const OpenCLoseD = (state) => state.player.FooterOpenClose

export default playerSlice.reducer











