import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    info : null,
}

export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        loadMovie: (state, action) => { state.info = action.payload; },
        removeMovie: (state) => { state.info = null; },
    },
});

export const { loadMovie, removeMovie } = tvSlice.actions;

export default tvSlice.reducer;