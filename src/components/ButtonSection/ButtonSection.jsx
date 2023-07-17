import classes from "./ButtonSection.module.css";

const ButtonSection = (props) => {

  const prevBtnHandler = () => {
    const newState = props.currentFormState - 1;
    props.formStateChange(newState);
  };

  const formSubmitHandler = () => {
    
    const newState  = props.formState + 1;
    props.formStateChange(newState);
    console.log('Form submitted');

  };

  return <section className={classes.ButtonSection}>
    <button onClick={prevBtnHandler} className={classes['go-back__btn']}>Go Back</button>
    <button  className={classes['next-step__btn']}>Next Step</button>
  </section>
};

export default ButtonSection;