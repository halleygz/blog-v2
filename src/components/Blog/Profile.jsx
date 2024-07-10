
const Profile = ({ className = "" }) => {
  return (
    <div
      className={`h-[66px] w-[66px] relative text-left text-13xl text-darkslategray font-lexend-deca ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tan w-full h-full" />
      <a className="[text-decoration:none] absolute top-[13px] left-[23px] text-[inherit] inline-block min-w-[20px] whitespace-nowrap z-[1]">
        S
      </a>
    </div>
  );
};



export default Profile;
