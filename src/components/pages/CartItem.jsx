import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import styles from "./CartItem.module.scss" 

const CartItem = ({ price,name, key,rating }) => {
  // const { photo, productId, name, price, quantity, byId } = cartItem; // , stock
  return (
    <div className={styles.cartItem}>
      <img src={`https://i5.walmartimages.com/seo/Freshness-Guaranteed-Chocolate-Chip-Bakery-Cookies-14-oz-10-Count_b8ff1c98-71aa-4cb8-8cd4-018ab0b2ac50.52b12ed2c82a7d96fe7dd87f10088782.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF`} alt={name} />
      <article>
        <Link to={`/product/${key}`}>{name}</Link>
        <span><b>₹{price}</b></span>
        {/* <span><b>Added By: </b> {byId}</span> */}
        <p>Product rating: <meter class="average-rating" min="0" max="5" value={rating} title="4.3 out of 5 stars">4.3 out of 5</meter>
</p>
      </article>
      <div>
        <button>-</button>
        <p>2</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
