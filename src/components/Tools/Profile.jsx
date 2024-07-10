
const Profile = ({ className = "", firstLetter="H" }) => {
  return (
    <div
      className={`h-[66px] w-[66px] text-left text-13xl text-darkslategray font-lexend-deca ${className}`}
    >
      <div className="flex justify-center text-center items-center rounded-[50%] bg-tan w-full h-full">
      <a className="[text-decoration:none] text-[inherit] min-w-[20px] whitespace-nowrap">
        {firstLetter}
      </a>
      </div>
    </div>
  );
};



export default Profile;
