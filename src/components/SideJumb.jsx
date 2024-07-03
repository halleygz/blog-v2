import PropTypes from "prop-types";
import styles from "./SideJumb.module.css";

const SideJumb = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <h1 className={styles.signUp}>Sign Up</h1>
    </div>
  );
};

SideJumb.propTypes = {
  className: PropTypes.string,
};

export default SideJumb;
