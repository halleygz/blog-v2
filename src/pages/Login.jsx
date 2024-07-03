import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <h1 className={styles.login1}>Login</h1>
      </div>
      <div className={styles.loginInner}>
        <div className={styles.welcomeParent}>
          <h1 className={styles.welcome}>Welcome</h1>
          <form className={styles.inputFields}>
            <div className={styles.fieldLabels}>
              <div className={styles.enterYourEmail}>Enter Your Email</div>
              <TextField
                className={styles.inputBoxes}
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#939185" },
                  "& .MuiInputBase-root": {
                    height: "72px",
                    borderRadius: "0px 0px 0px 0px",
                  },
                }}
              />
            </div>
            <div className={styles.fieldLabels1}>
              <div className={styles.enterPassword}>Enter Password</div>
              <TextField
                className={styles.fieldLabelsChild}
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#939185" },
                  "& .MuiInputBase-root": {
                    height: "72px",
                    borderRadius: "0px 0px 0px 0px",
                  },
                }}
              />
            </div>
            <div className={styles.loginActions}>
              <Button
                className={styles.submitbtn}
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
                  width: 271.7,
                  height: 72,
                }}
              >
                Login
              </Button>
              <div className={styles.loginButtons}>
                <div className={styles.alreadyHaveAnContainer}>
                  <p
                    className={styles.alreadyHaveAn}
                  >{`already have an account? `}</p>
                  <p className={styles.logIn}>log-in</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
