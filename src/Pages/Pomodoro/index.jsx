import styled from "styled-components";
import ButtonRest from "../../components/ButtonRest";
import ControlTimerButton from "../../components/ControlTimerButton";
import Timer from "../../components/Timer";
import Title from "../../components/Title";

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
          <Timer />
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
