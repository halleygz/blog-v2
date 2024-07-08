import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import BlogList from "./pages/BlogList";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/bloglist":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/blogpost":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/addblog":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/bloglist" element={<BlogList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blogpost" element={<BlogPost />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addblog" element={<AddBlog />} />
    </Routes>
  );
}
export default App;