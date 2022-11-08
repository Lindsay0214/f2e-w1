import butterfly from '../../public/images/butterfly.svg'
import Image from 'next/image'
import styles from "./Loading.module.css"

const Loading = () => {
  return (
      <div className={styles.loading}>
        <div className={styles.butterfly}>
            <Image src={butterfly} alt="butterfly" />
        </div>
          <div className={styles["loading-status"]}>
            <div className={styles["loading-bar"]}></div>
            <div className={styles.text}>complete</div>
        </div>
    </div>
  )
}

export default Loading