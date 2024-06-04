import { Link, Outlet } from "react-router-dom"
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import UserAvatar from "../../Components/UI/UserAvatar";
import useAuth from "../../Hooks/useAuth";

export default function DashboardLayout() {
  const {user} = useAuth();


  // nav links
  const navLinks = (
    <>
    <li><Link to={'/dashboard'}><RiDashboardFill />User Dashboard</Link></li>
    <li><Link to={'/dashboard/user-profile'}><CgProfile />Profile</Link></li>
    </>
  )

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <UserAvatar size={'w-16'} type={'withPic'}/>
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
          </div>
            <div className="divider"></div>
          {navLinks}
        </ul>

      </div>
    </div>
  )
}
