import classes from "./FormProgressSection.module.css";

const formProgressStepsInfo = [
  {
    step: 1,
    stepNumber: 'STEP 1',
    info: 'YOUR INFO',
    active: false,
  },
  {
    step: 2,
    stepNumber: 'STEP 2',
    info: 'SELECT PLANS',
    active: false,
  },
  {
    step: 3,
    stepNumber: 'STEP 3',
    info: 'ADD-ONS',
    active: false,
  },
  {
    step: 4,
    stepNumber: 'STEP 4',
    info: 'SUMMARY',
    active: false,
  },
];


const FormProgressSection = (props) => {

  const formProgressStepsInfoNew = formProgressStepsInfo.map(obj => {
    if (obj.step === props.formState) {
      return { ...obj, active: true };
    }

    return obj;
  });


  return (
    <section className={classes['FormProgress-Section']}>
      <div className={classes.formProgressStepsContainer}>

        {formProgressStepsInfoNew.map((info) => {

          return (<div className={classes.formProgressStep} key={info.step}>
            <div className={`${classes.formStepNumber} ${info.active ? classes.active : ''}`}>{info.step}</div>
            <div className={classes.formStepInfo}>
              <p>{info.stepNumber}</p>
              <h3>{info.info}</h3>
            </div>
          </div>)
        })}
      </div>
    </section>
  )
};

export default FormProgressSection;