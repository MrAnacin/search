import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./userApi";
import { Middleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware as Middleware),
});
