import { TextField } from "@mui/material";
import SideJumb from "../components/Tools/SideJumb";
import Buttons from "../components/Tools/Buttons";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { useEffect, useState, useCallback } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { blogCollection, userCollection } from "../firebase";
import { collection, addDoc, onSnapshot, query, getDocs, where, getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AddBlog = () => {
  const [model, setModel] = useState("");
  const [title, setTitle] = useState("");
  const [user, setUser] = useState({ username: "@halle" }); // replace with actual user state
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const getUserName = useCallback(async () => {
    const q1 = query(userCollection, where('email', "==", currentUser.email));
    const querySnapshot1 = await getDocs(q1);
    if (!querySnapshot1.empty) {
      const userDoc = querySnapshot1.docs[0];
      const userData = userDoc.data();
      setUser({ username: userData.username });
    }
  }, [currentUser.email]);

  useEffect(() => {
    if (currentUser) {
      getUserName();
    }
  }, [currentUser, getUserName]);

  useEffect(() => {
    const unsubscribe = onSnapshot(blogCollection, (snapshot) => {
      const blogArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlog(blogArr);
    });
    return unsubscribe;
  }, []);

  const createNewBlog = useCallback(async () => {
    const newBlog = {
      author: user.username,
      createdAt: Date.now(),
      updatedAt: "",
      title: title,
      content: model,
      snippetContent: model.slice(0, 300), // snippet of the first 300 characters
      tags: ["tag1", "tag2", "tag3"],
      views: 0,
      comments: [],
    };

    try {
      const newBlogRef = await addDoc(blogCollection, newBlog);
      navigate("/bloglist");
      console.log("Document written with ID: ", newBlogRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }, [user.username, title, model, navigate]);
  
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-center justify-center gap-[71px] leading-[normal] tracking-[normal] text-center text-45xl text-darkslategray font-lexend-deca lg:flex-wrap lg:gap-[35px] mq750:gap-[18px]">
      {/* <SideJumb content="Try Buddy"/> */}
      
      <div className="w-[670px] flex flex-col items-start justify-start pt-[46px] px-0 pb-0 box-border min-w-[670px] max-w-full text-left text-5xl lg:flex-1 mq450:pt-5 mq450:box-border mq750:min-w-full mq1050:pt-[30px] mq1050:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-center text-29xl font-dm-serif-display mq750:pl-6 mq750:pr-6 mq750:box-border">
            <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-19xl">
              What’s in your mind today?
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[25.8px] gap-[4.4px]">
            <div className="w-[252.1px] relative font-normal inline-block shrink-0 mq450:text-lgi">
              Title
            </div>
            <TextField
              className="[border:none] bg-white self-stretch h-[50px] relative shrink-0"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "whitesmoke" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" w-[252.1px] relative font-normal inline-block shrink-0 mq450:text-lgi">
            Content
          </div>
          <div className="w-full">
            <FroalaEditor model={model} onModelChange={setModel} />
          </div>
          <div className="inline">
            <label
              htmlFor="tags"
              className="mr-5 relative text-5xl leading-[24px] font-light font-lexend-deca text-darkslategray text-left inline-block mq450:text-lgi mq450:leading-[19px]  min-w-[117px]"
            >
              <button className="h-12 w-[167.7px] text-[1.3rem] text-[#2f3645] font-normal font-lexend-deca bg-[#e6b9a6] ">Add tags</button>
            </label>
            <input
              className="[outline:none] bg-white self-stretch h-12 relative box-border  min-w-[480px] mt-1 "
              type="text"
              id="tags"
              name="tags"
              // value={value}
              // onChange={onChange}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <Buttons content="Post" bgcolor="#e6b9a6" onClick={createNewBlog} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
