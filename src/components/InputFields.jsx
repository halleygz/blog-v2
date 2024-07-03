import { Button } from "@mui/material";
import PropTypes from "prop-types";

const InputFields = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch flex flex-col items-start justify-start gap-[20.7px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[3.5px]">
        <div className="w-[279.5px] relative text-5xl leading-[24px] font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi mq450:leading-[19px]">
          Enter Your full Name
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-12 relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[4.1px]">
        <div className="w-[279.5px] relative text-5xl leading-[24px] font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi mq450:leading-[19px]">
          Enter Your Email
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-12 relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[3.8px]">
        <div className="w-[245.4px] relative text-5xl leading-[24px] font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi mq450:leading-[19px]">
          Enter Password
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-12 relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 gap-[4.4px]">
        <div className="w-[275.5px] relative text-5xl leading-[24px] font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi mq450:leading-[19px]">
          Confirm Password
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-12 relative box-border min-w-[250px] border-[1px] border-solid border-gray-100"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
        <Button
          className="h-12 w-[167.7px]"
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
            width: 167.7,
            height: 48,
          }}
        >
          SIGNUP
        </Button>
        <div className="h-[40.1px] relative text-xl font-lexend-deca text-left inline-block mq450:text-base">
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