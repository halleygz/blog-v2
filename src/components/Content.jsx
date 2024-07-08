import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`w-[500px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <div className="w-[260px] flex flex-row items-start justify-start gap-[16px]">
        <Button
          className="h-[30px] w-[116px]"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#e46935",
            fontSize: "13",
            borderColor: "#e46935",
            borderRadius: "100px",
            "&:hover": { borderColor: "#e46935" },
            width: 116,
            height: 30,
          }}
        >
          #meditation
        </Button>
        <Button
          className="h-[30px] flex-1"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#e46935",
            fontSize: "13",
            borderColor: "#e46935",
            borderRadius: "100px",
            "&:hover": { borderColor: "#e46935" },
            height: 30,
          }}
        >
          #mentalpeace
        </Button>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
