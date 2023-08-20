import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieList: [],
  select: null
};

export const counterSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    movieList: (state, action) => {
      state.movieList = action.payload;
    },
    movieSelect: (state, action) => {
      state.select = action.payload;
    },
    clearSelect: (state) => {
      state.select = null;
    }
  },
});


// Action creators are generated for each case reducer function
export const { movieList, movieSelect, clearSelect } = counterSlice.actions;

export default counterSlice.reducer;