import { useState } from "react";
import Buttons from "../components/Tools/Buttons";
import {InputFields} from "../components/Tools/InputFields";
import SideJumb from "../components/Tools/SideJumb";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [newLogin, setNewLogin] = useState({
    email: "",
    password: "",
  })
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  function handleOnChange(event){
    setNewLogin((prevLoginVal) => {
      return {
        ...prevLoginVal,
        [event.target.name]: event.target.value,
      }
    })
  }

  const {email, password} = newLogin
  const {login, currentUser} = useAuth()
  const navigate = useNavigate()


  async function handleSubmit(event){
    event.preventDefault()

    try {
      setErr('')
      setLoading(true)
      await login(email, password)
      navigate('/')
    } catch (error){
      setErr('Incorrect cridentials')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  





  return (
    <div className="min-h-screen flex  lg:flex-row">
      <SideJumb content="Login" />
    
      <div className="flex  justify-center items-center w-full lg:w-2/3 bg-white p-8 lg:p-16">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-darkslategray">Welcome</h1>
          </div>
          {err && <div className="text-red-500">{err}</div>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              
              <InputFields
                content="Enter your email"
                name="email"
                value={email}
                onChange={handleOnChange}
                id="email"
                type="email"
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
            </div>
            <div className="flex justify-between items-center mt-6">
              <Buttons content="Login" bgcolor="#939185"
              isLoading={loading}
              />
              <div className="text-gray-600 text-sm">
                <p className="m-0">{`already have an account? `}
                <Link to="/signup">
                  <span className="m-0 text-tan">Sign Up</span>
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

export default Login;