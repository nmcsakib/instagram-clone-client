import { useContext } from 'react'
import './App.css'
import HomeLayout from './Layouts/HomeLayout/HomeLayout'
import { AuthContext } from './AuthProvider/AuthProvider'
import { Navigate } from 'react-router'

function App() {

  const auth = useContext(AuthContext)

if(auth?.loading){
return <div className='w-screen h-screen flex justify-center items-center'><span className="loading loading-ring loading-xl"></span></div>
}
  else if(auth?.user){
   return <HomeLayout/>
  } else{
    return <Navigate to={'/accounts/login'}/>
  } 
}

export default App
