import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'EN',
  },
  reducers: {
    toEnglish: (state) => {
      state.language = 'EN';
    },
    toLatvian: (state) => {
      state.language = 'LV';
    },
  },
});

export const {
  toLatvian, toEnglish,
} = languageSlice.actions;

export default languageSlice.reducer;
