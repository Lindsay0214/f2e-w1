import Image from "next/image"
import star from "../../public/images/bomb-star1.svg"
import greenCircle from "../../public/images/sectionThree/green-circle.svg"
import smile from "../../public/images/sectionThree/smile.svg"
import styles from "./SectionThree.module.css"
import greenFlower from "../../public/images/sectionTwo/green-flower.svg"
import lineOne from "../../public/images/sectionThree/line-one.svg"
import lineTwo from "../../public/images/sectionThree/line-two.svg"
import lineThree from "../../public/images/sectionThree/line-three.svg"
import lineFour from "../../public/images/sectionThree/line-four.svg"

const SectionThree = () => {
  return (
    <div className={styles.wrapper}>
        <Image className={styles.star} src={star} alt="bomb-star"/>

        <Image className={styles["green-circle"]} src={greenCircle} alt="green-circle"/>
        <Image className={styles.smile} src={smile} alt="smile"/>

        <Image className={styles["line-one"]} src={lineOne} alt="line-one"/>
        <Image className={styles["line-two"]} src={lineTwo} alt="line-two"/>
        <Image className={styles["line-three"]} src={lineThree} alt="line-three"/>
        <Image className={styles["line-four"]} src={lineOne} alt="line-four"/>


        <div className={styles["title-wrapper-one"]}>
          <h2 className={styles.title}>報名時間</h2>
          <h3 className={styles.title}>SIGN UP</h3>
          <p className={styles.content}>開放報名 10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59</p>
        </div>

        <div className={styles["title-wrapper-two"]}>
          <h2 className={styles.title}>比賽開始</h2>
          <h3 className={styles.title}>START</h3>
          <p className={styles.content}>各組別開賽 <br/> 10/31(一) UI組、團體組開賽 <br/> 11/7 (一）前端組開賽</p>
        </div>

        <div className={styles["title-wrapper-three"]}>
          <h2 className={styles.title}>登陸作品</h2>
          <h3 className={styles.title}>UPLOAD</h3>
          <p className={styles.content}>10/31(一) 中午 12:00 - 11/28(一) 中午 12:00</p>
        </div>

        <div className={styles["title-wrapper-four"]}>
          <h2 className={styles.title}>線上直播</h2>
          <h3 className={styles.title}>STEAM</h3>
          <p className={styles.content}>11/3 - 11/24（每週四）</p>
        </div>

        <Image className={styles["green-flower"]} src={greenFlower} alt="green-flower" />
        <Image className={styles["bottom-star"]} src={star} alt="bomb-star"/>
    </div>
  )
}

export default SectionThree