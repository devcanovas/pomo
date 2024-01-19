import styled from "styled-components";
import Title from "../../Title";

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
      <ButtonContainer>
        <button>Teste</button>
        <button>Teste</button>
      </ButtonContainer>
    </Container>
  );
}