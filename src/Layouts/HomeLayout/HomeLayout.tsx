import { Outlet } from "react-router";
import LeftSide from "../../Components/LeftSide/LeftSide";

const HomeLayout = () => {
    return (
        <div className='container mx-auto  min-h-screen w-full grid grid-cols-[1fr_3fr] justify-between font-inter insta-text'>
      <LeftSide/>
     <Outlet/>
    </div>
    );
};

export default HomeLayout;