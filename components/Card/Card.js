import styles from "./Card.module.css"
import cx from "classnames"

const Card = ({ color, content, subColor }) => {
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