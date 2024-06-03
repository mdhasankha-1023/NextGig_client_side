import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider"

export default function useAuth() {
    const auth = useContext(AuthContext);
  return auth;
}
