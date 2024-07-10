import { useCallback } from "react";
import { Button } from "@mui/material";
import Navbar from "../components/Blog/Navbar";
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
    <div className="w-full relative bg-whitesmoke overflow-y-auto flex flex-col items-start justify-start pt-4 pb-[373px] pr-[34px] pl-9 box-border gap-[35px] leading-[normal] tracking-[normal] text-left text-xl text-gray-200 font-lexend-deca mq675:gap-[17px]">
      <Navbar profile="S"/>
      
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[34px] box-border max-w-full mt-10">
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
