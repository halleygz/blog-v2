import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-5 px-[52px] pb-7 box-border gap-[113px] leading-[normal] tracking-[normal] text-left text-base text-darkslategray font-lexend-deca mq450:gap-[28px] mq675:gap-[56px] mq675:pl-[26px] mq675:pr-[26px] mq675:box-border">
      <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-11xl text-darkslategray font-lexend-deca">
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[106px] whitespace-nowrap">
            Blogga
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-[48px] text-base mq450:hidden mq450:gap-[24px]">
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px]">
              trending
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[44px]">
              Login
            </a>
          </div>
          <Button
            className="h-11 w-[113px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#2f3645",
              fontSize: "16",
              background: "#e6b9a6",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#e6b9a6" },
              width: 113,
              height: 44,
            }}
          >
            SignUp
          </Button>
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-11 pr-0 pl-px box-border max-w-full text-center text-[88px] text-darkslategray font-lexend-deca mq675:pb-[29px] mq675:box-border">
        <div className="w-[725px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-dm-serif-display text-black mq450:text-7xl mq750:text-[44px]">
            Spread your ideas without limits
          </h1>
          <h2 className="m-0 self-stretch relative text-11xl font-normal font-inherit mq450:text-[18px] mq750:text-5xl">
            A place to read, write and deepen your thoughts
          </h2>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-left text-xl">
            <div className="bg-tan flex flex-row items-start justify-start py-4 px-[69px] whitespace-nowrap mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative font-medium">SignUp to read</div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="relative">© BLOGGA. ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
};

export default Home;
