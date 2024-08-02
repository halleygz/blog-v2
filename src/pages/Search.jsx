import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Tools/Navbar";
import FeedDesktop from "../components/Blog/FeedDesktop";
import TagBtns from "../components/Blog/TagBtns";
import { useAuth } from "../contexts/AuthContext";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { blogCollection, db } from "../firebase";
import ChatButton from "../components/Blog/ChatBot";
import { InputFields } from "../components/Tools/InputFields";
import Buttons from "../components/Tools/Buttons";

const Search = ({ getMeOut }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getDataFromFirebase = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const docsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(docsData);
    };
    getDataFromFirebase();
  }, []);
  const sortedData = data.sort((a, b) => b.createdAt - a.createdAt);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  const contentData = {
    title: "15 Disadvantages Of Freedom And How You Can Workaround It.",
    snippetContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad t mollit anim id est laborum tion ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum`,
  };

  return (
    <div className="bg-[#e6b9a6]">
      <div className="mx-auto max-w-4xl relative bg-whitesmoke overflow-y-auto flex flex-col items-start justify-start pt-4 pb-[373px] pr-[34px] pl-9 box-border gap-[35px] leading-[normal] tracking-[normal] text-left text-xl text-gray-200 font-lexend-deca mq675:gap-[17px]">
        <Navbar
          loggedState={currentUser}
          fLetter={currentUser?.email[0]}
          logout={getMeOut}
        />

        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[34px] box-border max-w-full mt-10">
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="flex flex-row items-center justify-around content-center py-0 px-[9px]">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[19px]">
                  <div className="h-1 w-5 relative bg-tan" />
                </div>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[61px] mq450:text-base">
                  Search
                </a>
              </div>

              <InputFields onChange={(e) => setSearch(e.target.value)} />
            </div>

            {
            sortedData ? 
            sortedData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item?.searchables?.toLowerCase().includes(search);
              })
              .map((item) => (
                <div
                  key={item.id}
                  className="self-stretch flex flex-col items-start justify-start gap-[2px] max-w-full cursor-pointer"
                >
                  <FeedDesktop contentData={{ ...item }} />
                  <br />

                  <div className="w-[500px] flex flex-row items-start justify-start py-0 px-2.5 box-border">
                    {item.tags.map((tag) => (
                      <TagBtns content={tag} />
                    ))}
                    
                  </div>
                </div>
              )): <></>}
          </div>
        </section>
      </div>
      <ChatButton />
    </div>
  );
};

export default Search;
