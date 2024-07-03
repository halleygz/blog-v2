import SideJumb from "../components/SideJumb";
import InputFields from "../components/InputFields";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <SideJumb />
      <div className={styles.content}>
        <div className={styles.signupForm}>
          <div className={styles.welcomeMessage}>
            <h1 className={styles.welcome}>Welcome</h1>
            <div className={styles.letsSignYou}>Let’s sign you up quickly</div>
          </div>
          <InputFields />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
