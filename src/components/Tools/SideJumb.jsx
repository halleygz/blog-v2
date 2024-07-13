
const SideJumb = ({ className = "", content }) => {
  return (
    <div
      className={`w-[300px] bg-tan flex flex-row items-start justify-center py-[376px] px-5 box-border min-w-[450px] max-w-full text-left text-45xl text-darkslategray font-lexend-deca lg:flex-1 mq750:pt-[244px] mq750:pb-[244px] mq750:box-border mq750:min-w-full mq750:hidden ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap mq450:text-19xl mq1050:text-32xl">
        {content}
      </h1>
    </div>
  );
};


export default SideJumb;