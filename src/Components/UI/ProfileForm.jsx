import Buttons from "./Buttons";
import InputFiled from "./InputFiled";
import PrimaryTitle from "./PrimaryTitle";

export default function ProfileForm() {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="w-full">
                    <div className="card w-full shadow-2xl bg-base-100 py-8">
                        {/* sign Up */}
                        <form
                            // onSubmit={onInput}
                            className="card-body gap-6">
                                <PrimaryTitle text={'My Profile'}/>
                            {/* first row */}
                            <div className="flex gap-10 justify-center items-center w-full">
                                <div className="w-1/2">
                                    {/* username */}
                                    <InputFiled  type={'text'} name={'userName'} placeholder={'Username'}
                                        labelText={'Full Name'}
                                    />
                                </div>
                                <div className="w-1/2">
                                    {/* email */}
                                    <InputFiled type={'email'} name={'email'} placeholder={'Email'}
                                        labelText={'Email'}
                                    />
                                </div>
                            </div>
                            {/* second row */}
                            <div className="flex gap-10 justify-center items-center w-full">
                                <div className="w-1/2">
                                    {/* username */}
                                    <InputFiled  type={'text'} name={'userName'} placeholder={'Username'}
                                        labelText={'Full Name'}
                                    />
                                </div>
                                <div className="w-1/2">
                                    {/* email */}
                                    <InputFiled type={'email'} name={'email'} placeholder={'Email'}
                                        labelText={'Email'}
                                    />
                                </div>
                            </div>
                            {/* third row */}
                            <div className="flex gap-10 justify-center items-center w-full">
                                <div className="w-1/2">
                                    {/* username */}
                                    <InputFiled type={'text'} name={'userName'} placeholder={'Username'}
                                        labelText={'Full Name'}
                                    />
                                </div>
                                <div className="w-1/2">
                                    {/* email */}
                                    <InputFiled type={'email'} name={'email'} placeholder={'Email'}
                                        labelText={'Email'}
                                    />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <Buttons type={'submit'} value={'Save Change'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
