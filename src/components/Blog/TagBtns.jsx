import { Button } from "@mui/material";
import React from "react";

const TagBtns = ({ content, clickAct }) => {
  return (
    
      <div className="flex-1 flex flex-row items-start justify-start gap-[44px] mq450:gap-[22px]">
        <Button
          className="self-stretch h-[30px] m-1.5 cursor-pointer"
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
          // onclick={clickAct}
        >
          {content}
        </Button>
      </div>
  );
};

export default TagBtns;
