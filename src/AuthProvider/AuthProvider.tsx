/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, type User, type UserCredential } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

type AuthContextType = {
  user: User | null;
  signInWithGoogle: () => Promise<UserCredential>;
  createUserWithEmailPass: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<unknown>;
  sakib: string,
  loading: boolean,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  signIn: (email: string, password: string) => Promise<UserCredential>
}

export const AuthContext = createContext<AuthContextType | null>(null);
const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const sakib = 'sakib';


  const createUserWithEmailPass = (email: string, password: string) => {

    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email: string, password: string) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const authInfo: AuthContextType = {
    user,
    signInWithGoogle,
    sakib,
    logOut,
    loading,
    createUserWithEmailPass,
    setUser,
    signIn
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
