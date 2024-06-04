import { IoSearch } from "react-icons/io5";
import Buttons from "../UI/Buttons";
import bg_img from '../../assets/Background/background_Banner.jpg'


export default function Banner() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg_img})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content w-full">
                <div className="w-4/5 flex flex-col gap-6 justify-center">
                    <h1 className="mb-5 text-6xl font-bold">Find The Best job</h1>
                    <p className="mb-5 text-xl">Search from jobs</p>
                    <label className="input input-bordered flex items-center gap-2 py-10 px-2 text-xl rounded-full">
                    <IoSearch fontSize={'2.5rem'} />
                        <input
                            placeholder="Job title, keywords, or company"
                            className="grow text-[#000] px-4"
                        />
                        <Buttons style={'btn-lg rounded-full px-10'} value={'Find Jobs'}/>
                    </label>
                </div>
            </div>
        </div>
    )
}
