import { Button } from "@mui/material";
import Header from "../components/Header";
import FeedItem from "../components/FeedItem";
import FeedTitle from "../components/FeedTitle";
import styles from "./BlogList.module.css";

const BlogList = () => {
  return (
    <div className={styles.blogList}>
      <div className={styles.latestTitleContainerParent}>
        <div className={styles.latestTitleContainer}>
          <Header />
        </div>
        <div className={styles.frameChild} />
      </div>
      <main className={styles.meditationTagContainer}>
        <section className={styles.feedHeader}>
          <FeedItem />
          <div className={styles.feedItemTags}>
            <div className={styles.meditationTags}>
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
                #meditation
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
                  height: 30,
                }}
              >
                #mentalpeace
              </Button>
            </div>
          </div>
          <FeedTitle prop="24" />
          <FeedTitle prop="23" propMinHeight="unset" />
        </section>
      </main>
    </div>
  );
};

export default BlogList;
