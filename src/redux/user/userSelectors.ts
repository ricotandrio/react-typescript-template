// this file is responsible for exporting the state and actions of the slice

import { userSlice } from "@redux/user/userSlice";

export const selectIsLoading = (state: any) => state.user.isLoading;
export const selectUserError = (state: any) => state.user.userError;
export const selectUser = (state: any) => state.user.user;

export const { setUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;