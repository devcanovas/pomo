import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    focus: 1200000,
    longRest: 900000,
    shortRest: 300000,
}
export const pomodoroSlice = createSlice({
    name: 'pomodoro',
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
        }
    }
})

export const { setFocus, setLongRest, setShortRest } = pomodoroSlice.actions;

export const selectFocusTime = (state) => state.pomodoro.focus;
export const selectLongRestTime = (state) => state.pomodoro.longRest;
export const selectShortRestTime = (state) => state.pomodoro.shortRest;

export default pomodoroSlice.reducer;