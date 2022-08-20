import { createSlice } from "@reduxjs/toolkit";

const initialState = "";
let timeoutId = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      return action.payload;
    },
    removeNotification(state, action) {
      return "";
    },
  },
});

export const {
  createNotification,
  removeNotification,
} = notificationSlice.actions;

export const setNotification = (text, timeoutSeconds) => {
  return async (dispatch) => {
    dispatch(createNotification(text));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(
      () => dispatch(removeNotification()),
      timeoutSeconds * 1000
    );
  };
};

export default notificationSlice.reducer;
