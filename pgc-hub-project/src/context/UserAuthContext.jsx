import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

  
} from "firebase/auth";
import { auth } from "../Firebase";

const  userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
 

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
    
  }
function logOut(){
  return signOut(auth)
}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, signUp, logIn, logOut}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export  function useUserAuth() {
  return useContext(userAuthContext);
}
