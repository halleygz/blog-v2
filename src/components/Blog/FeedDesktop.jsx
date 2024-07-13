import MarkdownPreview from "@uiw/react-markdown-preview";
import { Link } from "react-router-dom";

//make sure it recieves the content as props
const FeedDesktop = ({ className = "", contentData }) => {
  console.log(contentData)
  const { title, snippetContent,id } = contentData;
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-10  text-right text-13xl text-gray-200 font-lexend-deca mq900:flex-wrap mq700:gap-5 ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-5 min-w-[100%] max-w-full text-left text-chocolate font-dm-serif-display mq900:min-w-[100%]">
          <h1 className="m-0 self-stretch text-inherit font-normal mq900:text-7xl mq450:text-lg">
            <Link className="no-underline text-[#DF6633]" to={`/blogpost/${id}`}>
                {title}
            </Link>
          </h1>
        <div className="inline">
          <div className="m-0 w-[964px] flex flex-row items-center justify-center py-0 px-2 box-border max-w-full text-xl text-gray-200 font-lexend-deca">
            <div className="m-0 line-clamp-3 h-[100%] flex-1 inline-block max-w-[85%] mq450:text-base mq900:text-7xl mq900:min-w-[100%]">
              <span>
                <MarkdownPreview
                  source={snippetContent}
                  style={{
                    background: "transparent",
                    color: "#1c1b1f",
                    fontSize: "20px",
                    fontFamily: "Lexend Deca",
                  }}
                />
              </span>         
            </div>         
          </div>
          <div className="mx-auto max-w-[83%] font-extralight text-coral text-[1rem]">...read more</div>
        </div>
      </div>
    </div>
  );
};

export default FeedDesktop;
