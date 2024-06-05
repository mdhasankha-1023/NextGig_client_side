/* eslint-disable react/prop-types */
import Buttons from "./Buttons";
import InputFiled from "./InputFiled";
import PrimaryTitle from "./PrimaryTitle";

// eslint-disable-next-line react/prop-types
export default function ProfileForm({info, onSaveChange }) {



    return (
        <div className="hero bg-base-200">
            <div className="w-full">
                <div className="card w-full shadow-2xl bg-base-100 py-8">
                    {/* sign Up */}
                    <form onSubmit={onSaveChange}
                        // onSubmit={onInput}
                        className="card-body gap-6">
                        <PrimaryTitle text={'My Profile'} />
                        {/* first row */}
                        <div className="flex gap-10 justify-center items-center w-full">
                            <div className="w-1/2">
                                {/* username */}
                                <InputFiled type={'text'} name={'userName'} placeholder={'Full Name'}
                                labelText={'Full Name'}
                                defaultText={info?.userName}
                                />
                            </div>
                            <div className="w-1/2">
                                {/* email */}
                                <InputFiled type={'email'} name={'email'} placeholder={'Email'}
                                    labelText={'Email'}
                                    defaultText={info?.email}
                                    isTrue={true}
                                />
                            </div>
                        </div>
                        {/* second row */}
                        <div className="flex gap-10 justify-center items-center w-full">
                            <div className="w-1/2">
                                {/* username */}
                                <InputFiled type={'text'} name={'phone'} placeholder={'Phone Number'}
                                    labelText={'Phone Number'}
                                    defaultText={info?.phone}
                                />
                            </div>
                            <div className="w-1/2">
                                {/* email */}
                                <InputFiled type={'text'} name={'nationality'} placeholder={'Nationality'}
                                    labelText={'Nationality'}
                                    defaultText={info?.nationality}
                                />
                            </div>
                        </div>
                        {/* third row */}
                        <div className="form-control mt-6">
                            {/* username */}
                            <InputFiled type={'text'} name={'address'} placeholder={'Your Full Address'}
                                labelText={'Full Address'}
                                defaultText={info?.address}
                            />
                        </div>
                        <div className="mt-6 form-control ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Full Address</span>
                            </label>
                            {/* about */}
                            <textarea placeholder="About Yourself..."
                            defaultValue={info?.about}
                                name="about" className="textarea textarea-bordered textarea-lg"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <Buttons type={'submit'} value={'Save Change'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
