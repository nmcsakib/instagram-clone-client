import { CgHome, CgSearch } from "react-icons/cg";
import Logo from "../../assets/Logo";
import { CiCompass1, CiVideoOn } from "react-icons/ci";
import MenuBtn from "./MenuBtn";
import { BsMenuButton, BsMessenger, BsPlusSquare } from "react-icons/bs";
import { BiHeart, BiUserCircle } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LeftSide = () => {
  const auth = useContext(AuthContext);
  console.log(auth?.user?.photoURL);
  return (
    <div className="border-r border-white/30 w-full overflow-y-hidden h-screen font-[500]">
      <Logo />
      {/* Navbar */}
      <div className=" pl-5 pr-3 flex flex-col justify-center items-center gap-4">
        <MenuBtn location="/">
          <CgHome />
           Home
           </MenuBtn>
        <MenuBtn location="/">
          <CgSearch />
          Search
        </MenuBtn>
        <MenuBtn location="/">
          <CiCompass1 />
          Explore
        </MenuBtn>
        <MenuBtn location="/">
          <CiVideoOn />
          Reels
        </MenuBtn>
        <MenuBtn location="/">
          <BsMessenger />
          Messages
        </MenuBtn>
        <MenuBtn location="/">
          <BiHeart />
          Notification
        </MenuBtn>
        <MenuBtn location="/">
          <BsPlusSquare />
          Create
        </MenuBtn>
        <MenuBtn location="/profile">
          {/* <img src={auth?.user?.photoURL || ''} className="w-8 h-8 rounded-full" alt="profile" /> */}
         { auth?.user ?  <p className="w-8 h-8 flex justify-center items-center rounded-full bg-blue-500 text-center">{auth?.user?.displayName?.slice()[0]}</p> : <BiUserCircle/>}
          Profile
        </MenuBtn>
        <MenuBtn location="/">
          <BsMenuButton />
          More
        </MenuBtn>
      </div>
    </div>
  );
};

export default LeftSide;