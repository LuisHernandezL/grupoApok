import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { reset, setRegister } from './register.slice';

const baseUrl = 'https://api-graph.tests.grupoapok.com';
export const nodesSlices = createSlice({
  name: 'nodes',
  initialState: [],
  reducers: {
    setParents: (state, action) => {
      return action.payload;
    },
    setChilds: (state, action) => {
      return action.payload;
    },
  },
});

export const { setParents, setChilds } = nodesSlices.actions;

export const getParents = () => (dispatch) => {
  // dispatch(setIsLoading(true));
  return axios
    .get(`${baseUrl}/api/nodes`)
    .then((res) => {
      dispatch(setParents(res.data));
      dispatch(reset());
      console.log('se ejecuto');
    })
    .catch((err) => console.log(err));
  // .finally(() => dispatch(setIsLoading(false)));
};

export const getChilds = (id) => (dispatch) => {
  // dispatch(setIsLoading(true));
  return axios
    .get(`${baseUrl}/api/nodes?parent=${id}`)
    .then((res) => {
      dispatch(setChilds(res.data));
      dispatch(setRegister(res.data[0].parent));
    })
    .catch((err) => {
      console.log(err.response.status);
      if (err.response.status === 404) {
        alert('Not more childs');
      } else if (err.response.status === 429) {
        alert('To many request');
      }
    });
  // .finally(() => dispatch(setIsLoading(false)));
};

export default nodesSlices.reducer;
