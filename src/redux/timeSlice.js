import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    focus: 1200000,
    longRest: 900000,
    shortRest: 300000,
}
export const timeSlice = createSlice({
    name: 'time',
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