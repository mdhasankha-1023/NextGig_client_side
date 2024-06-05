import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import InputFiled from "./InputFiled";
import SocialMedeaButton from "./SocialMedeaButton";

// eslint-disable-next-line react/prop-types
export default function EmployerForm({onInput, onGoogle,  onFacebook}) {
    return (
        <>
            {/* sign Up */}
            <form
                onSubmit={onInput}
                className="card-body gap-6">
                {/* company name */}
                <InputFiled icon={'user'} type={'text'} name={'companyName'} placeholder={'Company Name'} />

                <div className="flex gap-10">
                    {/* password */}
                    <div className="w-1/2">
                        {/* email */}
                        <InputFiled icon={'email'} type={'email'} name={'email'} placeholder={'Email'} />

                    </div>
                    {/* confirm password */}
                    {/* email */}
                    <InputFiled icon={'phone'} type={'number'} name={'number'} placeholder={'Phone Number'} />
                </div>
                <div className="flex gap-10">
                    {/* password */}
                    <div className="w-1/2">
                        <InputFiled
                            icon={'password'}
                            type={'password'} name={'password'} placeholder={'Password'} />

                    </div>
                    {/* confirm password */}
                    <div className="w-1/2">
                        <InputFiled
                            icon={'password'}
                            type={'password'} placeholder={'Confirm Password'} />
                    </div>
                </div>

                {/* company logo */}
                <InputFiled icon={'url'} type={'text'} name={'companyLogo'} placeholder={'Company logo URL'} />
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
    )
}
