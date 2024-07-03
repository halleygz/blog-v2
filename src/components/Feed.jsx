import { Button } from "@mui/material";
import FeedDesktop from "./FeedDesktop";
import PropTypes from "prop-types";

const Feed = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-xl text-gray-200 font-lexend-deca ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq700:gap-[19px]">
        <div className="w-[281px] flex flex-row items-start justify-center py-0 px-5 box-border">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[19px]">
              <div className="h-1 w-5 relative bg-tan" />
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[61px] mq450:text-base">
              Latest
            </a>
          </div>
        </div>
        <FeedDesktop />
      </div>
      <div className="w-[500px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[260px] flex flex-row items-start justify-start gap-[16px]">
          <Button
            className="h-[30px] w-[116px]"
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
            className="h-[30px] flex-1"
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
    </div>
  );
};

Feed.propTypes = {
  className: PropTypes.string,
};

export default Feed;
