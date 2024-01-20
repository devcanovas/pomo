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
  color: #FFF;
  margin-bottom: 14px;
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
`

export default function Input({ label, type, placeholder, pattern }) {
  return (
    <>
      <InputContainer>
        <Label>{label}</Label>
        <InputStyled pattern={pattern} type={type} placeholder={placeholder}/>
      </InputContainer>
    </>
  );
}
