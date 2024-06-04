import Banner from "../../Components/HomeSections/Banner";
import HowItWorks from "../../Components/HomeSections/HowItWorks";
import RecommendedJobs from "../../Components/HomeSections/RecommendedJobs di";
import Testimonials from "../../Components/HomeSections/Testimonials";
import TopCandidates from "../../Components/HomeSections/TopCandidates";
import TopRegisteredCompany from "../../Components/HomeSections/TopRegisteredCompany";

export default function Home() {
  return (
    <div>
      <Banner/>
      <RecommendedJobs/>
      <HowItWorks/>
      <TopCandidates/>
      <TopRegisteredCompany/>
      <Testimonials/>
    </div>
  )
}
