/* eslint-disable react/prop-types */
import Buttons from "./Buttons";

// eslint-disable-next-line react/prop-types
export default function ProfileInfo({onShow, info}) {
    // const {userName, email, phone, address, about, nationality} = info;
    console.log(info)

    return (
        <div className="hero bg-base-200">
            <div className="w-full">
                <div className="card w-full shadow-2xl bg-base-100 py-12 px-10">
                    <div className="flex justify-end">
                        <Buttons handler={onShow} style={'px-8 py-2'} value={'EDIT'} />
                    </div>
                    {/* first row */}
                    <div className="flex gap-10 justify-center items-center w-full mt-6">
                        <div className="w-1/2">
                            {/* username */}
                            <label className="label">
                                <span className="label-text text-xl font-bold">Full Name</span>
                            </label>
                            <div className='py-3 text-xl'>{info?.userName}</div>
                        </div>
                        <div className="w-1/2">
                            {/* email */}
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <div className='py-3 text-xl'>{info?.email}</div>

                        </div>
                    </div>
                    {/* second row */}
                    <div className="flex gap-10 justify-center items-center w-full mt-6">
                        <div className="w-1/2">
                            {/* username */}
                            <label className="label">
                                <span className="label-text text-xl font-bold">phone Number</span>
                            </label>
                            <div className='py-3 text-xl'>{info?.phone}</div>
                        </div>
                        <div className="w-1/2">
                            {/* email */}
                            <label className="label">
                                <span className="label-text text-xl font-bold">Nationality</span>
                            </label>
                            <div className='py-3 text-xl'>{info?.nationality}</div>

                        </div>
                    </div>
                    {/* third row */}
                    <div className="form-control mt-6">
                        {/* username */}
                        <label className="label">
                            <span className="label-text text-xl font-bold">Full Address</span>
                        </label>
                        <div className='py-3 text-xl'>{info?.address}</div>
                    </div>
                    <div className="form-control mt-6">
                        {/* username */}
                        <label className="label">
                            <span className="label-text text-xl font-bold">About Yourself</span>
                        </label>
                        <div className='px-4 py-3 text-xl'>{info?.about}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
