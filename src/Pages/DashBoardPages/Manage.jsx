import { useLoaderData } from "react-router-dom";

export default function Manage() {
  const jobs = useLoaderData();

  console.log(jobs)


  return (
    <div>Manage</div>
  )
}
