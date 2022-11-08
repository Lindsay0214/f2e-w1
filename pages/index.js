import Loading from "../components/Loading/Loading"
import MainBanner from "../components/MainBanner"
import SectionOne from "../components/SectionOne/SectionOne"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"

export default function Home() {
  return (
    <div>
      {/* <Loading /> */}
      <MainBanner />
      <SectionOne/>
      <SectionTwo />
      <SectionThree />
    </div>
  )
}