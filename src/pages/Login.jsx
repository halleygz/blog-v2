import Buttons from "../components/Tools/Buttons";
import {InputFields} from "../components/Tools/InputFields";
import SideJumb from "../components/Tools/SideJumb";

const Login = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start gap-[119px] leading-[normal] tracking-[normal] text-left text-45xl text-darkslategray font-lexend-deca mq1125:flex-wrap mq1125:gap-[59px] mq750:gap-[30px]">
      <SideJumb content="Login"/>
      <div className="w-[587px] flex flex-col items-start justify-start pt-[200px] px-0 pb-0 box-border min-w-[587px] max-w-full text-29xl font-dm-serif-display mq1125:flex-1 mq750:pt-[130px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[45.5px] mq750:gap-[23px]">
          <h1 className="m-0 w-[275px] h-[81.5px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-10xl mq1050:text-19xl">
            Welcome
          </h1>
          <form className={`m-0 self-stretch flex flex-col items-start justify-start gap-[20.7px] h-2`}>
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
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <Buttons content="Login" bgcolor="#939185" links="bloglist" />
              <div className="h-[40.1px] relative text-xl font-lexend-deca text-left inline-block mq450:text-base">
                <p className="m-0 text-darkslategray">{`don't have an account? `}</p>
                <p className="m-0 text-tan">Sign Up</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;