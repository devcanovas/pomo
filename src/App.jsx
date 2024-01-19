import PomodoroPage from "./pages/Pomodoro";
import GlobalStyles from "./components/GlobalStyles";
import Titlebar from "./components/Titlebar";
import MenuTools from "./components/MenuTools";

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
