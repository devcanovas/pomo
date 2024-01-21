import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Titlebar from "./components/Titlebar";
import PomodoroPage from "./pages/Pomodoro";
import SettingsPage from "./pages/Settings";
import { PATH_TO_HOME, PATH_TO_SETTINGS } from "./utils/constants";
import { useAlert } from "react-alert";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Titlebar />
      <GlobalStyles />
      <Routes>
        <Route path={PATH_TO_HOME} element={<PomodoroPage />} />
        <Route path={PATH_TO_SETTINGS} element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
