/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const  signInWithEmail=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     
    
      setUser(currentUser);
      setLoading(false)
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }
  const updateUserProfile=(updatedDate)=>{
    return updateProfile(auth.currentUser, updatedDate)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    signInWithEmail,
    logOut,
    updateUserProfile,
    loading,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
