import { useNavigate } from "react-router-dom";
import Form from "../../../Components/UI/Form";
import useAuth from "../../../Hooks/useAuth";

export default function SignIn() {
  const { login, google, facebook } = useAuth();
  const navigate = useNavigate();

  // authentication with email and pass
  const signInBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password }
    console.log(userInfo)

    login(email, password)
      .then(res => {
        const user = res.user;
        console.log(user)
        navigate('/')
      })
      .catch(error => console.log(error))

  }

  // sign up with google
  const signUpWithGoogle = () => {

    google()
      .then(res => {
        const user = res.user;
        console.log(user)
        navigate('/')
      })
      .catch(error => console.log(error))
  }

  // sign up with facebook
  const signUpWithFacebook = () => {

    facebook()
      .then(res => {
        const user = res.user;
        console.log(user)
        navigate('/')
      })
      .catch(error => console.log(error))
  }


  return (
    <div>
      <Form type={'signIn'} onFacebook={signUpWithFacebook} onGoogle={signUpWithGoogle} onInput={signInBtn} />
    </div>
  )
}
