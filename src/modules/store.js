import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import pizzaReducer from "../features/pizza/pizzaSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    pizza: pizzaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
