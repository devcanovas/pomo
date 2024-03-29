import {
  faCheckCircle,
  faEdit,
  faPlayCircle
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import MenuTools from "../../components/MenuTools";
import Timer from "../../components/Timer";
import Title from "../../components/Title";
import {
  selectIntLongRestTime,
  selectIntShortRestTime,
} from "../../redux/pomodoroSlice";
import {
  LONG_REST_BUTTON_TEXT,
  PATH_TO_SETTINGS,
  POMO_TITLE,
  SETTINGS_LABEL,
  SHORT_REST_BUTTON_TEXT,
  SIZE_ICON_2X,
} from "../../utils/constants";

const Container = styled.div`
  margin-top: 2rem;
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
  margin: 0rem 2rem 4rem 2rem;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
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

const SpanStyled = styled.span``;

const optionsMenutools = [
  {
    id: uuidv4(),
    label: SETTINGS_LABEL,
    to: PATH_TO_SETTINGS,
    icon: faEdit,
  },
];

export default function PomodoroPage() {
  const longRestTime = useSelector(selectIntLongRestTime);
  const shortRestTime = useSelector(selectIntShortRestTime);
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
          <ButtonPrimary>
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ marginRight: ".2rem" }}
            />
            {LONG_REST_BUTTON_TEXT}:{" "}
            <span style={{ color: "gray" }}>{longRestTime}min</span>
          </ButtonPrimary>
          <ButtonPrimary>
            {SHORT_REST_BUTTON_TEXT}:{" "}
            <span style={{ color: "gray" }}>{shortRestTime}min</span>
          </ButtonPrimary>
        </ButtonContainer>
        <MenuTools options={optionsMenutools} />
      </Container>
    </>
  );
}
