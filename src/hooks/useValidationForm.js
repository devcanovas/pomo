import { useDispatch } from "react-redux";

export function useValidationForms() {
  const dispatch = useDispatch();

  function isValidInputs(formInputsConfig, alert) {
    // @TODO implement this function tomorrow
  }
  return { isValidInputs };
}
