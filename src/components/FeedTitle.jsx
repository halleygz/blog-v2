import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FeedTitle = ({ className = "", prop, propMinHeight }) => {
  const feedTitleStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border min-h-[253px] max-w-full text-right text-13xl text-gray-200 font-lexend-deca ${className}`}
      style={feedTitleStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center relative gap-[48px] max-w-full mq750:gap-[24px] mq1225:flex-wrap">
        <div className="h-[198.5px] w-[73px] flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch relative font-semibold mq450:text-lgi mq750:text-7xl">
              <p className="m-0">{prop}</p>
              <p className="m-0">MAY</p>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[53px] text-left text-base">
              <div className="h-5 w-[94px] relative font-light inline-block [transform:_rotate(-90deg)] shrink-0">
                @capitalism
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[894px] max-w-full text-left text-coral font-dm-serif-display mq1050:min-w-full">
          <div className="relative inline-block max-w-full mq450:text-lgi mq750:text-7xl">
            The Death Of Freedom.
          </div>
          <div className="self-stretch h-[154px] relative text-xl inline-block shrink-0 text-gray-200 font-lexend-deca mq450:text-base">
            <span>
              <span>{`Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl `}</span>
              <span className="text-darkslategray">
                tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </span>
              <span className="text-white">{` `}</span>
            </span>
            <span className="font-extralight text-coral">...read more</span>
          </div>
        </div>
        <Button
          className="h-[30px] w-[116px] !m-[0] absolute bottom-[-15px] left-[123px] z-[1]"
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
          className="h-[30px] w-[116px] !m-[0] absolute bottom-[-15px] left-[255px] z-[1]"
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