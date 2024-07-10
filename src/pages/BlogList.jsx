import { useCallback } from "react";
import { Button } from "@mui/material";
import Header from "../components/Blog/Navbar";
import { useNavigate } from "react-router-dom";
import FeedDesktop from "../components/Blog/FeedDesktop";
import TagBtns from "../components/Blog/TagBtns";

const BlogList = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/blogpost");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    // Please sync "details" to the project
  }, []);

  return (
    <div className="w-full relative bg-whitesmoke overflow-y-auto flex flex-row flex-wrap items-start justify-start pt-0 px-[15px] pb-2 box-border gap-[92.5px] leading-[normal] tracking-[normal] mq1125:gap-[46px] mq750:gap-[23px]">
      <div className="h-[824px] w-[81.5px] flex flex-row items-start justify-start gap-[14.5px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[171px] px-0 pb-0 mq750:pt-[111px] mq750:box-border">
          <Header profile="S"/>
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gray-100" />
      </div>
      <section className="w-[950px] flex flex-col items-start justify-start pt-[66px] px-0 pb-0 box-border max-w-full text-left text-xl text-gray-200 font-lexend-deca mq450:pt-[43px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
          <div className="flex flex-row items-start justify-start py-0 px-[9px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[19px]">
                <div className="h-1 w-5 relative bg-tan" />
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[61px] mq450:text-base">
                Latest
              </a>
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[2px] max-w-full cursor-pointer"
            
          >
            <FeedDesktop />
            <div className="w-[500px] flex flex-row items-start justify-start py-0 px-2.5 box-border">
              
              <TagBtns content="#Something"/>
              <TagBtns content="#and there"/>
              <TagBtns content="post details"/>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
