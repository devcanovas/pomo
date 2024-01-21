import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import Input from "../../components/Input";
import MenuTools from "../../components/MenuTools";
import Title from "../../components/Title";
import { useValidationForms } from "../../hooks/useValidationForm";
import {
  selectIntFocusTime,
  selectIntLongRestTime,
  selectIntShortRestTime,
} from "../../redux/pomodoroSlice";
import {
  BACK_LABEL_VALUE,
  LABEL_MINUTES_FOR_LONG_REST,
  LABEL_MINUTES_FOR_SHORT_REST,
  LABEL_MINUTES_FOR_TO_FOCUS,
  MAX_LENGTH_60,
  MIN_LENGTH_15,
  MIN_LENGTH_20,
  MIN_LENGTH_5,
  PATH_TO_HOME,
  RESET_BUTTON_TEXT,
  SAVE_BUTTON_TEXT,
  SETTINGS_TITLE,
  TYPE_NUMBER,
} from "../../utils/constants";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleUp,
  faCaretSquareRight,
  faCircleDot,
  faCircleLeft,
  faFloppyDisk,
  faQuestionCircle,
  faRegistered,
  faTimesCircle,
  faTired,
  faWindowRestore,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormContainer = styled.form`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-around;
  width: 100%;
`;

const optionsMenuTools = [
  {
    id: uuidv4(),
    label: BACK_LABEL_VALUE,
    to: PATH_TO_HOME,
    icon: faCircleLeft,
  },
];

export default function SettingsPage() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { isValidInputs } = useValidationForms();
  const [focusTime, setFocusTime] = useState(useSelector(selectIntFocusTime));
  const [longRestTime, setLongRestTime] = useState(
    useSelector(selectIntLongRestTime)
  );
  const [shortRestTime, setShortRestTime] = useState(
    useSelector(selectIntShortRestTime)
  );

  const formInputsConfig = [
    {
      id: uuidv4(),
      label: LABEL_MINUTES_FOR_TO_FOCUS,
      state: focusTime,
      maxLength: MAX_LENGTH_60,
      minLength: MIN_LENGTH_20,
      setState: setFocusTime,
    },
    {
      id: uuidv4(),
      label: LABEL_MINUTES_FOR_LONG_REST,
      state: longRestTime,
      maxLength: MAX_LENGTH_60,
      minLength: MIN_LENGTH_15,
      setState: setLongRestTime,
    },
    {
      id: uuidv4(),
      label: LABEL_MINUTES_FOR_SHORT_REST,
      state: shortRestTime,
      maxLength: MAX_LENGTH_60,
      minLength: MIN_LENGTH_5,
      setState: setShortRestTime,
    },
  ];

  const onSaveSettings = (e) => {
    e.preventDefault();
    isValidInputs(formInputsConfig, alert);
  };

  return (
    <FormContainer onSubmit={onSaveSettings}>
      <Title>{SETTINGS_TITLE}</Title>
      {formInputsConfig.map((field) => {
        return (
          <Input
            id={field.id}
            key={field.id}
            onChange={(value) => field.setState(value)}
            label={field.label}
            value={field.state}
            type={TYPE_NUMBER}
          />
        );
      })}
      <ButtonsContainer>
        <ButtonPrimary>
          <FontAwesomeIcon
            icon={faFloppyDisk}
            style={{ marginRight: ".5rem" }}
          />
          {SAVE_BUTTON_TEXT}
        </ButtonPrimary>
        <ButtonSecondary>
          <FontAwesomeIcon
            icon={faCircleDot}
            style={{ marginRight: ".5rem" }}
          />
          {RESET_BUTTON_TEXT}
        </ButtonSecondary>
      </ButtonsContainer>
      <MenuTools options={optionsMenuTools} />
    </FormContainer>
  );
}
