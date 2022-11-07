import Loading from "../components/Loading"
import MainBanner from "../components/MainBanner"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"

export default function Home() {
  return (
    <>
    {/* <Loading /> */}
      <MainBanner />
      <SectionOne/>
      <SectionTwo />
    </>
  )
}