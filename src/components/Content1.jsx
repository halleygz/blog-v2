import FeedDesktop from "./FeedDesktop";
import Content from "./Content";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`w-[1094px] flex flex-col items-start justify-start pt-[70px] px-0 pb-0 box-border max-w-full text-left text-xl text-gray-200 font-lexend-deca mq450:pt-[45px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
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
        <Content />
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
