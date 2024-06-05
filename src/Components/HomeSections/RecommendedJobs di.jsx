import { useEffect, useState } from "react";
import PrimaryTitle from "../UI/PrimaryTitle";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import JobCard from "../UI/JobCard";
import Buttons from "../UI/Buttons";

export default function RecommendedJobs() {

  const [jobs, setJobs] = useState([]);

  const urgent = jobs?.filter(job => job.action === 'urgent')
  const featured = jobs?.filter(job => job.action === 'Featured')

  // console.log(urgent)
  // console.log(featured)

  useEffect(() => {
      fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setJobs(data)
      })
      .catch(error => console.log(error))
  }, [])

  // console.log(jobs)

  return (
    <div className="my-20">
      <PrimaryTitle lgText={'Recommended Jobs'} smText={'Know your worth and find the job that quality your life'} />

      {/* tabs */}
      <div className='text-center w-full mt-8'>
        <Tabs variant='soft-rounded'>
          <TabList style={{ justifyContent: 'center', gap: '40px' }}>
            <Tab _selected={{ color: 'white', bg: '#1967D2', fontSize: '22px' }}>Recent</Tab>
            <Tab _selected={{ color: 'white', bg: '#1967D2', fontSize: '22px' }}>Featured</Tab>
            <Tab _selected={{ color: 'white', bg: '#1967D2', fontSize: '22px' }}>Urgent</Tab>
          </TabList>
          <TabPanels>
            {/* Recent */}
            <TabPanel className="grid grid-cols-2 gap-x-12 gap-y-14">
              {
                jobs
                  ?.slice(0, 4)
                  ?.map(job =>
                    <JobCard key={job.id} job={job} />
                  )
              }
            </TabPanel>

            {/* featured */}
            <TabPanel className="grid grid-cols-2 gap-x-12 gap-y-14">
              {
                featured
                  ?.slice(0, 4)
                  ?.map(job =>
                    <JobCard key={job.id} job={job} />
                  )
              }
            </TabPanel>

            {/* urgent */}
            <TabPanel className="grid grid-cols-2 gap-x-12 gap-y-14">
              {
                urgent
                  ?.slice(0, 4)
                  .map(job =>
                    <JobCard key={job.id} job={job} />
                  )
              }
            </TabPanel>

            {/* Featured */}
            {/* <TabPanel className="grid grid-cols-2 gap-x-12 gap-y-14">
              {
                jobs.map(job =>
                  <JobCard key={job.id} />
                )
              }
            </TabPanel> */}

            {/* urgent */}
            {/* <TabPanel className="grid grid-cols-2 gap-x-12 gap-y-14">
              {
                jobs.map(job =>
                  <JobCard key={job.id} />
                )
              }
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </div>
      <div className="text-center my-10">
        <Buttons value={'Load More Listing'} />
      </div>
    </div>
  )
}
