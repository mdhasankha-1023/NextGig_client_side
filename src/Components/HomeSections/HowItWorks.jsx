import PrimaryTitle from "../UI/PrimaryTitle";
import { FaPen } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa6";

export default function HowItWorks() {
  return (
    <div>
      <PrimaryTitle lgText={'How It Works?'} smText={'Job for anyone, anywhere'} />

      {/* parent */}
      <div className="flex gap-2 mt-8">

        {/* child 1 */}
        <div className="flex flex-col justify-center  items-center gap-3">
          <div className="w-24 rounded-full bg-primaryBtn">
            <FaPen fontSize={'3rem'} />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-4">Register With Us</h1>
            <p className="text-lg mt-4">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
          </div>
        </div>
        {/* child 2 */}
        <div className="flex flex-col justify-center  items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <FaWpforms fontSize={'3rem'} />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-4">Create Your Profile</h1>
            <p className="text-lg mt-4">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
          </div>
        </div>
        {/* child 3 */}
        <div className="flex flex-col justify-center  items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <MdOutlineScreenshotMonitor fontSize={'3rem'} />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-4">Upload Your resume</h1>
            <p className="text-lg mt-4">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
          </div>
        </div>
        {/* child 4 */}
        <div className="flex flex-col justify-center  items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <TbHandClick fontSize={'3rem'} />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-4">Now Take  a Rest</h1>
            <p className="text-lg mt-4">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
