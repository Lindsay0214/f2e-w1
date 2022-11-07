import Image from "next/image"
import bigCircle from "../public/images/sectionTwo/big-circle.svg"
import titleBackground from "../public/images/sectionTwo/title-background.svg"
import content from "../public/images/sectionTwo/content.svg"
import brownCircle from "../public/images/sectionTwo/brown-circle.svg"
import greenFlower from "../public/images/sectionTwo/green-flower.svg"

const SectionTwo = () => {
  return (
    <div className="relative h-screen bg-primary-shadowGreen">
        {/* white circle */}
        <div>
          <Image className="absolute right-0 z-0 top-20" src={bigCircle} alt="big-circle"/>
          <div className="absolute z-10 flex-row items-center justify-center top-40">
            <div className="relative z-20 text-5xl font-black tracking-widest">互動式網頁設計</div>
            <div>
              <Image className="absolute bottom-0" src={titleBackground} alt="title-background"/>
            </div>
          <Image className="absolute z-20 w-full" src={content} alt="content"/>
          </div>

          <Image className="absolute left-0 top-72 w-70" src={greenFlower} alt="greenFlower"/>
        </div>

        {/* brown circle */}
        <div className="absolute top-2/3">
          <Image className="z-10" src={brownCircle} alt="brown-circle"/>
          <div>
            <div className="absolute z-20 text-5xl font-black tracking-widest text-white top-20">
              <div>年度最強合作</div>
              <div className="bg-primary-gray">三大主題來襲</div>
            </div>
            <div className="absolute z-20 font-bold text-white top-48">各路廠商強強聯手! <br/> 共同設計出接地氣的網頁互動挑戰關卡</div>
          </div>
          <Image className="absolute bottom-0 right-0" src={greenFlower} alt="greenFlower"/>
        </div>
    </div>
  )
}

export default SectionTwo