import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  focus: 1200000,
  longRest: 900000,
  shortRest: 300000,
  isSettingsValid: true,
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    setFocus: (state, action) => {
      state.focus = action.payload;
    },
    setLongRest: (state, action) => {
      state.longRest = action.payload;
    },
    setShortRest: (state, action) => {
      state.shortRest = action.payload;
    },
    setSettingsIsValid: (state) => {
      state.isSettingsValid = true;
    },
    setSettingsIsNotValid: (state) => {
      state.isSettingsValid = false;
    },
    saveSettings: (state, action) => {
      if (state.isSettingsValid) {
        console.log(state.isSettingsValid);
      }
    },
  },
});

export const {
  setFocus,
  setLongRest,
  setShortRest,
  saveSettings,
  setSettingsIsValid,
  setSettingsIsNotValid,
} = pomodoroSlice.actions;

export const selectFocusTime = (state) => state.pomodoro.focus;
export const selectLongRestTime = (state) => state.pomodoro.longRest;
export const selectShortRestTime = (state) => state.pomodoro.shortRest;
export const selectIntFocusTime = (state) =>
  formartMilisecondsInInt(state.pomodoro.focus);
export const selectIntLongRestTime = (state) =>
  formartMilisecondsInInt(state.pomodoro.longRest);
export const selectIntShortRestTime = (state) =>
  formartMilisecondsInInt(state.pomodoro.shortRest);
export const selectIsSettingsValid = (state) => state.pomodoro.isSettingsValid;

function formartMilisecondsInInt(ms) {
  return ms / 1000 / 60;
}

export default pomodoroSlice.reducer;
