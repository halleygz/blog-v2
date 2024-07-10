import { Button } from "@mui/base";
import React from "react";

const TagBtns = ({content, clickAct}) => {
  return (
    <Button
      className="h-[30px] flex-[0.619] cursor-pointer"
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
    >{content}</Button>
  );
};

export default TagBtns;
