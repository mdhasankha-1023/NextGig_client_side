import SignInForm from "./SignInForm";
import CandidateForm from "./CandidateForm";
import EmployerForm from "./EmployerForm";

// eslint-disable-next-line react/prop-types
export default function Form({ type, onGoogle, onFacebook, onInput }) {

    return (
        <div className="hero h-screen">
            <div className="hero-content lg:w-[50%] w-full">
                <div className="card w-full shadow-2xl bg-base-100 py-8">
                    {type === 'signIn' ?
                        <SignInForm
                            onInput={onInput}
                            onFacebook={onFacebook}
                            onGoogle={onGoogle} />
                        :
                            type === 'employer' ?
                            <EmployerForm onInput={onInput}
                                onFacebook={onFacebook}
                                onGoogle={onGoogle} />
                            :
                            <CandidateForm onInput={onInput}
                                onFacebook={onFacebook}
                                onGoogle={onGoogle} />
                        
                    }
                </div>
            </div>
        </div>
    )
}
