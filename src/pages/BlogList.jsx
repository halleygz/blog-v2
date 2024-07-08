import Header from "../components/Header";
import Content from "../components/Content";

const BlogList = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-y-auto flex flex-row flex-wrap items-start justify-start pt-0 px-[15px] pb-2 box-border gap-[51.5px] leading-[normal] tracking-[normal] mq700:gap-[26px]">
      <div className="h-[824px] w-[81.5px] flex flex-row items-start justify-start gap-[14.5px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[171px] px-0 pb-0 mq700:pt-[111px] mq700:box-border">
          <Header />
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gray-100" />
      </div>
      <Content />
    </div>
  );
};

export default BlogList;