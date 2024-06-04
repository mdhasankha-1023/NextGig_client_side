import ProfileForm from "../../Components/UI/ProfileForm";
import UserAvatar from "../../Components/UI/UserAvatar";

export default function UserProfile() {
  return (
    <div className="w-11/12 flex flex-col gap-10 justify-center">
         <div className="divider">
            <UserAvatar size={'w-28'} type={'withPic'}/>
         </div>
         <ProfileForm/>
    </div>
  )
}
