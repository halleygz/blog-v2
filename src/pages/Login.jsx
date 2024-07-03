import InputFields from "../components/InputFields";

const Login = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start gap-[119px] leading-[normal] tracking-[normal] text-left text-45xl text-darkslategray font-lexend-deca lg:flex-wrap lg:gap-[59px] mq750:gap-[30px]">
      <div className="w-[450px] bg-tan flex flex-row items-start justify-center py-[324.5px] px-5 box-border min-w-[450px] max-w-full lg:flex-1 mq750:pt-[211px] mq750:pb-[211px] mq750:box-border mq750:min-w-full">
        <h1 className="m-0 h-[183px] w-20 relative text-inherit font-bold font-inherit inline-block [transform:_rotate(-90deg)] mq450:text-19xl mq1050:text-32xl">
          Login
        </h1>
      </div>
      <div className="w-[602px] flex flex-col items-start justify-start pt-[200px] px-0 pb-0 box-border min-w-[602px] max-w-full text-29xl font-dm-serif-display lg:flex-1 mq750:pt-[130px] mq750:box-border mq750:min-w-full">
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