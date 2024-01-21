import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "GeistUltraLight";
  font-weight: 200;
  color: #6a6a6a;
  letter-spacing: 1rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Title({ children }) {
  return (
    <TitleContainer>
      <StyledTitle>{children}</StyledTitle>
    </TitleContainer>
  );
}
