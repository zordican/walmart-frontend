import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
  

const CartItem = ({ cartItem, incrementHandler, decrementHandler, removeHandler }) => {
  const { photo, productId, name, price, quantity } = cartItem; // , stock
  return (
    <div className="cart-item">
      <img src={`/${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span><b>₹{price}</b></span>
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
