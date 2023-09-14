import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import pizzaReducer from "../features/pizza/pizzaSlice";
import cartReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    pizza: pizzaReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
