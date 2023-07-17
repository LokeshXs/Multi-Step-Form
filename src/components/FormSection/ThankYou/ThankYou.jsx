import classes from "./thankYou.module.css";
import thankYouIcon from "../../../assets/icon-thank-you.svg";

const ThankYou = () =>{

  return (
    <div className={classes.thankYouSection}>
      <div className={classes.thankYouContainer}>
        <img src={thankYouIcon} alt="Thank you icon" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>

      </div>
      
    </div>
  );
};

export default ThankYou;