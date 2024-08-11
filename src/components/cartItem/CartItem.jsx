import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import styles from "./CartItem.module.scss" 
import 'css-star-rating/css/star-rating.css';

const CartItem = ({ cartItem, incrementHandler, decrementHandler, removeHandler }) => {
  const { photo, productId, name, price, quantity, byId } = cartItem; // , stock
  return (
    <div className={styles.cartItem}>
      <img src={`${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span><b>₹{price}</b></span>
        <span><b>Added By: </b> {byId}</span>
        <p>Product rating: <meter class="average-rating" min="0" max="5" value="3" title="4.3 out of 5 stars">4.3 out of 5</meter>
</p>
      </article>
      <div>
        <button onClick={() => decrementHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button>
      </div>
      <button onClick={() => removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
