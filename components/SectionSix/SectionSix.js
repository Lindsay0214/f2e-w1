import styles from "./SectionSix.module.css"
import Image from "next/image"
import kdan from "../../public/images/SectionSix/KDAN.svg"
import titan from "../../public/images/SectionSix/TITAN.svg"
import block from "../../public/images/SectionSix/BLOCK.svg"
import star from "../../public/images/SectionSix/white-star.svg"

const SectionSix = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles["title-wrapper"]}>
            <Image className={styles.star} src={star} alt="star" />
            <div className={styles.title}>本次活動贊助單位</div>
            <Image className={styles.star} src={star} alt="star" />
        </div>
        <div className={styles["board-wrapper"]}>
            <div className={styles.board}>
                <Image className={styles.company} src={kdan} alt="kdan" />
            </div>
            <div className={styles.board}>
                <Image className={styles.company} src={titan} alt="" />
            </div>
            <div className={styles.board}>
                <Image className={styles.company} src={block} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SectionSix