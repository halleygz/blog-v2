import SideJumb from "../components/Tools/SideJumb";
import { InputFields } from "../components/Tools/InputFields";
import Buttons from "../components/Tools/Buttons";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [newSignUp, setNewSignUp] = useState({
    fullName: "",
    email: "",
    username:"",
    password: "",
    confirmPass: "",
  });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  function handleOnChange(event) {
    setNewSignUp((prevSignUpVal) => {
      return {
        ...prevSignUpVal,
        [event.target.name]: event.target.value,
      };
    });
  }

  const { fullName, email, username, password, confirmPass } = newSignUp;
  const { signup, currentUser } = useAuth();
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (password !== confirmPass) {
      setErr(`Passwords don't match`);
      console.log(err)
      return;
    }
    
    try {
      setErr('');
      setLoading(true);
      await signup(email, password);

      setTimeout(()=> {
        navigate('/')
      }, 1000)

    } catch (error) {
      setErr('Failed to create account');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex  lg:flex-row">
      <SideJumb content="Sign Up" />
    
      <div className="flex  justify-center items-center w-full lg:w-2/3 bg-white p-8 lg:p-16">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-darkslategray">Welcome</h1>
            <p className="mt-2 text-lg text-gray-600">Let’s sign you up quickly</p>
          </div>
          {err && <div className="text-red-500">{err}</div>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <InputFields
                content="Enter your full name"
                name="fullName"
                value={fullName}
                onChange={handleOnChange}
                id="fullName"
                type="text"
                placeholder="Jane Daniel Foster"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <InputFields
                content="Enter your email"
                name="email"
                value={email}
                onChange={handleOnChange}
                id="email"
                type="email"
                placeholder="email@example.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <InputFields
                content="Enter a username"
                name="text"
                value={username}
                onChange={handleOnChange}
                id="username"
                type="username"
                placeholder="@username"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <InputFields
                content="Enter your password"
                name="password"
                value={password}
                onChange={handleOnChange}
                id="password"
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <InputFields
                content="Confirm Password"
                name="confirmPass"
                value={confirmPass}
                onChange={handleOnChange}
                id="confirmPass"
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <Buttons content="Sign Up" bgcolor="#939185" links="bloglist"
              isLoading={loading}
              />
              <div className="text-gray-600 text-sm">
                <p className="m-0">{`already have an account? `}
                <Link to="/login">
                  <span className="m-0 text-tan">Login</span>
                </Link>
                 </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
