// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { api } from "./apis/api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
