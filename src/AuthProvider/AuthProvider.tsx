import { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<unknown>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo: AuthContextType = {
    user,
    signInWithGoogle
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
