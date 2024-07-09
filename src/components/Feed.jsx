import PropTypes from "prop-types";

const Feed = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[141px] text-left text-base text-darkslategray font-lexend-deca ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[13px]">
        <img
          className="h-10 w-10 relative"
          loading="lazy"
          alt=""
          src="/trending-up.svg"
        />
      </div>
      <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px] z-[1]">
        trending
      </a>
    </div>
  );
};

Feed.propTypes = {
  className: PropTypes.string,
};

export default Feed;