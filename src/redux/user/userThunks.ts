// this file contains all the async actions that are related to the slice

import { createAsyncThunk } from '@reduxjs/toolkit'
import { isLoggedService } from '@src/apis/services/userService'

export const isUserLoggedIn = createAsyncThunk('user/isUserLoggedIn',  async () => {
  const response = await isLoggedService();
  return response;
});