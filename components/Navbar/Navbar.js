import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-container"]}>
        <a href="#" className={styles.link}>
            <p className={styles.title}>THE F2E</p>
        </a>
        
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-primary-green rounded-lg md:hidden hover:bg-primary-green hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <svg className={styles.ham} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className={styles["nav-wrapper"]}>
            <li>
              <a href="#" className={styles["nav-item"]} aria-current="page">關卡資訊</a>
            </li>
            <li>
              <a href="#" className={styles["nav-item"]}>作品列表</a>
            </li>
            <li>
              <a href="#" className={styles["nav-item"]}>攻略資訊</a>
            </li>
            <li>
              <a href="#" className={styles["nav-item"]}>求職專區</a>
            </li>
            <li>
              <a href="#" className={styles["nav-item"]}>我要報名</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar