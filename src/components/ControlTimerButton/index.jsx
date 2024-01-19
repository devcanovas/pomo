import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const ButtonControl = styled.button`
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

export default function ControlTimerButton() {
  return (
    <ButtonControl>
      <FontAwesomeIcon icon={faPlayCircle} size="2x" />
    </ButtonControl>
  );
}
