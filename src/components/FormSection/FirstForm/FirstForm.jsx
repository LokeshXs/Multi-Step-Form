import classes from "./FirstForm.module.css";

import useInput from "../../../CustomHooks/use-input";
import { useEffect } from "react";


const FirstForm = (props) => {

  const { inputValue: nameInputValue, isInputValueValid: isNameInputValueValid, inputHasError: isNameInputHasError, inputValueChangeHandler: nameInputValueChangeHandler, inputBlurHandler: nameInputBlurHandler, reset: nameInputReset } = useInput(value => value !== '');


  const { inputValue: mailInputValue, isInputValueValid: mailInputIsValid, inputHasError: isMailInputHasError, inputValueChangeHandler: mailInputChangeHandler, inputBlurHandler: mailInputBlurHandler, reset: mailInputReset } = useInput(value => value.includes('@'));


  const { inputValue: numberInputvalue, isInputValueValid: isNumberInputValueValid, inputHasError: isNumberInputHasError, inputValueChangeHandler: numberInputChangeHandler, inputBlurHandler: numberInputBlurHandler, reset: numberInputReset } = useInput(value => value !== '');

  useEffect(() => {
    // console.log(props.formData.subscriberData);
    nameInputValueChangeHandler(null, props.formData.subscriberData.name);
    mailInputChangeHandler(null, props.formData.subscriberData.mail);
    numberInputChangeHandler(null, props.formData.subscriberData.number);

  }, []);


  const backBtnPressHandler = () => {
    const newState = props.currFormState - 1;
    props.formStateChange(newState);


  };

  const formIsValid = isNameInputValueValid && mailInputIsValid && isNumberInputValueValid;



  const formSubmitHandler = (event) => {
    event.preventDefault();

    nameInputBlurHandler();
    mailInputBlurHandler();
    numberInputBlurHandler();

    if (!formIsValid) {
      return;
    }

    props.updateFormData({
      ...props.formData,
      subscriberData: {
        name: nameInputValue,
        mail: mailInputValue,
        number: numberInputvalue,
      }
    });

    console.log(nameInputValue);
    console.log(mailInputValue);
    console.log(numberInputvalue);

    const newState = props.currFormState + 1;

    props.formStateChange(newState);

    nameInputReset();
    mailInputReset();
    numberInputReset();



  };


  return (
    <div className={classes.firstForm}>

      <div className={classes.firstFormInfo}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>


      <form className={classes.firstFormSection} onSubmit={formSubmitHandler} >

        <div className={classes.formFieldContainer}>

          <div>
            <label htmlFor="name" className={classes.formLabel}>Name</label>
            {isNameInputHasError && <p className={classes.error}>This field is required</p>}
          </div>
          <input type="text" id="name" className={classes.NameInput} placeholder="e.g. Stephen King" style={{ border: `${isNameInputHasError ? '1px solid hsl(354, 84%, 57%)' : '1px solid hsl(229, 24%, 87%)'}` }} onChange={nameInputValueChangeHandler} onBlur={nameInputBlurHandler} value={nameInputValue} />
        </div>

        <div className={classes.formFieldContainer}>
          <div>
            <label htmlFor="mail" className={classes.formLabel}>Email Address</label>
            {isMailInputHasError && <p className={classes.error}>This field is required</p>}
          </div>

          <input type="mail" id="mail" className={classes.mailInput} placeholder="e.g. stephenKing@lorem.com" style={{ border: `${isMailInputHasError ? '1px solid hsl(354, 84%, 57%)' : '1px solid hsl(229, 24%, 87%)'}` }} onChange={mailInputChangeHandler} onBlur={mailInputBlurHandler} value={mailInputValue} />
        </div>

        <div className={classes.formFieldContainer}>

          <div>
            <label htmlFor="number" className={classes.formLabel}>Phone Number</label>
            {isNumberInputHasError && <p className={classes.error}>This field is required</p>}
          </div>
          <input type="text" id="number" className={classes.numberInput} placeholder="e.g. +91 94642 46724" style={{ border: `${isNumberInputHasError ? '1px solid hsl(354, 84%, 57%)' : '1px solid hsl(229, 24%, 87%)'}` }} onChange={numberInputChangeHandler} onBlur={numberInputBlurHandler} value={numberInputvalue} />
        </div>


        <div className={classes.ButtonSection}>
          <button type="button" onClick={backBtnPressHandler} className={classes['go-back__btn']}>Go Back</button>
          <button type='submit' className={classes['next-step__btn']}>Next Step</button>
        </div>

      </form>

    </div>
  )
};

export default FirstForm;