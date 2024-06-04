import { useLoaderData } from "react-router-dom"
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import CandidateCard from "../../Components/UI/CandidateCard";

export default function FindCandidates() {
  const candidates = useLoaderData();
  return (
    <div>
      <PrimaryTitle lgText={'Candidates List'}/>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {
          candidates.map(candidate => <CandidateCard key={candidate.id}
          candidate={candidate}
          />)
        }
      </div>
    </div>
  )
}
