import InputFields from "../components/InputFields1";

const Login = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start gap-[119px] leading-[normal] tracking-[normal] text-left text-45xl text-darkslategray font-lexend-deca mq750:gap-[30px] mq1125:flex-wrap mq1125:gap-[59px]">
      <div className="w-[450px] bg-tan flex flex-row items-start justify-center py-[376px] px-5 box-border min-w-[450px] max-w-full mq750:pt-[244px] mq750:pb-[244px] mq750:box-border mq750:min-w-full mq1125:flex-1">
        <a className="[text-decoration:none] relative font-bold text-[inherit] mq450:text-19xl mq1050:text-32xl">
          Login
        </a>
      </div>
      <div className="w-[587px] flex flex-col items-start justify-start pt-[200px] px-0 pb-0 box-border min-w-[587px] max-w-full text-29xl font-dm-serif-display mq750:pt-[130px] mq750:box-border mq750:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[45.5px] mq750:gap-[23px]">
          <h1 className="m-0 w-[275px] h-[81.5px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-10xl mq1050:text-19xl">
            Welcome
          </h1>
          <InputFields />
        </div>
      </div>
    </div>
  );
};

export default Login;