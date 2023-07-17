import { useState } from "react";

const useInput = (validation) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setInputTouched] = useState(false);

  const isInputValueValid = validation(inputValue);
  const inputHasError = !isInputValueValid && isInputTouched;

  const inputValueChangeHandler = (event, value = "") => {
    if (event !== null) {
      setInputValue(event.target.value.trim());
    }
    if (value !== "") {
      setInputValue(value);
    }
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputTouched(false);
  };

  return {
    inputValue,
    isInputValueValid,
    inputHasError,
    inputValueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
