import styles from "./Card.module.css"
import cx from "classnames"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Card = ({ color, content, subColor }) => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      gsap.to(".content", {
        opacity: 1,
        x: 100,
        scrollTrigger: {
          trigger: ".wrapper",
          end: 900,
          pin: true,
          pinSpacing: false
        }
      });
    }, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
        <div className={cx(styles.color, `${color}`)}>
            <div className={styles.content}>&ldquo;{content}?&ldquo;</div>
        </div>
        <div className={cx(styles.sub, `${subColor}`)}></div>
    </div>
  )
}

export default Card