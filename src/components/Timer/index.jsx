import styled from "styled-components";

const TimerText = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  font-family: "GeistUltraLight";
`;

export default function Timer() {
  return <TimerText>20:00</TimerText>;
}