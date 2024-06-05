import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import JobCard from "../../Components/UI/JobCard";

export default function Manage() {
  const {user} = useAuth();
  const jobs = useLoaderData();

  const postedJobs = jobs.filter(job => job.email === user?.email)
  
  console.log(postedJobs)

  return (
    <div className="w-11/12 mx-auto">
      <PrimaryTitle lgText={'Manage Posted Jobs'} smText={'Manage your  all posted jobs'}/>
      <div className="grid grid-cols-2 gap-x-10 gap-y-12">
        {
          postedJobs?.map(job => <JobCard 
            key={job._id}
            job={job}
            type={'manage'}
            />)
        }
      </div>
    </div>
  )
}
