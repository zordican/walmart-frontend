import Navbar from "../navbar/Navbar.jsx"
import styles from "./Hero.module.scss"

function Hero() {
  return (
   
    <>
     <Navbar/>
        <div className={styles.mainDiv}>
          <div className={`${styles.item1} ${styles.item}`} >
            <img src="https://res.cloudinary.com/dp3aoinmu/image/upload/v1723389449/Walmart_PNG/cdkzlgxeoskx2gh5i0ia.jpg" alt="" />
            <div className={styles.text}>
              <h2>Stay Hydrated, <br /> Stay Happy</h2>
            </div>
          </div>
          <div className={`${styles.item2} ${styles.item}`}>
          <div className={styles.text}>
              <h2>Stay Hydrated, <br /> Stay Happy</h2>
            </div>
          </div>
          <div className={`${styles.item3} ${styles.item}`}>
          <div className={styles.text}>
              <h2>Stay Hydrated, <br /> Stay Happy</h2>
            </div>
          </div>
          <div className={`${styles.item4} ${styles.item}`}>
          <div className={styles.text}>
              <h2>Stay Hydrated, <br /> Stay Happy</h2>
            </div>
          </div>
          <div className={`${styles.item5} ${styles.item}`}>
            <img src="https://res.cloudinary.com/dp3aoinmu/image/upload/v1723391534/Walmart_PNG/pk5coqa8qg0hpnzm5t6h.jpg" alt="" />
          <div className={styles.text}>
              <h2>Thocky Keyboard</h2>
            </div>
          </div>
          <div className={`${styles.item6} ${styles.item}`}>
          <div className={styles.text}>
              <h2>Stay Hydrated, <br /> Stay Happy</h2>
            </div>
          </div>
          <div className={`${styles.item7} ${styles.item}`}>
          <div className={styles.text}>
              <h2>Stay Hydrated, <br /> Stay Happy</h2>
            </div>
          </div>
        </div>
    </>
    
  )
}

export default Hero
