// this file is responsible for the user slice of the redux store

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "@src/models/responses/user_response";
import { isUserLoggedIn } from "./userThunks";
import { BaseResponse } from "@src/models/responses/base_response";

interface InitialState {
  user: UserResponse | BaseResponse | null;
  isLoading: boolean;
  userError: string;
}

const initialState: InitialState = {
  user: null,
  isLoading: false,
  userError: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserResponse | BaseResponse | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.userError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(isUserLoggedIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(isUserLoggedIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(isUserLoggedIn.rejected, (state, action) => {
      state.isLoading = false;
      state.userError = action.error ? action.error.message || '' : 'Unknown error';
    });
  },
});
