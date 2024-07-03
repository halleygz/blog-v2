import PropTypes from "prop-types";

const FeedDesktop = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center gap-[38px] max-w-full text-right text-13xl text-gray-200 font-lexend-deca mq700:gap-[19px] ${className}`}
    >
      <div className="h-[209px] w-[73px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold mq900:text-7xl mq450:text-lgi">
            <p className="m-0">27</p>
            <p className="m-0">MAY</p>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[53px] text-left text-base">
            <div className="h-5 w-[113px] relative font-light inline-block [transform:_rotate(-90deg)] shrink-0">
              @samurai2099
            </div>
          </div>
        </div>
      </div>
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