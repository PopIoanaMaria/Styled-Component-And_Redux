import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import userReducer from "./user";
import themeReducer from "./theme";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    theme: themeReducer,
  },
});
