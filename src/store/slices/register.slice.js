import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: [],
  reducers: {
    setRegister: (state, action) => {
      state.push(action.payload);
    },
    reset: (state, action) => {
      return [];
    },
    deleteCorrection: (state, action) => {
      state.pop();
      state.pop();
    },
  },
});

export const { setRegister, reset, deleteCorrection } = registerSlice.actions;

export default registerSlice.reducer;
