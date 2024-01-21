import { useState } from "react";
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
  PATH_TO_HOME,
  RESET_BUTTON_TEXT,
  SAVE_BUTTON_TEXT,
  SETTINGS_TITLE,
  TYPE_NUMBER,
} from "../../utils/constants";
import { useAlert } from "react-alert";

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

const options = [{ id: uuidv4(), label: BACK_LABEL_VALUE, to: PATH_TO_HOME }];

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
      name: "MINUTES FOR TO FOCUS",
      state: focusTime,
      maxLength: 60,
      minLength: 20,
      setState: setFocusTime,
    },
    {
      id: uuidv4(),
      name: "MINUTES FOR LONG REST",
      state: longRestTime,
      maxLength: 60,
      minLength: 15,
      setState: setLongRestTime,
    },
    {
      id: uuidv4(),
      name: "MINUTES FOR SHORT REST",
      state: shortRestTime,
      maxLength: 60,
      minLength: 5,
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
            label={field.name}
            value={field.state}
            type={TYPE_NUMBER}
          />
        );
      })}
      <ButtonsContainer>
        <ButtonPrimary>{SAVE_BUTTON_TEXT}</ButtonPrimary>
        <ButtonSecondary>{RESET_BUTTON_TEXT}</ButtonSecondary>
      </ButtonsContainer>
      <MenuTools options={options} />
    </FormContainer>
  );
}
