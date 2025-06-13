import { BiBookmark, BiHeart, BiPaperPlane } from "react-icons/bi";
import { BsChatLeft, BsThreeDots } from "react-icons/bs";

const Card = () => {
return (
  
  <div className=" w-3/4 shadow-sm border-b border-white/30 mb-10">
<div className="flex items-center p-3 justify-between">
<div className="flex items-center">
    <div className="w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex justify-center items-center"><div className="w-7 h-7 rounded-full bg-white"></div></div>
 <p className="card-title text-sm px-2">
      Card Title
    </p>
    <p className="text-gray-500"> • 1d</p>
</div>
    
    <div className="cursor-pointer"><BsThreeDots/></div>
</div>
  <figure className="min-h-[200px]">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="flex justify-between p-3 text-2xl">
   <div className="flex gap-5 items-center">
     <BiHeart/>
    <BsChatLeft/>
    <BiPaperPlane/>
   </div>
    <BiBookmark/>
  </div>
    <p className="font-bold pl-3 text-sm">34,945 likes</p>
  <div className="pl-3 text-sm pt-3">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio autem est similique neque officiis repellendus reiciendis.</p>
  
  <div className="mt-3">
    <p className="text-gray-400 cursor-pointer text-sm">View All Comments</p>

  <input className="py-2 w-full outline-none" placeholder="Add Comments..." type="text" />
  </div>
  </div>
</div>
);
};
export default Card;