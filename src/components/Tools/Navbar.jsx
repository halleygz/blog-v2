import Profile from "./Profile";
import { Button } from "@mui/material";

const Navbar = ({ className = ""}) => {

  return (
    <nav
      className={`self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[5px] box-border max-w-full gap-[20px] text-left text-13xl text-darkslategray font-lexend-deca ${className}`}
    >
      <Profile firstLetter="P"/>
      <div className="w-[493px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full text-base">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div
              className="flex flex-row items-start justify-start cursor-pointer"
              
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px]">
                search
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div
              className="flex flex-row items-start justify-start cursor-pointer"
              
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px]">
                trending
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-center">
            <div
              className="flex flex-row items-start justify-start cursor-pointer"
              
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[70px] whitespace-nowrap">
                add blog
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[44px]">
              Login
            </a>
          </div>
          <Button
            className="h-11 w-[113px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#2f3645",
              fontSize: "16",
              background: "#e6b9a6",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#e6b9a6" },
              width: 113,
              height: 44,
            }}
          >
            SignUp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;