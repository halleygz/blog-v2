import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const Login = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-end justify-start gap-[106.7px] leading-[normal] tracking-[normal] text-left text-45xl text-darkslategray font-lexend-deca mq825:gap-[53px] mq450:gap-[27px] mq1575:flex-wrap">
      <div className="w-[623.3px] bg-tan flex flex-row items-start justify-center py-[472px] px-5 box-border min-w-[623.3px] max-w-full mq825:min-w-full mq1250:pt-[307px] mq1250:pb-[307px] mq1250:box-border mq450:pt-[200px] mq450:pb-[200px] mq450:box-border mq1575:flex-1">
        <h1 className="m-0 h-[183px] w-20 relative text-inherit font-bold font-inherit inline-block [transform:_rotate(-90deg)] mq825:text-32xl mq450:text-19xl">
          Login
        </h1>
      </div>
      <div className="w-[907.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[289px] box-border min-w-[907.1px] min-h-[837px] max-w-full text-29xl font-dm-serif-display mq825:pb-[188px] mq825:box-border mq1250:min-w-full mq450:pb-[122px] mq450:box-border mq1575:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[58px] max-w-full mq450:gap-[29px]">
          <h1 className="m-0 w-[291.3px] h-[103.3px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq825:text-19xl mq450:text-10xl">
            Welcome
          </h1>
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[37.2px] shrink-0 max-w-full mq450:gap-[19px]">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-3 pr-0.5 pl-0 gap-[12px]">
              <div className="w-[282.2px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
                Enter Your Email
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[72px] relative"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#939185" },
                  "& .MuiInputBase-root": {
                    height: "72px",
                    borderRadius: "0px 0px 0px 0px",
                  },
                }}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[11.9px]">
              <div className="w-[264.1px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
                Enter Password
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[72px] relative"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#939185" },
                  "& .MuiInputBase-root": {
                    height: "72px",
                    borderRadius: "0px 0px 0px 0px",
                  },
                }}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq450:hidden">
              <Button
                className="h-[72px] w-[271.7px] mq450:pl-5 mq450:pr-5 mq450:box-border"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#2f3645",
                  fontSize: "20",
                  background: "#939185",
                  border: "#939185 solid 1px",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#939185" },
                  width: 271.7,
                  height: 72,
                }}
              >
                Login
              </Button>
              <div className="w-[387.9px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-full">
                <div className="self-stretch h-[60px] relative text-xl font-lexend-deca text-left inline-block shrink-0">
                  <p className="m-0 text-darkslategray">{`already have an account? `}</p>
                  <p className="m-0 text-tan">log-in</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;