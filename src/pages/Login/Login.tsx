import { GrGoogle } from "react-icons/gr";
import Logo from "../../assets/Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router";

const Login = () => {
  const auth = useContext(AuthContext);
  const [error, setError] = useState('')
  const {signInWithGoogle, signInWithEmailPass: createUserWithEmailPass , sakib, user, setUser} = auth!;
  if (!auth) {
  return <div>Loading...</div>;
}
console.log(sakib, user?.displayName);

const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
     e.preventDefault()
     const email = new FormData(e.currentTarget).get('email') as string
     const password = new FormData(e.currentTarget).get('password') as string
     createUserWithEmailPass(email, password).then((userCredential) => {
   
    const user = userCredential.user;
    setUser(user)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    console.log(errorCode, errorMessage);
    // ..
  });
}

 if(user){ 
        return <Navigate to={'/'}/>
   }

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

  <form onSubmit={handleSubmit} className="mb-4 text-sm">
    <div className="mb-4">
      
      <input
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="email"
        placeholder="Phone number, email or username"
        name="email"
      />
    </div>

    <div className="mb-6">
      
      <input
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
    </div>


      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit"
      >
        Log In
      </button>
      <p className="text-red-500">{error}</p>
      <div className="divider">or</div>
      
  </form>


  <button onClick={signInWithGoogle} className="pl-5 cursor-pointer text-sm flex justify-center items-center gap-4 py-4 text-blue-500 hover:text-blue-800">
    <a className="text-2xl"><GrGoogle/></a>
    Login with Google
   
  </button>

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