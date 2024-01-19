import GlobalStyles from "./components/GlobalStyles";
import Titlebar from "./components/Titlebar";
import PomodoroPage from "./Pages/Pomodoro";

export default function App() {
  return (
    <>
      <Titlebar />
      <GlobalStyles />
      <PomodoroPage />
    </>
  );
}
