import FeedDesktop from "./FeedDesktop";
import PropTypes from "prop-types";
import styles from "./FeedItem.module.css";

const FeedItem = ({ className = "" }) => {
  return (
    <div className={[styles.feedItem, className].join(" ")}>
      <div className={styles.feedItemHeader}>
        <div className={styles.feedItemTitle}>
          <div className={styles.latestBadge}>
            <div className={styles.latestBadgeChild} />
          </div>
          <a className={styles.latest}>Latest</a>
        </div>
      </div>
      <FeedDesktop />
    </div>
  );
};

FeedItem.propTypes = {
  className: PropTypes.string,
};

export default FeedItem;
