import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    verify: null,
    isLoggedIn: false,
    loading: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.verify = action.payload.verify;
        state.isLoggedIn = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logInUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
