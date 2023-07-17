import classes from "./FourthForm.module.css";

const FourthForm = (props) => {
  const isPlanMonthly = props.formData.isPlanBillingTypeMonthly;
  const planName = props.formData.planInfo.name;
  const planPrice = props.formData.planInfo.price;
  const addOns = props.formData.addOnsInfo;

  let total = planPrice;
  addOns.forEach(obj => {
    total += obj.price;
  })

  const jumpToPlanSectionHandler = (event) => {
    event.preventDefault();

    props.formStateChangeHandler(2);
  }

  const updateFormState = () => {
    let newFormState = props.currentFormState - 1;


    props.formStateChange(newFormState);

  }

  const updateFormStateNext = () => {
    let newFormState = props.currentFormState + 1;
    props.formStateChange(newFormState);
  }

  return (
    <div className={classes.fourthForm}>

      <div className={classes.fourthFormInfo}>
        <h1>Finishing up</h1>
        <p>Double-check everything looks Ok before confirming</p>
      </div>


      <section className={classes.fourthFormSection} >

        <div className={classes.summaryContainer}>
          <div className={classes.allServices}>
            <div className={classes.planSummary}>
              <div>
                <h3>{planName} ({isPlanMonthly ? 'Monthly' : 'Yearly'})</h3>
                <a href="#" className={classes.planChangeLink} onClick={jumpToPlanSectionHandler}>Change</a>
              </div>

              <p>{`$${planPrice}/${isPlanMonthly ? 'mo' : 'yr'}`}</p>
            </div>

            <hr />
            <div className={classes.addOnSummaryContainer}>

              {addOns.map(addOnObj => {
                return (<div className={classes.addOnSummary} key={addOnObj.name}>
                  <p className={classes.addOnName}>
                    {addOnObj.name}
                  </p>

                  <p className={classes.addOnPrice}>{`+$${addOnObj.price}/${isPlanMonthly ? 'mo' : 'yr'}`}</p>
                </div>)
              })}
            </div>

          </div>

          <div className={classes.totalAmount}>
            <p>Total (per month)</p>
            <strong>{`+$${total}/${isPlanMonthly ? 'mo' : 'yr'}`}</strong>
          </div>

        </div>

        <div className={classes.ButtonSection}>
          <button type="button" className={classes['go-back__btn']} onClick={updateFormState}>Go Back</button>
          <button type='button' onClick={updateFormStateNext} className={classes['confirm__btn']}>Confirm</button>
        </div>
      </section>
    </div>
  )
};
export default FourthForm;