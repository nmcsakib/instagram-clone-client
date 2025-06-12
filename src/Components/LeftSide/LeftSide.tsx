import { CgHome, CgSearch } from "react-icons/cg";
import Logo from "../../assets/Logo";
import { CiCompass1, CiVideoOn } from "react-icons/ci";
import MenuBtn from "./MenuBtn";
import { BsMenuButton, BsMessenger, BsPlusSquare } from "react-icons/bs";
import { BiHeart, BiUserCircle } from "react-icons/bi";

const LeftSide = () => {
    return (
        <div className="border-r border-white/30 w-full overflow-y-hidden h-screen font-[500]">
            <Logo/>
            {/* Navbar */}
           <div className=" pl-5 pr-3 flex flex-col justify-center items-center gap-4">
         <MenuBtn><CgHome/> Home</MenuBtn>
          <MenuBtn>
            <CgSearch className="inline-block mr-1 text-white" />
                    Search
                </MenuBtn>
          <MenuBtn>
            <CiCompass1 className="inline-block mr-1 text-white" />
                    Explore
                </MenuBtn>
          <MenuBtn>
            <CiVideoOn className="inline-block mr-1 text-white" />
                    Reels
                </MenuBtn>
          <MenuBtn>
            <BsMessenger className="inline-block mr-1 text-white" />
                    Messages
                </MenuBtn>
          <MenuBtn>
            <BiHeart className="inline-block mr-1 text-white" />
                    Notification
                </MenuBtn>
          <MenuBtn>
            <BsPlusSquare className="inline-block mr-1 text-white" />
                    Create
                </MenuBtn>
          <MenuBtn>
            <BiUserCircle className="inline-block mr-1 text-white" />
                    Profile
                </MenuBtn>
          <MenuBtn>
            <BsMenuButton className="inline-block mr-1 text-white" />
                    More
                </MenuBtn>
           </div>
        </div>
    );
};

export default LeftSide;