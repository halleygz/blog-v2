import MainContent from "../components/Blog/MainContent";

const BlogPost = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[67px] px-[227px] pb-[45px] box-border gap-[22.9px] leading-[normal] tracking-[normal] text-left text-13xl text-darkslategray font-lexend-deca mq450:pl-5 mq450:pr-5 mq450:box-border mq700:pl-[113px] mq700:pr-[113px] mq700:box-border">
      <section className="w-[774.6px] flex flex-col items-start justify-start gap-[23px] max-w-full shrink-0 text-left text-[40px] text-coral font-dm-serif-display">
        <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-5xl mq950:text-13xl">
          15 Disadvantages Of Freedom And How You Can Workaround It.
        </h1>
        <div className="w-[309.5px] flex flex-col items-start justify-start gap-[11.8px] text-xl text-gray-100 font-lexend-deca">
          <div className="self-stretch relative font-extralight mq450:text-base">
            written by @samurai2099
          </div>
          <div className="w-[192.8px] h-[36.8px] relative font-extralight inline-block shrink-0 mq450:text-base">
            on 27 may 2022
          </div>
        </div>
      </section>
      <MainContent />
      <div className="w-[813.5px] flex flex-row items-start justify-start pt-0 px-0.5 pb-[29.3px] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-end justify-start gap-[21.1px] max-w-full shrink-0">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="h-[66px] w-[66px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tan w-full h-full" />
              <h2 className="m-0 absolute top-[13px] left-[23px] text-inherit font-normal font-inherit inline-block min-w-[20px] z-[1] mq450:text-lgi mq950:text-7xl">
                S
              </h2>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[462px] max-w-full text-xl text-gray-200 mq975:min-w-full">
              <div
                className="self-stretch relative mq450:text-base"
                data-scroll-to="enimQuisVarius"
              >
                enim. Quis varius quam quisque id diam vel quam. Duis at tellus
                at urna condimentum mattis
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        </div>
      </div>
      <section className="w-[813.5px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full shrink-0 text-left text-13xl text-darkslategray font-lexend-deca">
        <div className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
            <div className="h-[66px] w-[66px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tan w-full h-full" />
              <h2 className="m-0 absolute top-[13px] left-[21px] text-inherit font-normal font-inherit z-[1] mq450:text-lgi mq950:text-7xl">
                H
              </h2>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[462px] max-w-full text-xl text-gray-200 mq975:min-w-full">
              <div className="self-stretch relative mq450:text-base">
                enim. Quis varius quam quisque id diam vel quam. Duis at tellus
                at urna condimentum mattis
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
