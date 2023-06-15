import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

console.log(process.env.REACT_APP_API_URL);

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const setAuthHeader = token => {
  // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  instance.defaults.headers.authorization = `Bearer ${token}`;
};

const clearAuthHeaders = () => {
  // axios.defaults.headers.common.Authorization = '';
  instance.defaults.headers.authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/users/signup', credentials);
      console.log(response.data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
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
      const response = await instance.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export default instance;
