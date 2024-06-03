import { useNavigate } from "react-router-dom";
import Form from "../../../Components/UI/Form";
import useAuth from "../../../Hooks/useAuth";

export default function SignIn() {
  const { login } = useAuth();
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


  return (
    <div>
      <Form onInput={signInBtn} />
    </div>
  )
}
