import { useDispatch } from "react-redux";

export function useValidationForms() {
  const dispatch = useDispatch();

  function isValidInputs(formInputsConfig, alert) {
    console.log(formInputsConfig);
  }
  return { isValidInputs };
}
