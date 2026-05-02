import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./feature/CountSlice";

export const Store = configureStore({
  reducer: {
    Counter: CounterReducer,
  },
});
