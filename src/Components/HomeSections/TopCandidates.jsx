import { useEffect, useState } from "react";
import CandidateCard from "../UI/CandidateCard";
import PrimaryTitle from "../UI/PrimaryTitle";
import Buttons from "../UI/Buttons";
import { Link } from "react-router-dom";

export default function TopCandidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/candidates')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCandidates(data)
      })
      .catch(error => console.log(error))
  }, [])
  // console.log(candidates)

  return (
    <div className="my-20">
      <PrimaryTitle lgText={'Top Candidates'} />
      <div className="grid grid-cols-3 gap-x-8">
        {
          candidates
            ?.slice(0, 3)
            ?.map(candidate => <CandidateCard key={candidate.id}
              candidate={candidate}
            />)
        }
      </div>
      <div className="my-8 text-center">
        <Link to={'/find-candidates'}>
          <Buttons value={'Load More Listing'} />
        </Link>
      </div>
    </div>
  )
}
