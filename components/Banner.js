import Image from "next/image"
import title from "../public/images/title.svg"
import circle from "../public/images/double-line-circle.svg"
import star from "../public/images/bomb-star.svg"
import square from "../public/images/square.svg"
import leftstar from "../public/images/bomb-star1.svg"
import door from "../public/images/door.svg"
import caterpillar from "../public/images/caterpillar.svg"

const Banner = () => {
  return (
    <div className="relative h-screen bg-primary-lightOrigin flex-row justify-center items-center">
        <Image className="absolute right-6 top-10" src={star} alt="star" />
        <Image className="absolute right-0 top-64" src={square} alt="square" />
        <div className="flex-row justify-center pl-36 ml-96 pt-10">
            <Image src={title} alt="title" />
            <div className="relative text-5xl z-10 py-4">互動式網頁設計</div>
            <div className="relative text-3xl z-10 py-4 tracking-widest">前端 & UI 修煉精神時光屋</div>
        
            <Image className="mt-64 absolute left-40 top-32" src={door} alt="door" />
            <Image className="mt-64 absolute right-60 top-36" src={caterpillar} alt="caterpillar" />

            <button className="bg-white text-black font-bold ml-20 px-3 py-2 tracking-wide mt-52">
                <a href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">點擊立刻報名 →</a>
            </button>
        </div>
        <Image className="ml-96 absolute z-0 left-40 top-44" src={circle} alt="circle" />
        <Image className="absolute left-10 top-64" src={leftstar} alt="leftstar" />
        
    </div>
  )
}

export default Banner