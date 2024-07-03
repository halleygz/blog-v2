import PropTypes from "prop-types";
import styles from "./FeedDesktop.module.css";

const FeedDesktop = ({ className = "" }) => {
  return (
    <div className={[styles.feedDesktop, className].join(" ")}>
      <div className={styles.feedItemTitleContainer}>
        <div className={styles.mayParent}>
          <div className={styles.may}>
            <p className={styles.p}>27</p>
            <p className={styles.may1}>MAY</p>
          </div>
          <div className={styles.disadvantagesDescription}>
            <div className={styles.samurai2099}>@samurai2099</div>
          </div>
        </div>
      </div>
      <div className={styles.feedItemDescription}>
        <div className={styles.disadvantagesOfFreedom}>
          15 Disadvantages Of Freedom And How You Can Workaround It.
        </div>
        <div className={styles.sideFeedItem}>
          <div className={styles.loremIpsumDolorContainer}>
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.readMore}>...read more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FeedDesktop.propTypes = {
  className: PropTypes.string,
};

export default FeedDesktop;
