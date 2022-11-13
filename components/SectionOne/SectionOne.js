import { useLayoutEffect, useRef } from "react";
import Image from "next/image"
import confused from "../../public/images/confused.svg"
import Card from "../Card/Card"
import styles from "./Section.module.css"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const SectionOne = () => {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null) 
  const cardRef = useRef(null) 

  useLayoutEffect(() => {
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 1,
      }
    })

    gsap.utils.selector(cardRef)("#card").forEach(card => 
      t2.fromTo(
        card,
        {
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom bottom",
            scrub: 1,
          },
          y: 200,
          opacity: 0,
          ease: "none"
        },
        {
          y: 0,
          opacity: 1,
          ease: "none"
        }
      ))

      return () => {
        if (t2) t2.kill()
      }
  }, [])

  return (
    <div className={styles.wrapper} ref={sectionRef}>
        <div className={styles.line}></div>
        <div className={styles.bg}>
          {/* dot dot dot */}
          <div className={styles["dot-wrapper"]}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          {/* content */}
          <div ref={cardRef} className={styles["card-wrapper"]}>
            <div id="card" className={styles.card} >
              <Card content="動畫技能樹太雜無從下手" color="bg-primary-green" subColor="bg-primary-shadowGreen" />
            </div>
            <div id="card" className={styles.card}>
              <Card content="羨慕別人的酷酷網頁動畫" color="bg-primary-darkYellow" subColor="bg-primary-yellow" />
            </div>
            <div id="card" className={styles.card}>
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