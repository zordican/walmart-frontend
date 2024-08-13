import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import styles from "./CartItem.module.scss" 

const CartItem = ({ price,name, key,rating,numRatings, addedBy, imageUrl }) => {
  // const { photo, productId, name, price, quantity, byId } = cartItem; // , stock
  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt={name} />
      <article>
        <Link to={`/product/${key}`}>{name}</Link>
        <span><b>₹{price}</b></span>
        <span><b>Added By: </b> {addedBy}</span>
        <p>Product rating: <meter class="average-rating" min="0" max="5" value={rating} title="4.3 out of 5 stars">4.3 out of 5</meter>
        <p>Number of ratings: {numRatings}</p>
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
