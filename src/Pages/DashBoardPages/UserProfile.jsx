import { useState } from "react";
import ProfileForm from "../../Components/UI/ProfileForm";
import ProfileInfo from "../../Components/UI/ProfileInfo";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";

export default function UserProfile() {
  const { user } = useAuth()
  const users = useLoaderData();
  const [show, setShow] = useState(false)

  const currentUser = users.find(u => u?.email === user?.email)

  const isShowed = () => {
    setShow(!show)
  }

  console.log(currentUser)

  const saveChangeBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value; 
    const email = form.email.value;
    const phone = form.phone.value;
    const nationality = form.nationality.value;
    const address = form.address.value;
    const picUrl = form.picUrl.value;
    const about = form.about.value;
    const userInfo = { userName, email,phone, nationality, address, about, picUrl}
    console.log(userInfo)

    fetch(`http://localhost:5000/users/${currentUser?._id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(userInfo)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setShow(!show)

            })
              
          .catch(error => console.log(error))
  }

  return (
    <div className="w-11/12 flex flex-col gap-10 justify-center">
      {
        show ?
          <ProfileForm onSaveChange={saveChangeBtn} info={currentUser} onShow={isShowed} />
          :
          <ProfileInfo info={currentUser} onShow={isShowed} />
      }
    </div>
  )
}
