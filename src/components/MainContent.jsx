import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import InputFields from "./InputFields";
import TagBtns from "./TagBtns";

const MainContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTagClick = useCallback(() => {
    navigate("/blogpost");
  }, [navigate]);

  const onSubmitbtnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='enimQuisVarius']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`w-[814px] flex flex-col items-start justify-start pt-0 px-0 pb-[30.3px] box-border gap-[30px] max-w-full shrink-0 text-left text-xl text-gray-200 font-lexend-deca ${className}`}
    >
      <div className="self-stretch h-[369px] relative inline-block shrink-0 mq450:text-base">
        <p className="m-0">
          <span className="text-45xl">L</span>
          <span>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
            venenatis lectus magna fringilla urna. Aliquet porttitor lacus
            luctus accumsan tortor posuere ac ut. Eleifend quam adipiscing vitae
            proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed nisi
            lacus sed viverra tellus. Urna molestie at elementum eu facilisis
            sed odio morbi. Eget mi proin sed libero enim. Quis varius quam
            quisque id diam vel quam. Duis at tellus at urna condimentum mattis
            pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium
            nibh.
          </span>
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Ut tellus elementum sagittis vitae et leo. Cursus in hac habitasse
          platea dictumst quisque sagittis purus. Odio facilisis mauris sit
          amet. Quis vel eros donec ac odio. Orci a scelerisque purus semper.
          Amet justo donec enim diam vulputate ut pharetra. Arcu odio ut sem
          nulla pharetra diam.
        </p>
      </div>
      <div className="w-[296px] flex flex-row items-start justify-start py-0 px-2.5 box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[44px] mq450:gap-[22px]">
          <TagBtns content="#sometuig" clickAct={onTagClick}/>
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
            onClick={onTagClick}
          >
            Like
          </Button>
          <Button
            className="h-[30px] flex-1 cursor-pointer"
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
            onClick={onTagClick}
          >
            Dislike
          </Button>
        </div>
      </div>
      <div className="w-[802px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[13px] max-w-full text-5xl text-darkslategray">
        <InputFields
          content="Comment"
          name="comment"
          id="comment"
          type="text"
        />
      </div>
      <Buttons content="Comment" bgcolor="#939185" links="blogpost" />
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
