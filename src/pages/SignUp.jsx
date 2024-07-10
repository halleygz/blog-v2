import SideJumb from "../components/Tools/SideJumb";
import {InputFields} from "../components/Tools/InputFields";
import Buttons from "../components/Tools/Buttons";

const SignUp = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-end justify-start gap-[147px] leading-[normal] tracking-[normal] text-left text-29xl text-darkslategray font-dm-serif-display lg:flex-wrap lg:gap-[73px] mq450:gap-[18px] mq750:gap-[37px]">
      <SideJumb content="Sign Up" />
      <div className="w-[575px] flex flex-col items-start justify-start pt-0 px-0 pb-[140px] box-border min-w-[575px] min-h-[691px] max-w-full lg:flex-1 mq750:pb-[91px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[42px] mq750:gap-[21px]">
          <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
            <h1 className="m-0 relative text-inherit leading-[50.9px] font-normal font-inherit mq450:text-10xl mq450:leading-[31px] mq1050:text-19xl mq1050:leading-[41px]">
              Welcome
            </h1>
            <div className="relative text-5xl leading-[23.1px] font-light font-lexend-deca text-darkgray z-[1] mq450:text-lgi mq450:leading-[18px]">
              Let’s sign you up quickly
            </div>
          </div>
          <form className={`m-0 self-stretch flex flex-col items-start justify-start gap-[20.7px] h-2`}>
            <InputFields
              content="Enter your full name"
              name="fullName"
              id="fullName"
              type="text"
            />
            <InputFields
              content="Enter your email"
              name="email"
              id="email"
              type="email"
            />
            <InputFields
              content="Enter your password"
              name="password"
              id="password"
              type="password"
            />
            <InputFields
              content="Confirm Password"
              name="confirmPass"
              id="confirmPass"
              type="password"
            />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <Buttons content="Sign Up" bgcolor="#939185" links="bloglist" />
              <div className="h-[40.1px] relative text-xl font-lexend-deca text-left inline-block mq450:text-base">
                <p className="m-0 text-darkslategray">{`already have an account? `}</p>
                <p className="m-0 text-tan">log-in</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
