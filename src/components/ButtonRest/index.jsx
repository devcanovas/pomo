import styled from "styled-components";

const UnselectedButton = styled.button`
  background-color: transparent;
  padding: 1rem 2rem;
  color: #81e6d9;
  font-family: "GeistUltraLight";
  border: 1px solid #81e6d9;
  border-radius: 1rem;
  transition: 0.5s;
  &:hover {
    background-color: #81e6d9;
    color: black;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
`;

export default function ButtonRest({ children, isSelected }) {
  return <UnselectedButton>{children}</UnselectedButton>;
}
