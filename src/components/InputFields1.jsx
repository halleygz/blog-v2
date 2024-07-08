import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const InputFields = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch flex flex-col items-start justify-start gap-[29.3px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[9.5px] pr-[13px] pl-0 gap-[4.4px]">
        <div className="w-[216px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
          Enter Your Email
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[56.8px] relative"
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
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[13px] pl-0 gap-[5.1px]">
        <div className="w-[231px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
          Enter Password
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[56.8px] relative"
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
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <Button
          className="h-[56.8px] w-[172.2px]"
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
            width: 172.2,
            height: 56.8,
          }}
        >
          Login
        </Button>
        <div className="w-[245px] flex flex-col items-start justify-start pt-[9.8px] px-0 pb-0 box-border">
          <div className="self-stretch relative text-xl font-lexend-deca text-left">
            <p className="m-0 text-darkslategray">{`don’t have an account? `}</p>
            <p className="m-0 text-tan">Signup</p>
          </div>
        </div>
      </div>
    </form>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;