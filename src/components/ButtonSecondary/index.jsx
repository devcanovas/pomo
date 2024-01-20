
import styled from "styled-components";

const Button = styled.button`
  color: #b17ad8;
  background: transparent;
  border: 1px solid #B17AD8;
  padding: .75rem 2rem;
  border-radius: 7px;
  transition: .5s;
  &:hover {
    cursor: pointer;
    background-color: #B17AD8;
    color: black;
  }
`;

export default function ButtonSecondary({children}) {
  return (
    <Button>
      {children}
    </Button>
  );
}
