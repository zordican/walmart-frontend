import Cart from "../cart/Cart"
import Profile from "../profile/Profile"
import styles from "./Navbar.module.scss"

function Navbar() {
  return (
    <nav className={styles.navbar}>

      <div className = {styles.logo}>
        <img src="https://res.cloudinary.com/dp3aoinmu/image/upload/v1722868874/Walmart_PNG/asdqtv2h8pcla1czjz0s.png" alt="Walmart" />
      </div>

      <div className={styles.search}>
        <form action="" className={styles.search_box}>
          <input className={styles.search_input} type="text" placeholder="Search everything at Walmart online and in store" />
          <button className={styles.search_btn} type="submit"><img src="https://res.cloudinary.com/dp3aoinmu/image/upload/v1722870251/Walmart_PNG/iglakds6upd398ap9j3k.png" alt="" /></button>
        </form>
      </div>

      <div className={styles.items}>
        <button className={styles.items_Button}><span className={styles.reorder}>Reorder</span> <br />My Items</button>
      </div>

      <Profile/>

      <Cart/>
    </nav>
  )
}

export default Navbar
