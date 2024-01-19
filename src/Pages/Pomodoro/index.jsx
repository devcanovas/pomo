import styled from "styled-components";
import Title from "../../components/Title"
import ButtonRest from "../../components/ButtonRest";

const Container = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ButtonContainer = styled.section`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 100%;
`

export default function PomodoroPage() {
  return (
    <Container>
      <Title>POMOCODE</Title>
      <div>
      </div>
      <ButtonContainer>
        <ButtonRest>Long Rest</ButtonRest>
        <ButtonRest>Short Rest</ButtonRest>
      </ButtonContainer>
    </Container>
  );
}
