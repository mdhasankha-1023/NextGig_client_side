import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import InputFiled from "./InputFiled";
import PrimaryTitle from "./PrimaryTitle";
import SocialMedeaButton from "./SocialMedeaButton";

// eslint-disable-next-line react/prop-types
export default function Form({ type, onGoogle, onFacebook, onInput }) {
    return (
        <div>
            <div className="hero h-screen bg-base-200">
                <div className="hero-content lg:w-2/5 w-full">
                    <div className="card w-full shadow-2xl bg-base-100 py-8">
                        {
                            type === 'signUp' ?

                                <>
                                    <PrimaryTitle text={'Create Account'} />
                                    {/* sign Up */}
                                    <form 
                                    onSubmit={onInput}
                                    className="card-body gap-6">
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
                                            type={'password'} placeholder={'Confirm Password'} />

                                        <div className="form-control mt-6">
                                            <Buttons type={'submit'} value={'Sign Up'} />
                                        </div>
                                    </form>
                                    <p className="text-center">You have an account? <Link className="text-xl underline" to={'/signIn'}>Sign in</Link>
                                    </p>
                                    <div className="mt-6 px-8 w-full flex flex-col gap-6 justify-center items-center">
                                        <SocialMedeaButton
                                        handler={onGoogle}
                                        text={'SignUp with Google'} icon={'google'} />
                                        <SocialMedeaButton 
                                        handler={onFacebook}
                                        text={'SignUp with facebook'} icon={'facebook'} />
                                    </div>
                                </>
                                :
                                <>
                                    <PrimaryTitle text={'Sign In'} />
                                    {/* sign In */}
                                    <form 
                                    onSubmit={onInput}
                                    className="card-body gap-6">

                                        {/* email */}
                                        <InputFiled icon={'email'} type={'email'} name={'email'} placeholder={'Email'} />

                                        {/* password */}
                                        <InputFiled
                                            icon={'password'}
                                            type={'password'} name={'password'} placeholder={'Password'} />

                                        <div className="form-control mt-6">
                                            <Buttons type={'submit'} value={'Sign In'} />
                                        </div>
                                    </form>
                                    <p className="text-center">You have no account? <Link className="text-xl underline text-center" to={'/signUp'}>Sign Up</Link>
                                    </p>
                                    <div className="mt-6 px-8 w-full flex flex-col gap-6 justify-center items-center">
                                        <SocialMedeaButton text={'SignIn with Google'} icon={'google'} />
                                        <SocialMedeaButton text={'SignIn with facebook'} icon={'facebook'} />
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
