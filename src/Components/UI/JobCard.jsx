/* eslint-disable react/prop-types */
import Buttons from './Buttons';
import { FaShoppingBag } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function JobCard({ job, type }) {
    // eslint-disable-next-line react/prop-types
    const { _id, companyLogo, jobTitle, salary, address, variant, post, action } = job;


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl items-center">
            <figure className='w-[30%]'><img className='w-full h-full' src={companyLogo} alt="Company logo" /></figure>
            <div className="card-body px-4">
                <h2 className="card-title">{jobTitle}</h2>
                <div className='flex gap-4 text-lg text-[#6A6A6A]'>
                    <div className="flex gap-2 justify-center items-center">
                        <FaShoppingBag fontSize={'1.5rem'} />
                        <p className='py-2'>{post}</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <FaLocationPin fontSize={'1.5rem'} />
                        <p className='py-2'>{address.split(" ")[3]}</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <FaMoneyBill1Wave fontSize={'1.5rem'} />
                        <p className='py-2'>{salary}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="badge text-[#1967D2] text-lg p-4 badge-outline">{variant}</div>
                    <div className="badge text-[#34A853] text-lg p-4 badge-outline">{action}</div>
                </div>

                {
                    type === 'manage' ?
                        <div className="card-actions justify-center gap-4">
                            <Buttons value={'Details'} />
                            <Link to={`/dashboard/job-update/${_id}`}>
                                <Buttons value={'Update'} />
                            </Link>
                            <Buttons value={'Remove'} />
                        </div>
                        :
                        <div className="card-actions justify-end">
                            <Buttons value={'Apply'} />
                        </div>
                }

            </div>
        </div>
    )
}
