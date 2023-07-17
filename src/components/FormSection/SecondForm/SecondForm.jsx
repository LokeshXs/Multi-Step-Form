import classes from "./SecondForm.module.css";
import arcadeImg from "../../../assets/icon-arcade.svg";
import advancedImg from "../../../assets/icon-advanced.svg";
import proImg from "../../../assets/icon-pro.svg";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useRef, useEffect } from "react";

const PlanSelectionSwitch = styled(Switch)(({ theme }) => ({

  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: 'hsl(213, 96%, 18%)',
    opacity: '1',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,

    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,


  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: 'hsl(213, 96%, 18%)',
    opacity: '1',
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'hsl(0, 0%, 100%)',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  '& .MuiSwitch-switchBase': {
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  }
}));

const SecondForm = (props) => {

  const isPlanBillingMonthly = props.formData.isPlanBillingTypeMonthly;
  const [yearlyPlanChecked, setyearlyPlanChecked] = useState(!isPlanBillingMonthly);
  const [selectedPlan, setSelectedPlan] = useState({
    name: props.formData.planInfo.name,
    price: 9,
  });

  const arcadeRef = useRef();
  const advancedRef = useRef();
  const proRef = useRef();


  const yearlyPlanCheckedHandler = () => {

    setyearlyPlanChecked(prevState => !prevState);

  };

  const updateFormState = () => {
    let newFormState = props.currFormState - 1;


    props.formStateChange(newFormState);
  }


  const secondFormSubmitHandler = (event) => {

    event.preventDefault();
    // console.log('yo');

    const planInfo = {
      ...props.formData,
      planInfo: selectedPlan,
      isPlanBillingTypeMonthly: !yearlyPlanChecked,
    }
    props.updateFormData(planInfo);

    const newFormState = props.currFormState + 1;
    props.formStateChange(newFormState);
  };

  const planSelectHandler = (event) => {
    // console.log(event.target.dataset.planprice);
    const planName = event.target.value;
    const planPrice = Number(event.target.dataset.planprice);
    setSelectedPlan((prevState) => {
      return {
        ...prevState,
        name: planName,
        price: planPrice,
      }
    });

  };

  useEffect(() => {
    if (selectedPlan.name === 'Arcade') {
      setSelectedPlan((prevState) => {
        return {
          ...prevState,
          price: Number(`${yearlyPlanChecked ? '90' : '9'}`)
        }
      }
      );
      arcadeRef.current.checked = true;
    } else if (selectedPlan.name === 'Advanced') {
      setSelectedPlan((prevState) => {
        return {
          ...prevState,
          price: Number(`${yearlyPlanChecked ? '120' : '12'}`)
        }
      });
      advancedRef.current.checked = true;
    } else if (selectedPlan.name === 'Pro') {
      setSelectedPlan((prevState) => {
        return {
          ...prevState,
          price: Number(`${yearlyPlanChecked ? '150' : '15'}`)
        }
      });
      proRef.current.checked = true;
    }





  }, [yearlyPlanChecked]);

  return (
    <div className={classes.secondForm}>

      <div className={classes.secondFormInfo}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      <form className={classes.secondFormSection} onSubmit={secondFormSubmitHandler}>

        <div className={classes.planSelectionContainer}>
          <div className={classes.planCard} >
            <input type="radio" id="arcadeOption" name="planOptions" value='Arcade' onChange={planSelectHandler} data-planprice={yearlyPlanChecked ? '90' : '9'} ref={arcadeRef}   />

            <label htmlFor="arcadeOption">
              <img src={arcadeImg} alt="Plan Icon" />
              <div className={classes.planInfo}>
                <h3>Arcade</h3>
                <p className={classes.planPrice}>{yearlyPlanChecked ? '$90/yr' : '$9/mo'}</p>
                {yearlyPlanChecked && <p className={classes.freeTrial}>2 months free</p>}
              </div>
            </label>
          </div>

          <div className={classes.planCard} >
            <input type="radio" id="advancedOption" name="planOptions" value='Advanced' onChange={planSelectHandler} data-planprice={yearlyPlanChecked ? '120' : '12'} ref={advancedRef} />
            <label htmlFor="advancedOption">
              <img src={advancedImg} alt="Plan Icon" />
              <div className={classes.planInfo}>
                <h3>Advanced</h3>
                <p className={classes.planPrice}>{yearlyPlanChecked ? '$120/yr' : '$12/mo'}</p>
                {yearlyPlanChecked && <p className={classes.freeTrial}>2 months free</p>}
              </div>
            </label>
          </div>

          <div className={classes.planCard} >
            <input type="radio" id="proOption" name="planOptions" value='Pro' onChange={planSelectHandler} data-planprice={yearlyPlanChecked ? '150' : '15'} ref={proRef} />
            <label htmlFor="proOption">
              <img src={proImg} alt="Plan Icon" />
              <div className={classes.planInfo}>
                <h3>Pro</h3>
                <p className={classes.planPrice}>{yearlyPlanChecked ? '$150/yr' : '$15/mo'}</p>
                {yearlyPlanChecked && <p className={classes.freeTrial}>2 months free</p>}
              </div>
            </label>
          </div>
        </div>

        <div className={classes.selectPlanSection}>
          <span className={classes.planName}>Monthly</span>
          <PlanSelectionSwitch className={classes.planSwitch} checked={yearlyPlanChecked} onChange={yearlyPlanCheckedHandler} />
          <span className={classes.planName}>Yearly</span>
        </div>


        <div className={classes.ButtonSection}>
          <button type="button" className={classes['go-back__btn']} onClick={updateFormState} >Go Back</button>
          <button type="submit" className={classes['next-step__btn']} >Next Step</button>
        </div>

      </form>

    </div>
  )
};

export default SecondForm;