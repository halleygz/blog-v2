import React from 'react'
import { Button } from "@mui/material";
const Buttons = ({content, bgcolor, links=""}) => {
  return (
    <Button
          className="h-12 w-[167.7px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#2f3645",
            fontSize: "20",
            background: bgcolor,
            border: `${bgcolor} solid 1px`,
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#939185" },
            width: 167.7,
            height: 48,
          }}
        >
            <a href={`/${links}`}>
          {content}
            </a>
        </Button>
  )
}

export default Buttons