import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import BlogList from "./pages/BlogList";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const { currentUser, logout } = useAuth();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    isLoggedIn: currentUser ? true : false,
    currentUser,
  });

  async function handleLogout() {
    setErr("");
    try {
      await logout();
      setData({
        isLoggedIn: false,
        currentUser: null,
      });
      navigate("/");
    } catch {
      setErr(`couldn't perform logout`);
      console.log(err);
    }
  }
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/bloglist"
        element={
        <PrivateRoute>
          <BlogList data={data} getMeOut={handleLogout} />
        </PrivateRoute>
      
      }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/blogpost/:id"
        element={
        <PrivateRoute>
          <BlogPost data={data} getMeOut={handleLogout} />
        </PrivateRoute>
      }
      />
      <Route path="/" element={<Home data={data} getMeOut={handleLogout} />} />
      <Route path="/addblog" element={<AddBlog />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
export default App;
