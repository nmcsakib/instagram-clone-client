import { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User, type UserCredential } from "firebase/auth";

type AuthContextType = {
  user: User | null;
  signInWithGoogle: () => Promise<UserCredential>;
  signInWithEmailPass: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<unknown>;
  sakib: string,
  loading: boolean,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const sakib = 'sakib';


  const createUserWithEmailPass = (email: string, password: string) => {

    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
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
    signInWithEmailPass: createUserWithEmailPass,
    setUser
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
