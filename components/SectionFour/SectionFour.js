import styles from "./SectionFour.module.css"
import blackStar from "../../public/images/SectionFour/black-star.svg"
import Image from "next/image"
import cx from "classnames"

const Info = ({ tagOne, tagTwo, title, h1, dateOne, dateTwo, color, link }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles["section-one"]}>
                <div className={styles["line-wrapper"]}>
                    <Image className={styles.star} src={blackStar} alt="black-star" />
                    <div className={styles.border}></div>
                </div>
                
                <h1 className={cx(styles.h1, styles[`${color}`])}>{title}</h1>
                
                <div className={styles["line-wrapper"]}>
                    <div className={styles.border}></div>
                    <Image className={styles["right-star"]} src={blackStar} alt="black-star" />
                </div>
            </div>

            <div className={styles["section-two"]}>
                <div className={styles.title}>{h1}</div>
                <div className={styles.detail}>
                    <span className={styles.tag}>{tagOne}</span>
                    <span className={styles.tag}>{tagTwo}</span>
                    <div className={styles.content}>
                        <p>各組別投稿時間</p>
                        <p>UI 組投稿區間：{dateOne}</p>
                        <p>前端組投稿區間：{dateTwo}</p>
                    </div>
                    <button className={styles.button}><a href={link} target="_blank" rel="noreferrer">更多關卡資訊 →</a></button>
                </div>
            </div>
        </div>
    )
    
}

const SectionFour = () => {
  return (
    <>
        <Info
            tagOne="#視差滾動"
            tagTwo="#版塊設計"
            title="Week1"
            color="yellow"
            h1="/ The F2E 活動網站設計 /"
            dateOne="10/31(一) 12:00 PM ~ 11/7(一) 12:00 PM"
            dateTwo="11/7(一) 12:00 PM ~ 11/14(一) 12:00 PM"
            link="https://2022.thef2e.com/news/week1"
        />
        <Info
            tagOne="#Canvas"
            tagTwo="#凱鈿行動科技"
            title="Week2"
            color="orange"
            h1="/ 今晚，我想來點點簽 /"
            dateOne="11/7(一) 12:00 PM ~ 11/14(一) 12:00 PM"
            dateTwo="11/14(一) 12:00 PM ~ 11/21(一) 12:00 PM"
            link="https://2022.thef2e.com/news/week2"
        />
        <Info
            tagOne="#JS draggable"
            tagTwo="#鈦坦科技"
            title="Week3"
            color="green"
            h1="/ Scrum 新手村 /"
            dateOne="11/14(一) 12:00 PM ~ 11/21(一) 12:00 PM"
            dateTwo="11/21(一) 12:00 PM ~ 11/28(一) 12:00 PM"
            link="https://2022.thef2e.com/news/week3"
        />
    </>
  )
}

export default SectionFour