import Image from "next/image"
import confused from "../../public/images/confused.svg"
import Card from "../Card/Card"
import styles from "./Section.module.css"

const SectionOne = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.line}></div>
        <div className={styles.bg}>
          {/* dot dot dot */}
          <div className={styles["dot-wrapper"]}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          {/* content */}
          <div className={styles["card-wrapper"]}>
            <div className={styles.card}>
              <Card content="動畫技能樹太雜無從下手" color="bg-primary-green" subColor="bg-primary-shadowGreen" />
            </div>
            <div  className={styles.card}>
              <Card content="羨慕別人的酷酷網頁動畫" color="bg-primary-darkYellow" subColor="bg-primary-yellow" />
            </div>
            <div  className={styles.card}>
              <Card content="滿足不了同事的許願" color="bg-primary-darkOrange" subColor="bg-primary-shadowOrange" />
            </div>
          </div>
        </div>
        <Image className={styles.cute} src={confused} alt="confused"/>
        <div className={styles.line}></div>
    </div>
  )
}

export default SectionOne