import React from "react";
import Profile from "../Tools/Profile";

function CommentDisplay({comments, userProfile="X"}) {
  return (
    <section className="w-[813.5px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full shrink-0 text-left text-13xl text-darkslategray font-lexend-deca">
      <div className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <Profile firstLetter={userProfile} />
          <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[462px] max-w-full text-xl text-gray-200 mq975:min-w-full">
            <div className="self-stretch relative mq450:text-base">
              {comments}
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      </div>
    </section>
  );
}

export default CommentDisplay;
