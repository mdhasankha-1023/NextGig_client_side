import Buttons from './Buttons';
import { FaShoppingBag } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function JobCard({ job }) {
    // eslint-disable-next-line react/prop-types
    const { company_logo, job_title, salary, address, duty_variant, post, job_action } = job;


    return (
            <div className="card lg:card-side bg-base-100 shadow-xl items-center">
                <figure className='w-[30%]'><img className='w-full h-full' src={company_logo} alt="Company logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <div className='flex gap-4 text-lg text-[#6A6A6A]'>
                        <div className="flex gap-2 justify-center items-center">
                            <FaShoppingBag fontSize={'1.5rem'} />
                            <p className='py-2'>{post}</p>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <FaLocationPin fontSize={'1.5rem'} />
                            {/* // eslint-disable-next-line react/prop-types */}
                            <p className='py-2'>{address.split(" ")[3]}</p>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <FaMoneyBill1Wave fontSize={'1.5rem'} />
                            <p className='py-2'>{salary}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="badge text-[#1967D2] text-lg p-4 badge-outline">{duty_variant}</div>
                        <div className="badge text-[#34A853] text-lg p-4 badge-outline">{job_action}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Buttons value={'Apply'} />
                    </div>
                </div>
            </div>
    )
}
