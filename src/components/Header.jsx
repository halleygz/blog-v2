import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/trendinglist");
  }, [navigate]);

  const onAddClick = useCallback(() => {
    navigate("/addblog");
  }, [navigate]);

  return (
    <nav
      className={`m-0 self-stretch flex flex-col items-start justify-start gap-[41px] text-left text-13xl text-darkslategray font-lexend-deca ${className}`}
    >
      <div className="self-stretch h-[66px] relative">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tan w-full h-full" />
        <h1 className="m-0 absolute top-[13px] left-[23px] text-inherit font-normal font-inherit inline-block min-w-[20px] z-[1] mq1050:text-7xl mq450:text-lgi">
          S
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[22px] gap-[25px] text-base">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-[11px]">
          <div
            className="flex-1 flex flex-col items-start justify-start cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0.5">
              <img
                className="h-10 w-10 relative"
                loading="lazy"
                alt=""
                src="/search.svg"
              />
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px]">
              search
            </a>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start cursor-pointer"
          onClick={onGroupContainerClick1}
        >
          <div className="flex flex-row items-start justify-start py-0 px-[13px]">
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/trending-up.svg"
            />
          </div>
          <div className="relative inline-block min-w-[66px]">trending</div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-0 px-[7px] bg-[transparent] self-stretch flex flex-row items-start justify-start">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-start justify-start"
          onClick={onAddClick}
        >
          <div className="flex flex-row items-start justify-start py-0 px-1.5">
            <img
              className="h-10 w-10 relative object-cover"
              loading="lazy"
              alt=""
              src="/navicons@2x.png"
            />
          </div>
          <div className="relative text-xs font-lexend-deca text-black text-center inline-block min-w-[52px]">
            add blog
          </div>
        </button>
      </button>
    </nav>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;