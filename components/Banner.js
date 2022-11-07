import Image from "next/image"
import title from "../public/images/title.svg"
import circle from "../public/images/double-line-circle.svg"
import star from "../public/images/bomb-star.svg"
import square from "../public/images/square.svg"
import leftstar from "../public/images/bomb-star1.svg"
import door from "../public/images/door.svg"
import caterpillar from "../public/images/caterpillar.svg"
import frontend from "../public/images/frontend.svg"

const Banner = () => {
  return (
    <div className="relative flex-row items-center justify-center h-screen bg-primary-lightOrigin">
        <Image className="absolute right-6 top-10" src={star} alt="star" />
        <Image className="absolute right-0 top-64" src={square} alt="square" />
        <div className="flex-row justify-center pt-10 pl-36 ml-96">
            <Image src={title} alt="title" />
            <div className="relative z-10 py-4 text-5xl">互動式網頁設計</div>
            <div className="relative z-10 py-4 text-3xl tracking-widest">前端 & UI 修煉精神時光屋</div>
        
            <div>
              <p className="absolute z-10 mt-20 text-3xl font-black left-24">I don&apos;t <br/> have a time... </p>
              <Image className="absolute mt-64 left-40 top-32" src={door} alt="door" />
            </div>
            <div>
              <p className="absolute z-10 mt-16 text-3xl font-black right-56">ummm... </p>
              <Image className="absolute mt-64 right-60 top-36" src={caterpillar} alt="caterpillar" />
            </div>

            <button className="px-3 py-2 ml-20 font-bold tracking-wide text-black bg-white mt-52">
                <a href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">點擊立刻報名 →</a>
            </button>
        </div>
        <Image className="absolute z-0 ml-96 left-40 top-44" src={circle} alt="circle" />
        <Image className="absolute left-10 top-64" src={leftstar} alt="leftstar" />
        <Image className="absolute left-10 bottom-28" src={frontend} alt="frontend" />
        
    </div>
  )
}

export default Banner