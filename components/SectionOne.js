import Image from "next/image"
import confused from "../public/images/confused.svg"

const SectionOne = () => {
  return (
    <div className="relative">
        <div className='bg-primary-yellow h-20 w-full'></div>
        <div className="h-screen bg-primary-lightOrigin">
            <div>動畫技能樹太雜無從下手</div>
            <div>羨慕別人的酷酷網頁動畫</div>
            <div>滿足不了同事的許願</div>
        </div>
        <Image className="absolute bottom-20 right-0" src={confused} alt="confused"/>
        <div className='bg-primary-yellow h-20 w-full'></div>
    </div>
  )
}

export default SectionOne