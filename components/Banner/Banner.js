import styles from "./Banner.module.css"
import Image from "next/image"
import title from "../../public/images/title.svg"
import circle from "../../public/images/double-line-circle.svg"
import star from "../../public/images/bomb-star.svg"
import square from "../../public/images/square.svg"
import leftStar from "../../public/images/bomb-star1.svg"
import door from "../../public/images/door.svg"
import caterpillar from "../../public/images/caterpillar.svg"
import frontend from "../../public/images/frontend.svg"

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      {/* left */}
      <div className="left">
        <Image className={styles["left-star"]} src={leftStar} alt="star" />
        <Image className={styles["text-logo"]} src={frontend} alt="frontend" />
      </div>

      {/* center */}
      <div className={styles.center}>
        {/* center left */}
        <div className={styles["center-left"]}>
          <p className={styles["door-text"]}>I don&apos;t <br/> have a time... </p>
          <Image className={styles.door} src={door} alt="door" />
        </div>

        {/* center center */}
        <div className={styles["center-center"]}>
          <Image className={styles.title} src={title} alt="title" />
          <div className={styles["main-text"]}>互動式網頁設計</div>
          <div className={styles["sub-text"]}>前端 & UI 修煉精神時光屋</div>
          <Image className={styles.circle} src={circle} alt="circle" />


          {/* button */}
          <button className={styles.button}>
            <a className={styles.link} href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">點擊立刻報名 →</a>
          </button>
        </div>

        {/* center right */}
        <div className={styles["center-right"]}>
          <p className={styles["caterpillar-text"]}>ummm... </p>
          <Image className={styles.caterpillar} src={caterpillar} alt="caterpillar" />
        </div>
      </div>

      {/* right */}
      <div>
        <Image className={styles["right-star"]} src={star} alt="star" />
        <Image className={styles.square} src={square} alt="square" />
      </div>
    </div>
  )
}

export default Banner