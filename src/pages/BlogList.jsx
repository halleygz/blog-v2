import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FeedDesktop from "../components/FeedDesktop";
import { Button } from "@mui/base";

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
          <Header />
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
            onClick={onFrameContainerClick}
          >
            <FeedDesktop />
            <div className="ml-[-5px] w-[364.1px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[12.1px] max-w-full mq450:flex-wrap">
              <div
                className="w-[118.2px] flex flex-row items-start justify-start p-2.5 box-border min-w-[77px] cursor-pointer"
                onClick={onFrameContainerClick1}
              >
                <button className="cursor-pointer py-[5px] pr-[9px] pl-[11px] bg-palegreen flex-1 rounded-[100px] flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-coral hover:bg-forestgreen hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-200">
                  <div className="relative text-[13px] font-medium font-lexend-deca text-coral text-left inline-block min-w-[76px]">
                    Post Details
                  </div>
                </button>
              </div>
              <div className="w-[100.8px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                <Button
                  className="self-stretch h-[30px]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#e46935",
                    fontSize: "13",
                    borderColor: "#e46935",
                    borderRadius: "100px",
                    "&:hover": { borderColor: "#e46935" },
                    height: 30,
                  }}
                >
                  #Freedom
                </Button>
              </div>
              <div className="w-[100.8px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                <Button
                  className="self-stretch h-[30px]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#e46935",
                    fontSize: "13",
                    borderColor: "#e46935",
                    borderRadius: "100px",
                    "&:hover": { borderColor: "#e46935" },
                    height: 30,
                  }}
                >
                  #Peace
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;