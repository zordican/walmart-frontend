import Navbar from "../navbar/Navbar.jsx"
import styles from "./Hero.module.scss"

function Hero() {
  return (
   
    <>
     <Navbar/>
        <div className={styles.mainDiv}>
          <div className={`${styles.item1} ${styles.item}`} ></div>
          <div className={`${styles.item2} ${styles.item}`}></div>
          <div className={`${styles.item3} ${styles.item}`}></div>
          <div className={`${styles.item4} ${styles.item}`}></div>
          <div className={`${styles.item5} ${styles.item}`}></div>
          <div className={`${styles.item6} ${styles.item}`}></div>
          <div className={`${styles.item7} ${styles.item}`}></div>
        </div>
    </>
    
  )
}

export default Hero
