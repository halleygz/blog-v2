import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const AddBlog = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start gap-[71px] leading-[normal] tracking-[normal] text-center text-45xl text-darkslategray font-lexend-deca lg:flex-wrap lg:gap-[35px] mq750:gap-[18px]">
      <div className="w-[450px] bg-tan flex flex-row items-start justify-start py-[336px] px-14 box-border min-w-[450px] max-w-full lg:flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[218px] mq750:pb-[218px] mq750:box-border mq750:min-w-full">
        <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-19xl mq1050:text-32xl">
          <p className="m-0">{`Try `}</p>
          <p className="m-0">Buddy</p>
        </h1>
      </div>
      <div className="w-[670px] flex flex-col items-start justify-start pt-[46px] px-0 pb-0 box-border min-w-[670px] max-w-full text-left text-5xl lg:flex-1 mq450:pt-5 mq450:box-border mq750:min-w-full mq1050:pt-[30px] mq1050:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-center text-29xl font-dm-serif-display mq750:pl-6 mq750:pr-6 mq750:box-border">
            <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-19xl">
              What’s in your mind today?
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[25.8px] gap-[4.4px]">
            <div className="w-[252.1px] relative font-light inline-block shrink-0 mq450:text-lgi">
              Title
            </div>
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[56.8px] relative shrink-0"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#939185" },
                "& .MuiInputBase-root": {
                  height: "56.8px",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[4px]">
            <div className="w-[269.6px] relative leading-[22.7px] font-light inline-block mq450:text-lgi mq450:leading-[18px]">
              Content
            </div>
            <textarea
              className="bg-[transparent] h-[253.3px] w-auto [outline:none] self-stretch relative box-border border-[1px] border-solid border-gray-100"
              rows={13}
              cols={34}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[34.2px] box-border gap-[20.3px] max-w-full mq750:flex-wrap">
            <Button
              className="h-[46.8px] w-[162.7px]"
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
                width: 162.7,
                height: 46.8,
              }}
            >
              Add Tags
            </Button>
            <div className="h-[46px] flex-1 relative box-border min-w-[317px] max-w-full border-[1px] border-solid border-gray-100" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <Button
              className="h-[56.8px] w-[191.7px]"
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
                width: 191.7,
                height: 56.8,
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
