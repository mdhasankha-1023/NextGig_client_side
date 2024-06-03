import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import InputFiled from "./InputFiled";
import PrimaryTitle from "./PrimaryTitle";

// eslint-disable-next-line react/prop-types
export default function Form({ type }) {
    return (
        <div>
            <div className="hero h-screen bg-base-200">
                <div className="hero-content w-2/5">
                    <div className="card w-full shadow-2xl bg-base-100 py-8">
                        {
                            type === 'signUp' ?

                                <>
                                    <PrimaryTitle text={'Create Account'} />
                                    {/* sign Up */}
                                    <form className="card-body gap-6">
                                        {/* username */}
                                        <InputFiled icon={'user'} type={'text'} name={'userName'} placeholder={'Username'} />

                                        {/* email */}
                                        <InputFiled icon={'email'} type={'email'} name={'email'} placeholder={'Email'} />

                                        {/* password */}
                                        <InputFiled
                                            icon={'password'}
                                            type={'password'} name={'password'} placeholder={'Password'} />

                                        {/* confirm password */}
                                        <InputFiled
                                            icon={'password'}
                                            type={'password'} name={'password'} placeholder={'Confirm Password'} />

                                        <div className="form-control mt-6">
                                            <Buttons value={'Sign Up'} />
                                        </div>
                                    </form>
                                    <p className="text-center">You have an account? <Link className="text-xl underline" to={'/signIn'}>Sign in</Link>
                                    </p>
                                </>
                                :
                                <>
                                <PrimaryTitle text={'Sign In'}/>
                                {/* sign In */}
                                    <form className="card-body gap-6">

                                        {/* email */}
                                        <InputFiled icon={'email'} type={'email'} name={'email'} placeholder={'Email'} />

                                        {/* password */}
                                        <InputFiled
                                            icon={'password'}
                                            type={'password'} name={'password'} placeholder={'Password'} />

                                        <div className="form-control mt-6">
                                            <Buttons value={'Sign In'} />
                                        </div>
                                    </form>
                                    <p className="text-center">You have no account? <Link className="text-xl underline text-center" to={'/signUp'}>Sign Up</Link>
                                    </p>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
