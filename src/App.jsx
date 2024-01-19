import GlobalStyles from "./components/GlobalStyles";
import MenuTools from "./components/MenuTools";
import PomodoroPage from "./pages/Pomodoro";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <PomodoroPage />
      <MenuTools />
    </>
  );
}
