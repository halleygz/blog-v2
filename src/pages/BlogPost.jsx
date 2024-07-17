import { Link, useNavigate, useParams } from "react-router-dom";
import MainContent from "../components/Blog/MainContent";
import Navbar from "../components/Tools/Navbar";
import Profile from "../components/Tools/Profile";
import { useAuth } from '../contexts/AuthContext';
import { useCallback, useEffect, useState } from "react";
import { doc, getDoc, getDocs, query, updateDoc, where, arrayUnion, onSnapshot } from "firebase/firestore";
import { blogCollection, db, userCollection } from "../firebase";
import ChatButton from "../components/Blog/ChatBot";
import CommentDisplay from "../components/Blog/Comment";
import { InputFields } from "../components/Tools/InputFields";
import Buttons from "../components/Tools/Buttons";
import { nanoid } from "nanoid";

const BlogPost = ({ data, getMeOut }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "" });
  const [commentInput, setCommentInput] = useState("");
  const [loading, setLoading] = useState(false)

  const getUserName = useCallback(async () => {
    const q1 = query(userCollection, where("email", "==", currentUser.email));
    const querySnapshot1 = await getDocs(q1);
    if (!querySnapshot1.empty) {
      const userDoc = querySnapshot1.docs[0];
      const userData = userDoc.data();
      setUser({ username: userData.username });
    }
  }, [currentUser.email]);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setBlog({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document');
      }
    };
    fetchBlog();
    getUserName();
  }, [id, getUserName]);

  useEffect(()=> {
    const unsubscribe = onSnapshot(doc(blogCollection,id), (doc)=>{
      if(doc.exists()){
        setBlog({ id: doc.id, ...doc.data()})
      } else {
        console.log('No such document')
      }
    })
    return () => unsubscribe()
  }, [id])  

  const postComment = useCallback(async () => {
    const newComment = {
      uid: nanoid(),
      commenter: user.username,
      comment: commentInput,
      timestamp: new Date()
    };

    try {
      setLoading(true)
      const updateBlogCommentRef = doc(blogCollection, id);
      await updateDoc(updateBlogCommentRef, {
        comments: arrayUnion(newComment)
      });
      console.log('Comment posted successfully');
      setCommentInput("");  // Clear the input field after posting the comment
      
    } catch (e) {
      console.log(e);
    }
    setLoading(false)
  }, [blog, commentInput, currentUser.uid, id, user.username]);
  
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return <div>Loading...</div>;
  }
console.log(blog.comments)
  return (
    <>
      <Navbar
        loggedState={currentUser}
        fLetter={currentUser?.email[0]}
        logout={getMeOut}
        className="bg-whitesmoke pt-5 pl-5 pr-5"
      />
      <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[67px] px-[227px] pb-[45px] box-border gap-[22.9px] leading-[normal] tracking-[normal] text-left text-13xl text-darkslategray font-lexend-deca mq450:pl-5 mq450:pr-5 mq450:box-border mq700:pl-[113px] mq700:pr-[113px] mq700:box-border">
        {user.username === blog.author ? <Link to={`/blogpost/edit/${id}`}>Edit blog</Link> : ""}
        <MainContent blogD={blog} />
        <form onSubmit={(e) => { e.preventDefault(); postComment(); }}>
          <div className="w-[802px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[13px] max-w-full text-5xl text-darkslategray">
            <InputFields
              content="Comment"
              name="comment"
              id="comment"
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
          </div>
          <Buttons isLoading={loading} content="Comment" bgcolor="#939185" />
        </form>
        {blog?.comments && blog.comments.map((comment)=><CommentDisplay key={comment.uid} comments={comment.comment} userProfile={comment.commenter[0]}/>)}
      </div>
      <ChatButton />
    </>
  );
};

export default BlogPost;
