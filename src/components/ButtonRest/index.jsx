import styled from "styled-components"

const UnselectedButton = styled.button`
    background-color: transparent;
    padding: 1rem 2rem;
    color: #81E6D9;
    font-family: 'GeistUltraLight';
    border: 1px solid #81E6D9;
    border-radius: 1rem;
    transition: .5s;
    &:hover {
        background-color: #81E6D9;
        color: black;
        font-weight: bold;
        letter-spacing: .1rem;
    }
`

export default function ButtonRest({ children }) {
    return (
        <UnselectedButton>
            {children}
        </UnselectedButton>
    )
}