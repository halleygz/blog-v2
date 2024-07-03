import PropTypes from "prop-types";

const SideJumb = ({ className = "" }) => {
  return (
    <div
      className={`w-[599.6px] bg-tan flex flex-row items-start justify-center py-[435px] px-5 box-border min-w-[599.6px] max-w-full text-left text-45xl text-darkslategray font-lexend-deca mq850:min-w-full mq450:pt-[184px] mq450:pb-[184px] mq450:box-border mq1225:pt-[283px] mq1225:pb-[283px] mq1225:box-border mq1525:flex-1 ${className}`}
    >
      <h1 className="m-0 h-[257px] w-20 relative text-inherit font-bold font-inherit inline-block [transform:_rotate(-90deg)] mq850:text-32xl mq450:text-19xl">
        Sign Up
      </h1>
    </div>
  );
};

SideJumb.propTypes = {
  className: PropTypes.string,
};

export default SideJumb;