import { Button } from "@mui/material";
import PropTypes from "prop-types";

const InputFields = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch flex flex-col items-start justify-start gap-[29.2px] max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[8.3px]">
        <div className="w-[312.1px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
          Enter Your full Name
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-[67.6px] relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[9.5px]">
        <div className="w-[249.4px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
          Enter Your Email
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-[67.6px] relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[9.4px]">
        <div className="w-[233.4px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
          Enter Password
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-[67.6px] relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[9.4px]">
        <div className="w-[276.1px] relative text-5xl font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi">
          Confirm Password
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-[67.6px] relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq850:flex-wrap">
        <Button
          className="h-[67.6px] w-[240.1px]"
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
            width: 240.1,
            height: 67.6,
          }}
        >
          SIGNUP
        </Button>
        <div className="h-[56.3px] w-[342.8px] relative text-xl font-lexend-deca text-left inline-block shrink-0 max-w-full mq450:text-base">
          <p className="m-0 text-darkslategray">{`already have an account? `}</p>
          <p className="m-0 text-tan">log-in</p>
        </div>
      </div>
    </form>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;