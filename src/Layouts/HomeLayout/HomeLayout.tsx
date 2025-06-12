import LeftSide from "../../Components/LeftSide/LeftSide";
import MainContent from "../../Components/MainContent/MainContent";
import RightSide from "../../Components/RightSide/RightSide";

const HomeLayout = () => {
    return (
        <div className='container mx-auto  min-h-screen w-full grid grid-cols-[1fr_3fr_1.5fr] justify-between '>
      <LeftSide/>
     <MainContent/>
      <RightSide/>
    </div>
    );
};

export default HomeLayout;