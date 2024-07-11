import { useState } from "react";
import Navbar from "../components/Tools/Navbar";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import Buttons from "../components/Tools/Buttons";

const Home = () => {
  
  const {currentUser, logout} = useAuth()
  const [err, setErr] = useState('')
  const [data, setData] = useState({
    isLoggedIn: currentUser? true : false,
    currentUser
  })

  async function handleLogout(){
    setErr('')
    try{
      await logout()
      setData({
        isLoggedIn: false,
        currentUser: null,
      })
    } catch {
      setErr(`couldn't perform logout`)
      console.log(err)
    }
  }
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-5 px-[52px] pb-7 box-border gap-[113px] leading-[normal] tracking-[normal] text-left text-base text-darkslategray font-lexend-deca mq450:gap-[28px] mq675:gap-[56px] mq675:pl-[26px] mq675:pr-[26px] mq675:box-border">
      <Navbar loggedState={data.isLoggedIn} fLetter={data?.currentUser?.email[0]} logout={()=>handleLogout()}/>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-11 pr-0 pl-px box-border max-w-full text-center text-[88px] text-darkslategray font-lexend-deca mq675:pb-[29px] mq675:box-border">
        <div className="w-[725px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[30px]">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-dm-serif-display text-black mq450:text-7xl mq750:text-[44px]">
            Spread your ideas without limits
          </h1>
          <h2 className="m-0 self-stretch relative text-11xl font-normal font-inherit mq450:text-[18px] mq750:text-5xl">
            A place to read, write and deepen your thoughts
          </h2>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-left text-xl">
            <Buttons content={data.isLoggedIn? "Post a blog" : "Sign Up today"} bgcolor="#e6b9a6"/>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="relative">© BLOGGA. ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
};

export default Home;
