import Image from "next/image"
import confused from "../public/images/confused.svg"
import Card from "../components/Card"

const SectionOne = () => {
  return (
    <div className="relative">
        <div className='w-full h-20 bg-primary-yellow'></div>
        <div className="bg-primary-lightOrigin">
          {/* dot dot dot */}
          <div className="flex justify-center py-24">
            <div className="w-8 h-8 rounded-full mx-36 bg-primary-darkYellow"></div>
            <div className="w-8 h-8 rounded-full mx-36 bg-primary-darkYellow"></div>
            <div className="w-8 h-8 rounded-full mx-36 bg-primary-darkYellow"></div>
          </div>
          {/* content */}
          <div className="grid h-screen grid-flow-col grid-rows-3 px-10">
            <div></div>
            <div></div>
            <div>
              <Card content="動畫技能樹太雜無從下手" color="bg-primary-green" subColor="bg-primary-shadowGreen" />
            </div>
            <div></div>
            <div>
              <Card content="羨慕別人的酷酷網頁動畫" color="bg-primary-darkYellow" subColor="bg-primary-yellow" />
            </div>
            <div></div>
            <div>
              <Card content="滿足不了同事的許願" color="bg-primary-darkOrange" subColor="bg-primary-shadowOrange" />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Image className="absolute right-0 bottom-20" src={confused} alt="confused"/>
        <div className='w-full h-20 bg-primary-yellow'></div>
    </div>
  )
}

export default SectionOne