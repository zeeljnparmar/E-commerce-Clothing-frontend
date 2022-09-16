import { createSlice } from "@reduxjs/toolkit";

//action
import * as notificationActions from "../actions/notificationActions";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {},
  reducers: {
    success: notificationActions.success,
  },
});

export const { success } = notificationSlice.actions;

export default notificationSlice.reducer;
