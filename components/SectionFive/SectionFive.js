import styles from "./SectionFive.module.css"

const SectionFive = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>區區修煉已經無法滿足了嗎？還有比賽等著你！</div>
            <div className={styles["section-wrapper"]}>
            <div className={styles.circle}></div>
            <div className={styles["board-section"]}>
                <div className={styles["green-board"]}></div>
                <div className={styles.section}>
                    <div className={styles["sub-title"]}>評審機制</div>
                    <div className={styles.board}>
                        <p>初選</p>
                        <p>將由六角學院前端、UI 評審進行第一波篩選。</p>
                        <p>決選</p>
                        <p>由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</p>
                    </div>
                </div>
            </div>

            <div className={styles.circle}></div>
            <div className={styles["board-section"]}>
                <div className={styles["green-board-right"]}></div>
                <div className={styles.section}>
                    <div className={styles["sub-title"]}>比賽獎項</div>
                    <div className={styles.board}>
                        <p>1. 初選佳作 共六十位 數位獎狀</p>
                        <p>2. 個人企業獎 共六位 NTD 3,000/位</p>
                        <p>3. 團體企業獎 共三組 NTD 10,000/組</p>
                        <p>4. 以上皆提供完賽數位獎狀</p>
                    </div>
                </div>
            </div>

            <div className={styles.circle}></div>

            <div className={styles["button-wrapper"]}>
                <div className={styles.border}></div>
                <button className={styles.button}><a href="https://2022.thef2e.com/" target="_blank" rel="noreferrer">立即報名</a></button>
                <div className={styles.border}></div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive