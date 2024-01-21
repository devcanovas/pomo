import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import Input from "../../components/Input";
import MenuTools from "../../components/MenuTools";
import Title from "../../components/Title";
import {
  BACK_LABEL_VALUE,
  INPUT_NUMBER_PATTERN_WITH_2_CHARS,
  PATH_TO_HOME,
  RESET_BUTTON_TEXT,
  SAVE_BUTTON_TEXT,
  SETTINGS_TITLE,
  TYPE_TEXT,
} from "../../utils/constants";
import { useAlert } from 'react-alert'

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
  const [focusTime, setFocusTime] = useState()
  const alert = useAlert();
  const onSaveSettings = (e) => {
    e.preventDefault();
    alert.show("Teste",
    {
      type: "error"
    })
  };
  return (
    <FormContainer onSubmit={onSaveSettings}>
      <Title>{SETTINGS_TITLE}</Title>
      <Input
        label="Minutes to focus"
        type={TYPE_TEXT}
        pattern={INPUT_NUMBER_PATTERN_WITH_2_CHARS}
      />
      <Input
        label="Long rest"
        type={TYPE_TEXT}
        pattern={INPUT_NUMBER_PATTERN_WITH_2_CHARS}
      />
      <Input
        label="Short rest"
        type={TYPE_TEXT}
        pattern={INPUT_NUMBER_PATTERN_WITH_2_CHARS}
      />
      <ButtonsContainer>
        <ButtonPrimary>{SAVE_BUTTON_TEXT}</ButtonPrimary>
        <ButtonSecondary>{RESET_BUTTON_TEXT}</ButtonSecondary>
      </ButtonsContainer>
      <MenuTools options={options} />
    </FormContainer>
  );
}
