import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Features/SearchSlice";
import CollectionReducer from "./Features/CollectionSlice";
export const Store = configureStore({
  reducer: {
    search: searchReducer,
    Collection: CollectionReducer,
  },
});
