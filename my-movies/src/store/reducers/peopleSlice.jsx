import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    info : null,
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        loadMovie: (state, action) => { state.info = action.payload; },
        removeMovie: (state) => { state.info = null; },
    },
});

export const { loadMovie, removeMovie } = peopleSlice.actions;

export default peopleSlice.reducer;
