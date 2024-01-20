import styled from "styled-components";
import ButtonPrimary from "../../components/ButtonPrimary";
import MenuTools from "../../components/MenuTools";
import Timer from "../../components/Timer";
import Title from "../../components/Title";
import ButtonSecondary from "../../components/ButtonSecondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import {
  LONG_REST_BUTTON_TEXT,
  POMO_TITLE,
  SETTINGS_LABEL,
  PATH_TO_SETTINGS,
  SHORT_REST_BUTTON_TEXT,
  SIZE_ICON_2X,
} from "../../utils/constants";

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

const options = [
  {
    label: SETTINGS_LABEL,
    to: PATH_TO_SETTINGS,
  },
];

export default function PomodoroPage() {
  return (
    <>
      <Container>
        <Title>{POMO_TITLE}</Title>
        <TimerContainer>
          <Circle>
            <Timer />
          </Circle>
          <ButtonSecondary>
            <FontAwesomeIcon icon={faPlayCircle} size={SIZE_ICON_2X} />
          </ButtonSecondary>
        </TimerContainer>
        <ButtonContainer>
          <ButtonPrimary>{LONG_REST_BUTTON_TEXT}</ButtonPrimary>
          <ButtonPrimary>{SHORT_REST_BUTTON_TEXT}</ButtonPrimary>
        </ButtonContainer>
        <MenuTools options={options} />
      </Container>
    </>
  );
}