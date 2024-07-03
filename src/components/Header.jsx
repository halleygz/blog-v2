import FeedItem from "./FeedItem";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <nav
      className={`m-0 self-stretch flex flex-col items-end justify-start gap-[25px] text-left text-base text-darkslategray font-lexend-deca ${className}`}
    >
      <div className="self-stretch h-[82px] relative text-13xl">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tan w-[66px] h-[66px]" />
        <h1 className="m-0 absolute top-[13px] left-[23px] text-inherit font-normal font-inherit inline-block min-w-[20px] z-[1] mq900:text-7xl mq450:text-lgi">
          S
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-[11px]">
        <FeedItem />
      </div>
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[141px]">
        <div className="flex flex-row items-start justify-start py-0 px-[13px]">
          <img
            className="h-10 w-10 relative"
            loading="lazy"
            alt=""
            src="/trending-up.svg"
          />
        </div>
        <div className="relative inline-block min-w-[66px] z-[1]">trending</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-2">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start py-0 px-[5px]">
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/add-circle.svg"
            />
          </div>
          <div className="relative inline-block min-w-[50px] z-[1]">create</div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;