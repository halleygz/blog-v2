import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <nav className={[styles.header, className].join(" ")}>
      <div className={styles.profile}>
        <div className={styles.avatar} />
        <div className={styles.s}>S</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.searchAction}>
          <div className={styles.createAction}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search.svg"
            />
          </div>
          <div className={styles.search}>search</div>
        </div>
      </div>
      <div className={styles.trending}>
        <div className={styles.trendingUpWrapper}>
          <img
            className={styles.trendingUpIcon}
            loading="lazy"
            alt=""
            src="/trending-up.svg"
          />
        </div>
        <div className={styles.trending1}>trending</div>
      </div>
      <div className={styles.actions1}>
        <div className={styles.frameParent}>
          <div className={styles.addCircleWrapper}>
            <img
              className={styles.addCircleIcon}
              loading="lazy"
              alt=""
              src="/add-circle.svg"
            />
          </div>
          <div className={styles.create}>create</div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
