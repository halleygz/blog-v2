import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./InputFields.module.css";

const InputFields = ({ className = "" }) => {
  return (
    <form className={[styles.inputFields, className].join(" ")}>
      <div className={styles.inputLabels}>
        <div className={styles.enterYourFull}>Enter Your full Name</div>
        <input className={styles.inputType} type="text" />
      </div>
      <div className={styles.inputLabels1}>
        <div className={styles.enterYourEmail}>Enter Your Email</div>
        <input className={styles.inputLabelsChild} type="text" />
      </div>
      <div className={styles.inputLabels2}>
        <div className={styles.enterPassword}>Enter Password</div>
        <input className={styles.inputLabelsItem} type="text" />
      </div>
      <div className={styles.inputLabels3}>
        <div className={styles.confirmPassword}>Confirm Password</div>
        <input className={styles.inputLabelsInner} type="text" />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.signupButton}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#2f3645",
            fontSize: "20",
            background: "#939185",
            border: "#939185 solid 1px",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#939185" },
            width: 240.1,
            height: 67.6,
          }}
        >
          SIGNUP
        </Button>
        <div className={styles.alreadyHaveAnContainer}>
          <p className={styles.alreadyHaveAn}>{`already have an account? `}</p>
          <p className={styles.logIn}>log-in</p>
        </div>
      </div>
    </form>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
