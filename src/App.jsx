import GlobalStyles from "./components/GlobalStyles";
import MenuTools from "./components/MenuTools";
import Titlebar from "./components/Titlebar";
import PomodoroPage from "./pages/Pomodoro";

export default function App() {
  return (
    <>
      <Titlebar />
      <GlobalStyles />
      <PomodoroPage />
      <MenuTools />
    </>
  );
}
