import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FeedTitle.module.css";

const FeedTitle = ({ className = "", prop, propMinHeight }) => {
  const feedTitleStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={[styles.feedTitle, className].join(" ")}
      style={feedTitleStyle}
    >
      <div className={styles.feedDesktop}>
        <div className={styles.feedDate}>
          <div className={styles.mayParent}>
            <div className={styles.may}>
              <p className={styles.p}>{prop}</p>
              <p className={styles.may1}>MAY</p>
            </div>
            <div className={styles.headerTitleWords}>
              <div className={styles.capitalism}>@capitalism</div>
            </div>
          </div>
        </div>
        <div className={styles.theDeathOfFreedomParent}>
          <div className={styles.theDeathOf}>The Death Of Freedom.</div>
          <div className={styles.diamQuisEnimContainer}>
            <span>
              <span>{`Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl `}</span>
              <span className={styles.tionUllamcoLaboris}>
                tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.readMore}>...read more</span>
          </div>
        </div>
        <Button
          className={styles.tag}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#e46935",
            fontSize: "13",
            borderColor: "#e46935",
            borderRadius: "100px",
            "&:hover": { borderColor: "#e46935" },
            width: 116,
            height: 30,
          }}
        >
          #anarchy
        </Button>
        <Button
          className={styles.tag1}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#e46935",
            fontSize: "13",
            borderColor: "#e46935",
            borderRadius: "100px",
            "&:hover": { borderColor: "#e46935" },
            width: 116,
            height: 30,
          }}
        >
          #silence
        </Button>
      </div>
    </div>
  );
};

FeedTitle.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinHeight: PropTypes.any,
};

export default FeedTitle;
