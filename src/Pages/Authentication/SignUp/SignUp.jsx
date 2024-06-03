import { useNavigate } from "react-router-dom";
import Form from "../../../Components/UI/Form";
import useAuth from "../../../Hooks/useAuth";

export default function SignUp() {
  const {google, facebook, createNewUser} = useAuth();
  const navigate = useNavigate();
  // console.log(google)

  // signUp  with email and pass
  const signUpBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName  = form.userName.value; 
    const email  = form.email.value; 
    const password  = form.password.value; 
    const userInfo = {userName, email, password}
    console.log(userInfo)

    createNewUser(email, password)
    .then(res => {
      const user = res.user;
      console.log(user)
      navigate('/signIn')
    })
    .catch(error => console.log(error))
  }


  // sign up with google
  const signUpWithGoogle =  () => {

    google()
    .then(res => {
      const user = res.user;
      console.log(user)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  // sign up with facebook
  const signUpWithFacebook =  () => {

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
      <Form type={'signUp'} onInput={signUpBtn} onFacebook={signUpWithFacebook} onGoogle={signUpWithGoogle} />
    </div>
  )
}
