import { configureStore } from "@reduxjs/toolkit";

//reducers
import notificationReducer from "./reducers/notificationReducer";

export default configureStore({
  reducer: {
    notificationReducer,
  },
});
