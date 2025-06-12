import { useContext } from "react";
import Logo from "../../assets/Logo";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const RightSide = () => {

    const auth = useContext(AuthContext);
    const {user} = auth!;
    return (
        <div className="text-center">
            <div className="flex items-center mt-10">
    <img className="w-12 rounded-full" src={user?.photoURL || 'https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg'} alt="user profile" />
    
 <div className="text-xs">
    <p className="text-sm px-2">
      {user?.email?.split('@')[0]}
    </p>
    <p className="text-gray-500 mt-1">{user?.displayName}</p>
 </div>
 <button onClick={()=>(document.getElementById('my_modal_3') as HTMLFormElement).showModal()} className="text-blue-500 pl-3 text-sm cursor-pointer">Switch</button>
</div>

{/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-[#262626]">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="absolute right-2 top-2 text-3xl p-3 cursor-pointer">✕</button>
    </form>
 <div className="text-center mb-6">
            <Logo/>
  </div>

  <form className="mb-4 text-sm w-3/4 mx-auto">
    <div className="mb-4">
      
      <input
        className=" appearance-none border border-[#383838] bg-[#222222] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Phone number, email or username"
      />
    </div>

    <div className="mb-6">
      
      <input
        className=" appearance-none border border-[#383838] bg-[#222222] rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
    </div>


      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit"
      >
        Log In
      </button>
      <p className="text-gray-400 mt-5">Forgot password?</p>
      
  </form>
  </div>
</dialog>
        </div>
    );
};

export default RightSide;