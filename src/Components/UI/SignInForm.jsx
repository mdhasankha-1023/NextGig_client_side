import { Link } from "react-router-dom";
import SocialMedeaButton from "./SocialMedeaButton";
import Buttons from "./Buttons";
import InputFiled from "./InputFiled";
import PrimaryTitle from "./PrimaryTitle";

// eslint-disable-next-line react/prop-types
export default function SignInForm({onGoogle, onFacebook, onInput}) {
    return (
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
                <SocialMedeaButton handler={onGoogle} text={'SignIn with Google'} icon={'google'} />
                <SocialMedeaButton handler={onFacebook} text={'SignIn with facebook'} icon={'facebook'} />
            </div>
        </>
    )
}
