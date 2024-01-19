import styled from "styled-components";
import Title from "../../Title";

const Container = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default function PomodoroPage() {
  return (
    <Container>
      <Title>POMOCODE</Title>
    </Container>
  );
}
