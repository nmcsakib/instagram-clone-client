import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router";
import { BsGear } from "react-icons/bs";
import Tab from "../../Components/Tab/Tab";

const Profile = () => {
    const auth = useContext(AuthContext)

    return (
        <div className="w-full">

            <div className="flex items-center gap-4 w-11/12 p-20 font-inter">
                <img className="w-20 rounded-full" src={auth?.user?.photoURL || 'https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg'} alt="user profile" />
                <div>
                    <div className="flex justify-center items-center gap-3 mb-3">
                        <p className="text-lg"> {auth?.user?.email?.split('@')[0]}</p>
                        <Link to='/accounts/edit' className="btn rounded-xl bg-[#262626] insta-text">Edit Profile</Link>
                        <button className="btn rounded-xl bg-[#262626] insta-text">View archive</button>
                        <button className="cursor-pointer"  onClick={()=>(document.getElementById('settings') as HTMLFormElement).showModal()}>
                        <BsGear/>
                        </button>
                    </div>
                    <div className="flex  items-center gap-8">
                        <p className=""> <span className="font-bold">6</span> Posts</p>
                        <p className=""> <span className="font-bold">12</span> Followers</p>
                        <p className=""> <span className="font-bold">82</span> Following</p>
                  
                    </div>
                    <div className="text-xs mt-10">
                        <p className="font-[600]">Display Name</p>
                        <p>Bio</p>
                    </div>
                </div>

            </div>
                <Tab/>
            {/* This is profile
            {
                
            } */}
<dialog id="settings" className="modal">
  <div className="modal-box bg-[#262626] insta-text]">
 { auth?.user ? <button onClick={auth?.logOut} className="w-full border-b py-3 cursor-pointer">Log Out</button> : <Link to='/accounts/authentication' className="w-full border-b py-3 cursor-pointer">Log In</Link>}
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
        </div>
    );
};

export default Profile;