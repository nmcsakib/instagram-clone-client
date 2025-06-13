import { GrGoogle } from "react-icons/gr";
import Logo from "../../assets/Logo";
import { useContext, useState } from "react";
import { AuthContext, db } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router";
import {  doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const AuthForm = () => {
  const auth = useContext(AuthContext);
  const [login, setLogin] = useState(true);
  const [error, setError] = useState('')
  
if(auth?.loading){
return <div className='w-screen h-screen flex justify-center items-center'><span className="loading loading-ring loading-xl"></span></div>
}

  const {signInWithGoogle, createUserWithEmailPass , signIn, sakib, user, setUser} = auth!;
  console.log(sakib, user?.displayName);

const handleLogin = (e: React.FormEvent<HTMLFormElement> ) => {
  e.preventDefault();
  const email = new FormData(e.currentTarget).get('email') as string;
  const password = new FormData(e.currentTarget).get('password') as string;

  signIn(email, password)
    .then((res) => {
      setUser(res.user);
    })
    .catch((error) => {
      setError(error.message);
    });
};


const handleGoogleLogin = async () => {
  try {
    const result = await signInWithGoogle(); 
    setUser(result.user);
  } catch (err) {
    console.error(err);
    setError("Google login failed");
  }
};

const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;
  const fullName = formData.get("fullname") as string;

  try {
    
    const userCredential = await createUserWithEmailPass(email, password);

 
    await updateProfile(userCredential.user, {
      displayName: fullName,
    });

    
    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      email,
      username,
      fullName,
    });

    console.log("User registered successfully");

  } catch (error) {
    console.error("Registration error:", error);
  }
};


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
  <div className="text-center mb-5">
            <Logo/>
  </div>

  {

    // Login Form

    login ? <form onSubmit={handleLogin} className="mb-4 text-sm">
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="email"
        placeholder="Phone number, email or username"
        name="email"
      />
    </div>

    <div className="mb-6">
      
      <input required
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
      <p className="text-red-500 pt-2 text-center">{error.split("Firebase:")[1] || error}</p>
      <div className="divider">or</div>
      
  </form> 
  :

  // Registration Form

  <div>

 <p className=" font-bold text-center mb-4 text-gray-400">
      Sign up to see photos and videos <br /> from your friends.
    </p>
  <form onSubmit={handleSignUp} className="mb-4 text-sm">
   
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="email"
        placeholder="Email"
        name="email"
        />
    </div>
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="password"
        placeholder="Password"
        name="password"
        />
    </div>
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="text"
        placeholder="Full name"
        name="fullname"
        />
    </div>

    <div className="mb-6">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="username"
        placeholder="User name"
      />
    </div>


      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit"
        >
        Sign Up
      </button>
      <p className="text-red-500 pt-2 text-center">{error.split("Error")[1]}</p>
      <div className="divider">or</div>
      
  </form> 
        </div>
  }



  <button onClick={handleGoogleLogin} className="pl-5 cursor-pointer text-sm flex justify-center items-center gap-4 py-4 text-blue-500 hover:text-blue-800">
    <a className="text-2xl"><GrGoogle/></a>
    Login with Google
   
  </button>

  <p className="text-center text-gray-500 text-sm">
    Don't have an account?
    <a onClick={() => setLogin(false)} className="text-blue-500 hover:text-blue-800 cursor-pointer"> Sign Up</a>
  </p>
</div>
           </div>
        </div>
    );
};

export default AuthForm;