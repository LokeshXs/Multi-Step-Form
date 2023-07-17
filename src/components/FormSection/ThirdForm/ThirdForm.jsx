import classes from "./ThirdForm.module.css";
import { useState, useEffect } from "react";


const ThirdForm = (props) => {
  const [onlineService, setOnlineService] = useState(false);
  const [largeStorage, setLargeStorage] = useState(false);
  const [customizableProfile, setcustomizableProfile] = useState(false);
  const [addOnsSelected, setAddOnsSelected] = useState(props.formData.addOnsInfo);


  const isFormBillMonthly = props.formData.isPlanBillingTypeMonthly;
  // const addOnsSelected = props.formData.addOnsInfo;

  console.log(addOnsSelected);
  const changeAddOnState = (event) => {

    // console.log(event.target);
    const value = event.target.value;
    if (value === 'Online Service') {
      setOnlineService(prevState => !prevState);
    }

    if (value === 'Large Storage') {
      setLargeStorage(prevState => !prevState)
    }

    if (value === 'Customizable Profile') {
      setcustomizableProfile(prevState => !prevState);
    }

    const addOnName = event.target.value;
    const addOnPrice = +event.target.dataset.addonprice;
    const isChecked = event.target.checked;
    if (!isChecked) {
      const newArray = addOnsSelected.filter((addOnObj) => addOnObj.name !== addOnName);
      setAddOnsSelected(newArray);
    } else {
      const addOnObj = {
        name: addOnName,
        price: addOnPrice,
      }

      setAddOnsSelected(prevState => [...prevState, addOnObj]);
      // console.log(addOnObj);
    }
  };

  const updateFormState = () => {
    const newFormState = props.currentFormState - 1;

    props.formStateChangeHandler(newFormState);
  }




  const thirdFormSubmitHandler = (event) => {

    event.preventDefault();

    const currentFormData = props.formData;

    const updatedFormData = {
      ...currentFormData, addOnsInfo: addOnsSelected,
      isPlanBillingTypeMonthly: isFormBillMonthly,
    };

    props.updateFormData(updatedFormData);

    const newFormState = props.currentFormState + 1;
    props.formStateChangeHandler(newFormState);

  };

  const checkedStatus = (serviceName) => {
    const serviceObj = addOnsSelected.find(obj => obj.name === serviceName);

    if (serviceObj !== undefined) {
      return true;
    }

    return false;

  };



  return (
    <div className={classes.thirdForm}>

      <div className={classes.thirdFormInfo}>
        <h1>Pick add-ons</h1>
        <p>Add-ons  help enhance your gaming experience.</p>
      </div>

      <form className={classes.thirdFormSection} onSubmit={thirdFormSubmitHandler}  >

        <div className={classes.addOnContainer} style={{
          border: `${onlineService ? '1px solid hsl(243, 100%, 62%)' : ''}`,
          backgroundColor: `${onlineService ? 'hsl(217, 100%, 97%)' : ''}`
        }}>
          <input type="checkbox" name="online-service" value="Online Service" data-addonprice={isFormBillMonthly ? '1' : '10'} id="onlineService" onChange={changeAddOnState} checked={checkedStatus('Online Service')} />
          <label htmlFor="onlineService" className={classes.addOnLabel}>
            <div className={classes.addOnInfoContainer}>
              <h3>Online Service</h3>
              <p>Access to multiplayer games</p>
            </div>
            <div className={classes.addOnPriceContainer}>
              <p>{`${isFormBillMonthly ? '+$1/mo' : '+$10/yr'}`}</p>
            </div>
          </label>
        </div>

        <div className={classes.addOnContainer} style={{
          border: `${largeStorage ? '1px solid hsl(243, 100%, 62%)' : ''}`,
          backgroundColor: `${largeStorage ? 'hsl(217, 100%, 97%)' : ''}`
        }}>
          <input type="checkbox" name="large-storage" value="Large Storage" data-addonprice={isFormBillMonthly ? '2' : '20'} id="largeStorage" onChange={changeAddOnState} checked={checkedStatus('Large Storage')} />
          <label htmlFor="largeStorage" className={classes.addOnLabel}>
            <div className={classes.addOnInfoContainer}>
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div className={classes.addOnPriceContainer}>
              <p>{`${isFormBillMonthly ? '+$2/mo' : '+$20/yr'}`}</p>
            </div>
          </label>
        </div>

        <div className={classes.addOnContainer} style={{
          border: `${customizableProfile ? '1px solid hsl(243, 100%, 62%)' : ''}`,
          backgroundColor: `${customizableProfile ? 'hsl(217, 100%, 97%)' : ''}`
        }}>
          <input type="checkbox" name="customizable-profile" value="Customizable Profile" data-addonprice={isFormBillMonthly ? '2' : '20'} id="customizableProfile" onChange={changeAddOnState} checked={checkedStatus('Customizable Profile')} />
          <label htmlFor="customizableProfile" className={classes.addOnLabel}>
            <div className={classes.addOnInfoContainer}>
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
            <div className={classes.addOnPriceContainer}>
              <p>{`${isFormBillMonthly ? '+$2/mo' : '+$20/yr'}`}</p>
            </div>
          </label>
        </div>
        <div className={classes.ButtonSection}>
          <button type="button" className={classes['go-back__btn']} onClick={updateFormState}>Go Back</button>
          <button type='submit' className={classes['next-step__btn']}>Next Step</button>
        </div>
      </form>

    </div>
  );
};

export default ThirdForm;