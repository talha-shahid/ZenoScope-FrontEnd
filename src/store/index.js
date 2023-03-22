import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import activate from "./activateSlice";
import sortingReducer from "./sortingSlice";

export const store = configureStore({
  reducer: {
    auth,
    activate,
    sorting: sortingReducer,
  },
});
