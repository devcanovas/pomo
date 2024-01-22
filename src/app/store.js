import { configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "../redux/pomodoroSlice";

export const store = configureStore({
  reducer: {pomodoro: pomodoroReducer},
  middleware: (getDefaulMiddleware) => getDefaulMiddleware({
    serializableCheck: false
  })
});
