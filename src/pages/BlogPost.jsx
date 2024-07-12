import { useNavigate } from "react-router-dom";
import MainContent from "../components/Blog/MainContent";
import Navbar from "../components/Tools/Navbar";
import Profile from "../components/Tools/Profile";

const BlogPost = ({ data, getMeOut }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar
        loggedState={currentUser}
        fLetter={currentUser?.email[0]}
        logout={getMeOut}
        className="bg-whitesmoke pt-5 pl-5 pr-5"
      />
      <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[67px] px-[227px] pb-[45px] box-border gap-[22.9px] leading-[normal] tracking-[normal] text-left text-13xl text-darkslategray font-lexend-deca mq450:pl-5 mq450:pr-5 mq450:box-border mq700:pl-[113px] mq700:pr-[113px] mq700:box-border">
        <MainContent />
        <div className="w-[813.5px] flex flex-row items-start justify-start pt-0 px-0.5 pb-[29.3px] box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-col items-end justify-start gap-[21.1px] max-w-full shrink-0">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <Profile firstLetter="B" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[462px] max-w-full text-xl text-gray-200 mq975:min-w-full">
                <div
                  className="self-stretch relative mq450:text-base"
                  data-scroll-to="enimQuisVarius"
                >
                  enim. Quis varius quam quisque id diam vel quam. Duis at
                  tellus at urna condimentum mattis
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          </div>
        </div>
        <section className="w-[813.5px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full shrink-0 text-left text-13xl text-darkslategray font-lexend-deca">
          <div className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <Profile firstLetter="S" />
              <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[462px] max-w-full text-xl text-gray-200 mq975:min-w-full">
                <div className="self-stretch relative mq450:text-base">
                  enim. Quis varius quam quisque id diam vel quam. Duis at
                  tellus at urna condimentum mattis
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;
