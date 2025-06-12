import { CgHome, CgSearch } from "react-icons/cg";
import Logo from "../../assets/Logo";
import { CiCompass1, CiVideoOn } from "react-icons/ci";
import MenuBtn from "./MenuBtn";
import { BsMenuButton, BsMessenger, BsPlusSquare } from "react-icons/bs";
import { BiHeart, BiUserCircle } from "react-icons/bi";

const LeftSide = () => {
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
          <BiUserCircle />
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