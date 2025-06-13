
import React, { useState } from "react";
import { BiBookmark, BiGridSmall } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { IoVideocam } from "react-icons/io5";

const Tab = () => {
  const [activeTab, setactiveTab] = useState(1);
  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center insta-text">
        <ul className="flex items-center border-t border-white/30 w-full justify-center">
          <li
            className={`${
              activeTab === 1 &&
              "!border-white !bg-transparent text-white"
            } px-6 py-2 border-t   text-[#b1b1b1] transition duration-300 border-transparent cursor-pointer flex justify-center items-center gap-3 mt-[-1px]`}
            onClick={() => setactiveTab(1)}
          >
            <BiGridSmall/>
            Posts
          </li>
          <li
            className={`${
              activeTab === 2 &&
              "!border-white !bg-transparent text-white"
            } px-6 py-2 border-t text-[#b1b1b1] transition duration-300 border-transparent cursor-pointer flex justify-center items-center gap-3 mt-[-1px]`}
            onClick={() => setactiveTab(2)}
          >
            <IoVideocam/>
            Reels
          </li>
          <li
            className={`${
              activeTab === 3 &&
              "!border-white !bg-transparent text-white"
            } px-6 py-2 border-t text-[#b1b1b1] transition duration-300 border-transparent cursor-pointer flex justify-center items-center gap-3 mt-[-1px]`}
            onClick={() => setactiveTab(3)}
          >
            <BiBookmark/>
            Saved
          </li>
          <li
            className={`${
              activeTab === 4 &&
              "!border-white !bg-transparent text-white"
            } px-6 py-2 border-t  text-[#b1b1b1] transition duration-300 border-transparent cursor-pointer flex justify-center items-center gap-3 mt-[-1px]`}
            onClick={() => setactiveTab(4)}
          >
            <ImProfile/>
            Tagged
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tab;
          