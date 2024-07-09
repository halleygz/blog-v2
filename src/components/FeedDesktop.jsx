import { useMemo } from "react";
import PropTypes from "prop-types";

const FeedDesktop = ({
  className = "",
  feedDesktopAlignSelf,
  feedDesktopWidth,
}) => {
  const feedDesktopStyle = useMemo(() => {
    return {
      alignSelf: feedDesktopAlignSelf,
      width: feedDesktopWidth,
    };
  }, [feedDesktopAlignSelf, feedDesktopWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full text-left text-13xl text-chocolate-100 font-dm-serif-display ${className}`}
      style={feedDesktopStyle}
    >
      <h1 className="m-0 w-[983px] relative text-inherit font-normal font-inherit inline-block max-w-[104%] shrink-0 mq1050:text-7xl mq450:text-lgi">
        15 Disadvantages Of Freedom And How You Can Workaround It.
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5 box-border max-w-full text-xl text-gray-200 font-lexend-deca">
        <h3 className="m-0 h-[154px] flex-1 relative text-inherit inline-block max-w-full font-inherit mq450:text-base">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad t mollit anim id est laborum tion ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
            <span className="text-white">{` `}</span>
          </span>
          <span className="font-extralight text-coral">...read more</span>
        </h3>
      </div>
    </div>
  );
};

FeedDesktop.propTypes = {
  className: PropTypes.string,

  /** Style props */
  feedDesktopAlignSelf: PropTypes.any,
  feedDesktopWidth: PropTypes.any,
};

export default FeedDesktop;