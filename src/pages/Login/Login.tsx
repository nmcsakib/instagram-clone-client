import { GrGoogle } from "react-icons/gr";
import Logo from "../../assets/Logo";

const Login = () => {
    return (
        <div className="container mx-auto min-h-screen grid grid-cols-[2fr_1fr]">
           <div className="flex justify-center items-center">
        <img className="w-3/4" src="/instagram-web-lox-image.png" alt="login photo" />
           </div>
           <div  className="flex justify-start items-center">
            <div className=" text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="text-center mb-6">
            <Logo/>
  </div>

  <form className="mb-4 text-sm">
    <div className="mb-4">
      
      <input
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Phone number, email or username"
      />
    </div>

    <div className="mb-6">
      
      <input
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
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
      <div className="divider">or</div>
      
  </form>


  <p className="text-center cursor-pointer text-sm flex justify-center items-center gap-4 py-4 text-blue-500 hover:text-blue-800">
    <a className="text-2xl"><GrGoogle/></a>
    Login with Google
   
  </p>

  <p className="text-center text-gray-500 text-sm">
    Don't have an account?
    <a className="text-blue-500 hover:text-blue-800" href="#">Sign Up</a>
  </p>
</div>
           </div>
        </div>
    );
};

export default Login;