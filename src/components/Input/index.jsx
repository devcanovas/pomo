import styled from "styled-components";

const InputContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Label = styled.label`
  font-family: "GeistUltraLight";
  color: #868686;
  margin-bottom: 14px;
  letter-spacing: .1rem;
`;

const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #2e2e2e;
  color: white;
  font-size: 20px;
  padding: 1rem;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export default function Input({ id, label, type, placeholder, value, onChange }) {
  const onType = (event) => {
    onChange(event.target.value)
  }
  return (
    <>
      <InputContainer>
        <Label htmlFor={id}>{label}</Label>
        <InputStyled
          id={id}
          onChange={onType}
          value={value}
          type={type}
          placeholder={placeholder}
        />
      </InputContainer>
    </>
  );
}
