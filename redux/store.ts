import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
