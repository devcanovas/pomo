import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectFocusTime } from "../../redux/pomodoroSlice";

const TimerText = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  font-family: "GeistUltraLight";
`;

export default function Timer() {
  const ms = useSelector(selectFocusTime);
  const dispatch = useDispatch();
  return <TimerText>{formatMsToMinutesAndSeconds(ms)}</TimerText>;
}

function formatMsToMinutesAndSeconds(ms) {
  let min = Math.floor((ms / 1000 / 60) << 0);
  let sec = Math.floor((ms / 1000) % 60);
  return `${min}:${(sec < 10 ? "0" : "") + sec}`;
}
