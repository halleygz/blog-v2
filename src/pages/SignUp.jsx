import SideJumb from "../components/SideJumb";
import InputFields from "../components/InputFields";

const SignUp = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start gap-[191.4px] leading-[normal] tracking-[normal] text-left text-29xl text-darkslategray font-dm-serif-display mq850:gap-[48px] mq450:gap-[24px] mq1225:gap-[96px] mq1525:flex-wrap">
      <SideJumb />
      <div className="w-[801.6px] flex flex-col items-start justify-start pt-[175px] px-0 pb-0 box-border min-w-[801.6px] max-w-full mq850:pt-[74px] mq850:box-border mq850:min-w-full mq1225:pt-[114px] mq1225:box-border mq1525:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[59.6px] max-w-full mq450:gap-[30px]">
          <div className="w-[420.7px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[5.8px] max-w-full">
            <h1 className="m-0 w-[280.2px] relative text-inherit font-normal font-inherit inline-block mq850:text-19xl mq450:text-10xl">
              Welcome
            </h1>
            <div className="self-stretch relative text-5xl font-light font-lexend-deca text-darkgray mq450:text-lgi">
              Let’s sign you up quickly
            </div>
          </div>
          <InputFields />
        </div>
      </div>
    </div>
  );
};

export default SignUp;