import PropTypes from "prop-types";


//make sure it recieves the content as props
const FeedDesktop = ({ className = "", content="" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-[38px] max-w-full text-right text-13xl text-gray-200 font-lexend-deca mq900:flex-wrap mq700:gap-[19px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[639px] max-w-full text-left text-chocolate font-dm-serif-display mq900:min-w-full">
        <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq900:text-7xl mq450:text-lgi">
          15 Disadvantages Of Freedom And How You Can Workaround It.
        </h1>
        <div className="w-[964px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full text-xl text-gray-200 font-lexend-deca">
          <div className="h-[154px] flex-1 relative inline-block max-w-full mq450:text-base">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad t mollit anim id est laborum tion ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
              <span className="text-white">{` `}</span>
            </span>
            <span className="font-extralight text-coral">...read more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FeedDesktop.propTypes = {
  className: PropTypes.string,
};

export default FeedDesktop;