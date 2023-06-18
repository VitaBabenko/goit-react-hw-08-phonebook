import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });

console.log(process.env.REACT_APP_API_URL);

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  // instance.defaults.headers.authorization = `Bearer ${token}`;
};

const clearAuthHeaders = () => {
  axios.defaults.headers.common.Authorization = '';
  // instance.defaults.headers.authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post('/auth/register', credentials); // users/signup
      console.log(response.data);
      setAuthHeader(response.data.token);
      console.log(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'auth/verify/:verificationToken',
  async (_, thunkAPI) => {
    try {
      await axios.get('/auth/verify/:verificationToken');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post('/auth/login', credentials); // users/login
      console.log(response.data);
      setAuthHeader(response.data.token);
      console.log(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout'); //users/logout
    clearAuthHeaders();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/auth/current');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export default instance;
