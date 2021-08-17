import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../components/Todoslice";

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
});
