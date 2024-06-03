import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

// auth
const auth = getAuth(app);

// provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  // authentication with email and pass

  // create user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sign in user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // hold user
  useEffect( ()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false)
      setUser(currentUser)
    })
    return () =>  {
      return unSubscribe;
    }
  } , [])

  // sign out
  const logOut = () => {
    return signOut(auth)
  }


  // authentication with google
  const google = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // authentication with facebook
  const facebook = () => {
    return signInWithPopup(auth, facebookProvider)
  }
  // https://nextgig-22b8d.firebaseapp.com/__/auth/handler

  // pass user info
  const userInfo = {
    user, loading,
    // authentication
    google, facebook, createNewUser, login, logOut

  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}
