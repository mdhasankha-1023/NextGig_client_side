import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext } from "react"
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

// auth
const auth = getAuth(app);

// provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}) {

// authentication with google
const google = () => {
   return signInWithPopup(auth, googleProvider)
}

// authentication with facebook
const facebook = () => {
   return signInWithPopup(auth, facebookProvider)
}

// pass user info
const userInfo = {
    user: 'hasan',
    // authentication with social media
    google, facebook
}

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}
