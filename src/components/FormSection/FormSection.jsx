import classes from "./FormSection.module.css";

import FirstForm from "./FirstForm/FirstForm";
import SecondForm from "./SecondForm/SecondForm";
import ThirdForm from "./ThirdForm/ThirdForm";
import FourthForm from "./FourthForm/FourthForm";
import { useState, useEffect } from "react";
import ThankYou from "./ThankYou/ThankYou";


let FORM_DATA = {
  subscriberData: {
    name: '',
    mail: '',
    number: '',
  },

  planInfo: {
    name: 'Arcade',
    price: 9,
  },

  addOnsInfo: [],

  isPlanBillingTypeMonthly: true,
}



const FormSection = (props) => {

  const [formData, setFormData] = useState(FORM_DATA);

  const formStateChangeHandler = (newState) => {
    props.changeFormState(newState);
  }

  const updateFormData = (newFormData) => {

    setFormData(newFormData);
    console.log(newFormData);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <section className={classes.FormSection}>
      {/* <Outlet /> */}
      {props.formState === 1 && <FirstForm formSubmit={formStateChangeHandler} currFormState={props.formState} formStateChange={formStateChangeHandler} formData={formData} updateFormData={updateFormData} />}


      {props.formState === 2 && <SecondForm formStateChange={formStateChangeHandler} currFormState={props.formState} formData={formData} updateFormData={updateFormData} />}


      {props.formState === 3 && <ThirdForm formData={formData} currentFormState={props.formState} updateFormData={updateFormData} formStateChangeHandler={formStateChangeHandler} />}

      {props.formState === 4 && <FourthForm formData={formData} currentFormState={props.formState} formStateChangeHandler={formStateChangeHandler} formStateChange={formStateChangeHandler} />}

      {props.formState === 5 && <ThankYou />}


    </section>
  )
};

export default FormSection;