import Banner from "../../Components/HomeSections/Banner";
import HowItWorks from "../../Components/HomeSections/HowItWorks";
import RecommendedJobs from "../../Components/HomeSections/RecommendedJobs di";
import TopCandidates from "../../Components/HomeSections/TopCandidates";

export default function Home() {
  return (
    <div>
      <Banner/>
      <RecommendedJobs/>
      <HowItWorks/>
      <TopCandidates/>
    </div>
  )
}
