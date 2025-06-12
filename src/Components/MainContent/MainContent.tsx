import StoryBox from "../StoryBox/StoryBox";
import Card from "../Card/Card"

const MainContent = () => {
    return (
        <div  className="overflow-y-scroll h-screen hide-scrollbar">
            <StoryBox/>
           <div className="pl-10 flex flex-col justify-center items-center pt-10">
     
        <Card/>
        <Card/>
        <Card/>
        </div>
     
        </div>
    );
};

export default MainContent;