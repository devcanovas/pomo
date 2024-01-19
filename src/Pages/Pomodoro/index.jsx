import styled from "styled-components";
import Title from "../../components/Title";
import ButtonRest from "../../components/ButtonRest";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ControlTimerButton from "../../components/ControlTimerButton";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonContainer = styled.section`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 100%;
`;

const TimerContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const TimerText = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  font-family: "GeistUltraLight";
`;

const Circle = styled.div`
  width: 15rem;
  height: 15rem;
  border: 1px solid #2e2e2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export default function PomodoroPage() {
  return (
    <Container>
      <Title>POMOCODE</Title>
      <TimerContainer>
        <Circle>
          <TimerText>20:00</TimerText>
        </Circle>
        <ControlTimerButton />
      </TimerContainer>
      <ButtonContainer>
        <ButtonRest>Long Rest</ButtonRest>
        <ButtonRest>Short Rest</ButtonRest>
      </ButtonContainer>
    </Container>
  );
}
