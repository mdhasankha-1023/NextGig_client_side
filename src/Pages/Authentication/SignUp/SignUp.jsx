import { useNavigate } from "react-router-dom";
import Form from "../../../Components/UI/Form";
import useAuth from "../../../Hooks/useAuth";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";

export default function SignUp() {
  const { google, facebook, createNewUser } = useAuth();
  const navigate = useNavigate();
  // console.log(google)

  // signUp  with email and pass
  const signUpBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { userName, email, password }
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
      <PrimaryTitle lgText={'Registration'} smText={'You register as a Candidate or Employer'} />
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab fontSize={'20px'} fontWeight={'600'}>CANDIDATE</Tab>
          <Tab fontSize={'20px'} fontWeight={'600'}>EMPLOYER</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Form type={'signUp'} onInput={signUpBtn} onFacebook={signUpWithFacebook} onGoogle={signUpWithGoogle} />
          </TabPanel>
          <TabPanel>
            <Form type={'employer'} onInput={signUpBtn} onFacebook={signUpWithFacebook} onGoogle={signUpWithGoogle} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
