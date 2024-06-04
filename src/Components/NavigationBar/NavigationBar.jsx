import { useState } from 'react';
import companyLogo from '../../assets/Logo/NextGig.png'
import Buttons from '../UI/Buttons'
import UserAvatar from '../UI/UserAvatar';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

export default function NavigationBar() {
    const { user, logOut } = useAuth();
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();
    console.log(user)

    // handle sign out button
    const signOutBtn = () => {
        logOut()
            .then(() => {
                navigate('/signIn')
            })
            .catch(error => console.log(error))
    }

    // handleToggleBtn
    const handleToggleBtn = () => {
        setToggle(!toggle)
    }

    // nav links
    const lgNavLinks = (
        <>
            <li><a>Item 1</a></li>
            <li><a>Item 1</a></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </>
    )

    const smNavLinks = (
        <>
            <li>
                {user?.email ?
                    <UserAvatar type={'withPic'} />
                    :
                    <UserAvatar sortName={'MH'} />
                }
            </li>

            <li><a>Item 1</a></li>
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 3</a></li>
            <li>
                {
                    user ? <div className="flex flex-col justify-center items-center gap-4">

                        <Buttons value={'Sign In'} />
                        <Buttons value={'Sign Up'} />
                    </div> :
                        <>
                            <Buttons value={'Sign Out'} />

                        </>
                }
            </li>

        </>
    )



    return (
        <div className="navbar bg-none fixed top-0">
            <div className="lg:navbar-start justify-between">

                {/* company logo */}
                <Link to={'/'}>
                    <img className='w-[250px] h-full' src={companyLogo} alt="company logo" />
                </Link>

                <div className="dropdown">
                    {/* toggle icon */}
                    <div onClick={handleToggleBtn} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                </div>
                {/* small device nav link */}
                <ul className={`menu menu-sm absolute top-[35%] content-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-full ${toggle ? 'flex' : 'hidden'}`}>
                    {smNavLinks}
                </ul>
            </div>
            <div className="navbar-center hidden lg:flex">

                {/* large device nav link */}
                <ul className="menu menu-horizontal px-1">
                    {lgNavLinks}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user?.email ?
                        <>
                            <Buttons handler={signOutBtn} value={'Sign Out'} />
                            {user?.photoURL ?
                                <UserAvatar type={'withPic'} />
                                :
                                <UserAvatar />
                            }
                        </> :
                        <div className="flex gap-4">
                            <Link to={"/signIn"}>
                                <Buttons value={'Sign In'} />
                            </Link>
                            <Link to={"/signUp"}>
                                <Buttons value={'Sign Up'} />
                            </Link>


                        </div>

                }
            </div>
        </div>
    )
}
