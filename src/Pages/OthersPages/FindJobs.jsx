import { useLoaderData } from "react-router-dom";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import JobCard from "../../Components/UI/JobCard";

export default function FindJobs() {
    const jobs =  useLoaderData();
    console.log(jobs.posted_jobs)


  return (
    <div className="mt-20 w-4/5 mx-auto">
        <PrimaryTitle lgText={'Jobs List'}/>
        <div className="grid grid-cols-1 gap-y-8 my-20">
            {
                jobs.posted_jobs?.map(job => <JobCard key={job.id} job={job}/>)
            }
        </div>
    </div>
  )
}
