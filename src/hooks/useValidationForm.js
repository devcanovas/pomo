import { useDispatch } from "react-redux";
import { setSettingsIsNotValid, setSettingsIsValid } from "../redux/pomodoroSlice";

export const useValidationForms = () => {
  const dispatch = useDispatch();

  function isValidInputs(formInputsConfig, alert) {
    const inputsValidateds = formInputsConfig.map(field => validateMinValueAndMaxValue(field, alert))
    return inputsValidateds.includes(false) ? dispatch(setSettingsIsNotValid()) : dispatch(setSettingsIsValid());
  }
  return { isValidInputs };
}

const validateMinValueAndMaxValue = (field, alert) => {
  if(field.state >= field.minValue && field.state < field.maxValue) {
    return true;
  }
  alert.error(`The field '${field.label}' must be value between ${field.minValue} and ${field.maxValue} minutes.`)
  return false;
}
