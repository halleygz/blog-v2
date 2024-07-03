import Header from "../components/Header";
import Feed from "../components/Feed";
import FeedTitle from "../components/FeedTitle";

const BlogList = () => {
  return (
    <div className="w-full h-[832px] relative bg-whitesmoke overflow-y-auto flex flex-row items-start justify-start pt-px px-[15px] pb-[157px] box-border gap-[14.5px] leading-[normal] tracking-[normal] mq700:pl-[14.5px] mq700:pr-[14.5px] mq700:box-border mq900:h-auto">
      <div className="w-[66px] flex flex-col items-start justify-start pt-[170px] px-0 pb-0 box-border mq700:hidden mq700:pt-[110px] mq700:box-border">
        <Header />
      </div>
      <div className="h-[1125px] flex flex-col items-start justify-start py-0 pr-[37px] pl-0 box-border mq700:hidden">
        <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-gray-100" />
      </div>
      <main className="w-[1094px] flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border max-w-[calc(100%_-_133px)] shrink-0 mq700:pt-[45px] mq700:box-border mq700:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full mq700:gap-[21px]">
          <Feed />
          <FeedTitle prop="24" />
        </section>
      </main>
    </div>
  );
};

export default BlogList;