import { FaTrash } from "react-icons/fa";
import axios from 'axios';
import styles from "./CartItem.module.scss";

const CartItem = ({ price, name, productId, cartId, rating, numRatings, addedBy, imageUrl, onProductRemove }) => {

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/cart/${cartId}/remove-product/${productId}`, { withCredentials: true });
      alert('Product removed from cart');
      onProductRemove(productId);  // Notify parent component about the removal
    } catch (err) {
      console.error('Error removing product from cart:', err);
      alert('Failed to remove product from cart');
    }
  };

  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt={name} />
      <article>
        
        <span><b>₹{price}</b></span>
        <span><b>Added By: </b>{addedBy}</span>
        <p>Product rating: <meter className="average-rating" min="0" max="5" value={rating} title={`${rating} out of 5`}>{rating} out of 5</meter></p>
        <p>Number of ratings: {numRatings}</p>
      </article>
      <div>
        <button>-</button>
        <p>2</p>
        <button>+</button>
      </div>
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
