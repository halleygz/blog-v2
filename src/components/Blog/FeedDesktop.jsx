
//make sure it recieves the content as props
const FeedDesktop = ({ className = "", content}) => {
  const {title, displayContent} = content
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-10 max-w-full text-right text-13xl text-gray-200 font-lexend-deca mq900:flex-wrap mq700:gap-5 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[639px] max-w-full text-left text-chocolate font-dm-serif-display mq900:min-w-full">
        <h1 className="m-0 self-stretch text-inherit font-normal mq900:text-7xl mq450:text-lg">
          {title}
        </h1>
        <div className="w-[964px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full text-xl text-gray-200 font-lexend-deca">
          <div className="h-[154px] flex-1 inline-block max-w-full mq450:text-base">
            <span>
              {displayContent}
            </span>
            <span className="font-extralight text-coral">...read more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedDesktop;
