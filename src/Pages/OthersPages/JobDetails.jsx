import { FaShoppingBag } from "react-icons/fa";
import { FaLocationPin, FaMoneyBill1Wave } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom"
import Buttons from "../../Components/UI/Buttons";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";

export default function JobDetails() {
  const { id } = useParams();
  const jobs = useLoaderData();

  const existingJob = jobs.find(job => job._id === id)

  console.log(existingJob)


  return (
    <div className="my-20 flex flex-col gap-8">
      <PrimaryTitle value={"Job Description"} />
      <div className="flex justify-between mx-8 items-center bg-[#F4F7FC]">
        <div className='flex items-center gap-4'>
          <div>

            {/* pic */}
            <div className="avatar">
              <div className={`rounded-lg w-16`}>
                <img src={existingJob?.companyLogo} />
              </div>
            </div>
          </div>

          {/* top content */}
          <div className="card-body px-4">
            <h2 className="card-title">{existingJob?.jobTitle}</h2>
            <div className='flex gap-4 text-lg text-[#6A6A6A]'>
              <div className="flex gap-2 justify-center items-center">
                <FaShoppingBag fontSize={'1.5rem'} />
                <p className='py-2'>{existingJob?.post}</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <FaLocationPin fontSize={'1.5rem'} />
                <p className='py-2'>{existingJob?.address.split(" ")[3]}</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <FaMoneyBill1Wave fontSize={'1.5rem'} />
                <p className='py-2'>{existingJob?.salary}</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <MdOutlineWatchLater fontSize={'1.5rem'} />
                <p className='py-2'>{existingJob?.published_date}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="badge text-[#1967D2] text-lg p-4 badge-outline">{existingJob?.variant}</div>
              <div className="badge text-[#34A853] text-lg p-4 badge-outline">{existingJob?.action}</div>
            </div>
          </div>
        </div>

        {/* button */}
        <div>
          <Buttons value={'Apply Now'} />
        </div>
      </div>

      {/* second row */}
      <div className="flex gap-4 justify-between mx-8">

        {/* left side */}
        <div className="flex flex-col justify-start gap-8">
          <h1 className="text-3xl text-start">Job Description</h1>
          <p className="text-xl">{existingJob.details}</p>
        </div>

        {/* right side */}
        <div className="flex flex-col justify-start bg-[#F4F7FC] px-8 py-8">
          <div className="flex justify-start items-center gap-4">
            <FaLocationPin fontSize={'2rem'} />
            <p className='py-2'>{existingJob?.address}</p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <FaMoneyBill1Wave fontSize={'2rem'} />
            <p className='py-2'>{existingJob?.salary}</p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <GrUserManager fontSize={'2rem'}/>
            <p className='py-2'>{existingJob?.post}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
