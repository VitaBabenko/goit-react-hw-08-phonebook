import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setValueFilter(action) {
      return action.payload;
    },
  },
});

export const { setValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
