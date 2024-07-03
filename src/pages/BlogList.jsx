import { Button } from "@mui/material";
import Header from "../components/Header";
import FeedItem from "../components/FeedItem";
import FeedTitle from "../components/FeedTitle";

const BlogList = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-y-auto flex flex-row flex-wrap items-start justify-start pt-px px-[15px] pb-0.5 box-border gap-[51.5px] leading-[normal] tracking-[normal] mq750:gap-[26px]">
      <div className="h-[1125px] w-[81.5px] flex flex-row items-end justify-start gap-[14.5px]">
        <div className="h-[801px] flex-1 flex flex-col items-start justify-start">
          <Header />
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gray-100" />
      </div>
      <main className="w-[1497px] flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border max-w-full mq1050:pt-[45px] mq1050:box-border mq750:pt-[29px] mq750:box-border">
        <section className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
          <FeedItem />
          <div className="w-[500px] flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full">
            <div className="w-[260px] flex flex-row items-start justify-start gap-[16px]">
              <Button
                className="h-[30px] w-[116px]"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#e46935",
                  fontSize: "13",
                  borderColor: "#e46935",
                  borderRadius: "100px",
                  "&:hover": { borderColor: "#e46935" },
                  width: 116,
                  height: 30,
                }}
              >
                #meditation
              </Button>
              <Button
                className="h-[30px] flex-1"
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
                #mentalpeace
              </Button>
            </div>
          </div>
          <FeedTitle prop="24" />
          <FeedTitle prop="23" propMinHeight="unset" />
        </section>
      </main>
    </div>
  );
};

export default BlogList;