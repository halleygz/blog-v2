import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BlogList from "./pages/BlogList";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import TrendingList from "./pages/TrendingList";
import BlogPost from "./pages/BlogPost";
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
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/details":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/trendinglist":
        title = "";
        metaDescription = "";
        break;
      case "/blogpost":
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
      <Route path="/" element={<BlogList />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/search" element={<Search />} />
      <Route path="/trendinglist" element={<TrendingList />} />
      <Route path="/blogpost" element={<BlogPost />} />
      <Route path="/addblog" element={<AddBlog />} />
    </Routes>
  );
}
export default App;