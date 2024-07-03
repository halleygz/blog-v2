import PropTypes from "prop-types";

const SideJumb = ({ className = "" }) => {
  return (
    <div
      className={`w-[450px] bg-tan flex flex-row items-start justify-center py-[287.5px] px-5 box-border min-w-[450px] max-w-full text-left text-45xl text-darkslategray font-lexend-deca lg:flex-1 mq750:pt-[187px] mq750:pb-[187px] mq750:box-border mq750:min-w-full ${className}`}
    >
      <h1 className="m-0 h-[257px] w-20 relative text-inherit font-bold font-inherit inline-block [transform:_rotate(-90deg)] mq450:text-19xl mq1050:text-32xl">
        Sign Up
      </h1>
    </div>
  );
};

SideJumb.propTypes = {
  className: PropTypes.string,
};

export default SideJumb;