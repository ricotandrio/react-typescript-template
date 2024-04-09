// contain redux store configuration

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "@redux/user/userSelectors";

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export const useAppDispath:()=>typeof store.dispatch = ()=> useDispatch()
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export default store