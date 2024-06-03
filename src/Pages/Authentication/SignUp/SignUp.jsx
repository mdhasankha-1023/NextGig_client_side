import Form from "../../../Components/UI/Form";
import useAuth from "../../../Hooks/useAuth";

export default function SignUp() {
  const {user} = useAuth();
  console.log(user)
  return (
    <div>
      <Form type={'signUp'}/>
    </div>
  )
}
