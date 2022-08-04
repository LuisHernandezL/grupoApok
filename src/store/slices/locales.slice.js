import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api-graph.tests.grupoapok.com';

export const localesSlice = createSlice({
  name: 'locales',
  initialState: [],
  reducers: {
    setLocales: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLocales } = localesSlice.actions;

export const getLocales = () => (dispatch) => {
  // dispatch(setIsLoading(true));
  return axios
    .get(`${baseUrl}/api/locales`)
    .then((res) => dispatch(setLocales(res.data)));
  // .finally(() => dispatch(setIsLoading(false)));
};

export default localesSlice.reducer;
