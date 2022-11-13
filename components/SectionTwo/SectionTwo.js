import { useRef, useLayoutEffect } from "react"
import Image from "next/image"
import bigCircle from "../../public/images/sectionTwo/big-circle.svg"
import titleBackground from "../../public/images/sectionTwo/title-background.svg"
import content from "../../public/images/sectionTwo/content.svg"
import brownCircle from "../../public/images/sectionTwo/brown-circle.svg"
import greenFlower from "../../public/images/sectionTwo/green-flower.svg"
import styles from "./SectionTwo.module.css"
import star from "../../public/images/bomb-star1.svg"
import { gsap } from "gsap";

const SectionTwo = () => {
  const loopRef1 = useRef(null)
  const loopRef2 = useRef(null)

  useLayoutEffect(() => {
    gsap.to(loopRef1.current, {
      xPercent: "-50", 
      ease: "none",
      duration: 10,
      repeat: -1,
    });
    gsap.to(loopRef2.current, {
      xPercent: "-50", 
      ease: "none",
      duration: 10,
      repeat: -1,
    });
  }, [])

  return (
    <div className={styles.wrapper}>
        {/* white circle */}
        <div className={styles["white-circle-section"]}>
          <section className={styles.f2e}>
            <ul className={styles.loop} ref={loopRef1}>
              <li>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
              </li>
              <li>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
              </li>
              <li>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
              </li>
            </ul>
          </section>
          {/* white circle */}
          <Image className={styles["white-circle"]} src={bigCircle} alt="big-circle"/>
          {/* title */}
          <div className={styles["title-wrapper"]}>
            <Image className={styles["title-bg"]} src={titleBackground} alt="title-background"/>
            <div className={styles.title}>互動式網頁設計</div>
          <Image className={styles["title-content-img"]} src={content} alt="content"/>
          </div>
          {/* dec-flower */}
          <Image className={styles.flower} src={greenFlower} alt="greenFlower"/>
        </div>

        {/* brown circle */}
        <div className={styles["brown-circle-section"]}>
          <Image className={styles["brown-circle"]} src={brownCircle} alt="brown-circle"/>
          <div>
            <div className={styles["brown-circle-title-wrapper"]}>
              <Image className={styles.star} src={star} alt="star" />
              <div className={styles["brown-circle-title"]}>三大主題來襲</div>
              <div className={styles["brown-circle-title"]}>年度最強合作</div>
            </div>
            <div className={styles["brown-circle-content"]}>各路廠商強強聯手! <br/> 共同設計出接地氣的網頁互動挑戰關卡</div>
          </div>
          <Image className={styles["green-flower"]} src={greenFlower} alt="green-glower"/>
          <section className={styles.f2eb}>
            <ul className={styles.loop} ref={loopRef2}>
              <li>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
              </li>
              <li>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
              </li>
              <li>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
                <span> THE F2E THE F2E THE F2E THE F2E </span>
              </li>
            </ul>
          </section>
        </div>
    </div>
  )
}

export default SectionTwo