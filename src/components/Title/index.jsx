import styled from "styled-components";

const StyledTitle = styled.h1`
    font-family: 'GeistUltraLight';
    font-weight: 200;
    color: #2e2e2e;
    letter-spacing: 1rem;
    text-align: center;
`

export default function Title({ children }) {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}