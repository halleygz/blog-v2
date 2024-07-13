import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Profile from "./Profile";

const Navbar = ({ className = "", fLetter = "", loggedState, logout }) => {
  return (
    <nav
      className={`self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[5px] box-border max-w-full gap-[20px] text-left text-13xl text-darkslategray font-lexend-deca shadow-2xl ${className}`}
    >
      {loggedState ? <Profile firstLetter={fLetter.toUpperCase()} /> : "Blogga"}
      <div className="w-[493px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full text-base">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          {loggedState ? (
            <>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="flex flex-row items-start justify-start cursor-pointer">
                  <Link className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px]">
                    search
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="flex flex-row items-start justify-start cursor-pointer">
                  <Link to="/bloglist" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px]">
                    trending
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-center">
                <div className="flex flex-row items-start justify-start cursor-pointer">
                  <Link to="/addblog" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[70px] whitespace-nowrap">
                    add blog
                  </Link>
                </div>
              </div>

              <button
                className={`h-12 w-[167.7px] text-2xl text-[#2f3645] font-normal rounded-none`}
                style={{
                  backgroundColor: "#e6b9a6",
                  border: `1px solid #e6b9a6`,
                }}
                onClick={logout}
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="inline mx-auto">
              <span className="m-5">
                <Link to="/login">
                  <Buttons content="Login" bgcolor="#e6b9a6" />
                </Link>
               </span> 
                <Link to="/signup">
                  <Buttons content="Sign Up" bgcolor="#e6b9a6" />
                </Link>
              
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
