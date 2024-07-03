import FeedDesktop from "./FeedDesktop";
import PropTypes from "prop-types";

const FeedItem = ({ className = "" }) => {
  return (
    <div
      className={`w-[1476px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[38px] max-w-full text-left text-xl text-gray-200 font-lexend-deca mq750:gap-[19px] ${className}`}
    >
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
  );
};

FeedItem.propTypes = {
  className: PropTypes.string,
};

export default FeedItem;