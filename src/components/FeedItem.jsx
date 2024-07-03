import PropTypes from "prop-types";

const FeedItem = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start text-left text-base text-darkslategray font-lexend-deca ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0.5">
        <img
          className="h-10 w-10 relative z-[1]"
          loading="lazy"
          alt=""
          src="/search.svg"
        />
      </div>
      <div className="relative inline-block min-w-[52px]">search</div>
    </div>
  );
};

FeedItem.propTypes = {
  className: PropTypes.string,
};

export default FeedItem;