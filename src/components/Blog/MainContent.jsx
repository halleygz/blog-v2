import Buttons from "../Tools/Buttons";
import { InputFields } from "../Tools/InputFields";
import TagBtns from "./TagBtns";

const MainContent = ({ className = "" }) => {

  return (
    <>
      <section className="w-[774.6px] flex flex-col items-start justify-start gap-[23px] max-w-full shrink-0 text-left text-[40px] text-coral font-dm-serif-display">
        <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-5xl mq950:text-13xl">
          15 Disadvantages Of Freedom And How You Can Workaround It.
        </h1>
        <div className="w-[309.5px] flex flex-col items-start justify-start gap-[11.8px] text-xl text-gray-100 font-lexend-deca">
          <div className="self-stretch relative font-extralight mq450:text-base">
            written by @samurai2099
          </div>
          <div className="w-[192.8px] h-[36.8px] relative font-extralight inline-block shrink-0 mq450:text-base">
            on 27 may 2022
          </div>
        </div>
      </section>
      <section
        className={`w-[814px] flex flex-col items-start justify-start pt-0 px-0 pb-[30.3px] box-border gap-[30px] max-w-full shrink-0 text-left text-xl text-gray-200 font-lexend-deca ${className}`}
      >
        <div className="self-stretch h-[369px] relative inline-block shrink-0 mq450:text-base">
          <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
              venenatis lectus magna fringilla urna. Aliquet porttitor lacus
              luctus accumsan tortor posuere ac ut. Eleifend quam adipiscing
              vitae proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed
              nisi lacus sed viverra tellus. Urna molestie at elementum eu
              facilisis sed odio morbi. Eget mi proin sed libero enim. Quis
              varius quam quisque id diam vel quam. Duis at tellus at urna
              condimentum mattis pellentesque. Nulla facilisi cras fermentum
              odio eu feugiat pretium nibh.
            
          </p>
          <br />
          <p className="m-0">
            Ut tellus elementum sagittis vitae et leo. Cursus in hac habitasse
            platea dictumst quisque sagittis purus. Odio facilisis mauris sit
            amet. Quis vel eros donec ac odio. Orci a scelerisque purus semper.
            Amet justo donec enim diam vulputate ut pharetra. Arcu odio ut sem
            nulla pharetra diam.
          </p>
        </div>
        <div className="w-[296px] flex flex-row items-start justify-start py-0 px-2.5 box-border">
          <TagBtns content="#sometuig" />
          <TagBtns content="another" />
          <TagBtns content="#sdquaaa" />
          <TagBtns content="#sometuig" />
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
