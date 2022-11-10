import { useEffect, useRef } from "react";
import Image from "next/image"
import confused from "../../public/images/confused.svg"
import Card from "../Card/Card"
import styles from "./Section.module.css"
import cx from "classnames"

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const SectionOne = () => {
  gsap.registerPlugin(ScrollTrigger)
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();
  const wrapperRef = useRef()


  useEffect(() => {
    [cardRef1.current, cardRef2.current, cardRef3.current].forEach((section) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: cardRef1.current,
            toggleActions: "play pause resume reset",
            start: "top top",
            end: "+=400",
            scrub: true,
            markers: true,
            pin: true
          }
        })

        .from(cardRef1.current, {
          opacity: 0,
          y: -120,
          duration: "2"
        })

        .from(cardRef2.current, {
          opacity: 0,
          yPercent: -120,
          duration: "2"
        })

        .from(cardRef3.current, {
          opacity: 0,
          y: -120,
          duration: "2"
        });
    });


    // timeline.to(cardRef2.current, {
    //   opacity: 0.5,
    //   duration: 3,
    //   y: "2000px",
    //   delay: "2"
    // })
    // .to(cardRef2.current, {
    //   opacity: 1,
    //   duration: "2",
    //   y: "0",
    //   ease: "3",
    // })

    // gsap.to(cardRef3.current, {
    //   opacity: 0.5,
    //   duration: 1.5,
    //   y: "100",
    //   scrollTrigger: {
    //     trigger: ".wrapper",
    //     toggleActions: "play pause resume reset",
    //     start: "top 80%",
    //     end: "bottom top",
    //     pin: true,
    //   },
    // });
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
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
            <div className={cx(styles.card, styles.card1)} ref={cardRef1}>
              <Card content="動畫技能樹太雜無從下手" color="bg-primary-green" subColor="bg-primary-shadowGreen" />
            </div>
            <div  className={cx(styles.card, styles.card2)} ref={cardRef2}>
              <Card content="羨慕別人的酷酷網頁動畫" color="bg-primary-darkYellow" subColor="bg-primary-yellow" />
            </div>
            <div  className={cx(styles.card, styles.card3)} ref={cardRef3}>
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