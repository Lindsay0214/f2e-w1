import Image from "next/image"
import star from "../public/images/bomb-star1.svg"
import greenCircle from "../public/images/sectionThree/green-circle.svg"
import smile from "../public/images/sectionThree/smile.svg"

const SectionThree = () => {
  return (
    <div className="relative h-long bg-primary-lightOrigin">
        <Image className="absolute top-10 right-10" src={star} alt="bomb-star"/>

        <Image className="absolute top-20 left-0" src={greenCircle} alt="green-circle"/>
        <Image className="" src={smile} alt="smile"/>

        <Image className="" src={star} alt="bomb-star"/>
    </div>
  )
}

export default SectionThree