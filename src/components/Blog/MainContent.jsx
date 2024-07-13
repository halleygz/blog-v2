import { AuthProvider } from "../../contexts/AuthContext";
import Buttons from "../Tools/Buttons";
import { InputFields } from "../Tools/InputFields";
import MarkdownPreview from "@uiw/react-markdown-preview";
import TagBtns from "./TagBtns";

const MainContent = ({ className = "", blogD }) => {
  console.log(blogD)
  const {author, comments, content, createdAt, tags, title} = blogD
  return (
    <>
      <section className="w-[774.6px] flex flex-col items-start justify-start gap-[23px] max-w-full shrink-0 text-left text-[40px] text-coral font-dm-serif-display">
        <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-5xl mq950:text-13xl">
          {title}
        </h1>
        <div className="w-[309.5px] flex flex-col items-start justify-start gap-[11.8px] text-xl text-gray-100 font-lexend-deca">
          <div className="self-stretch relative font-extralight mq450:text-base">
            written by @{author}
          </div>
          <div className="w-[192.8px] h-[36.8px] relative font-extralight inline-block shrink-0 mq450:text-base">
            on {createdAt}
          </div>
        </div>
      </section>
      <section
        className={`w-[814px] flex flex-col items-start justify-start pt-0 px-0 pb-[30.3px] box-border gap-[30px] max-w-full shrink-0 text-left text-xl text-gray-200 font-lexend-deca ${className}`}
      >
        <div className="h-[100%] flex flex-col"> 
          <div className="self-stretch h-[50%] relative inline-block shrink-0 mq450:text-base">
            <MarkdownPreview
                  source={content}
                  style={{
                    background: "transparent",
                    color: "#1c1b1f",
                    fontSize: "20px",
                    fontFamily: "Lexend Deca",
                    margin: "20px",
                  
                  }}
                />
          </div>
          <div className="h-[50%] flex flex-row items-start justify-start  px-2.5 box-border">
            <TagBtns content="#sometuig" />
            <TagBtns content="another" />
            <TagBtns content="#sdquaaa" />
            <TagBtns content="#sometuig" />
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
    </>
  );
};



export default MainContent;
