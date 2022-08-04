import { createSlice } from '@reduxjs/toolkit';

export const localizationSlice = createSlice({
  name: 'localization',
  initialState: 'en_US',
  reducers: {
    setLocalization: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLocalization } = localizationSlice.actions;

export default localizationSlice.reducer;
