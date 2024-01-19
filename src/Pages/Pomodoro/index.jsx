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
`



export default function PomodoroPage() {
  return (
    <Container>
      <Title>POMOCODE</Title>
      <TimerContainer>
        <ControlTimerButton />
      </TimerContainer>
      <ButtonContainer>
        <ButtonRest>Long Rest</ButtonRest>
        <ButtonRest>Short Rest</ButtonRest>
      </ButtonContainer>
    </Container>
  );
}
