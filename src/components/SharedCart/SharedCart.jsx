import Navbar from "../navbar/Navbar";
import styles from "./SharedCart.module.scss"
import CartItem from "../cartItem/CartItem";

function SharedCart() {
  const isCartEmpty = false;
  const isLogin = true;

  const cartItems = [
    {
      productId: "12345",
      photo: "images/product1.jpg",
      name: "Sample Product 1",
      price: 199.99,
      quantity: 2,
      stock: 10
    },
    {
      productId: "67890",
      photo: "images/product2.jpg",
      name: "Sample Product 2",
      price: 299.99,
      quantity: 1,
      stock: 5
    },
    {
      productId: "24680",
      photo: "images/product3.jpg",
      name: "Sample Product 3",
      price: 149.99,
      quantity: 3,
      stock: 8
    }
  ];
  

  const incrementHandler = (cartItem) => {
    console.log("Incrementing quantity for", cartItem.name);
    if(cartItem.quantity < cartItem.stock){
      cartItem.quantity = cartItem.quantity + 1;
    }
  };
  
  const decrementHandler = (cartItem) => {
    console.log("Decrementing quantity for", cartItem.name);
    if(cartItem.quantity > 0){
      cartItem.quantity = cartItem.quantity - 1;
    }
  };
  
  const removeHandler = (id) => {
    console.log("Removing item with id", id);
  };
  return (
    <div>
      <Navbar />
      {
      isLogin ? (
      isCartEmpty ? (
        <p className={styles.heading}>This is the cart</p>
        ) : (
          <div>
          <h1>Shopping Cart</h1>
          {cartItems.map((item) => (
            <CartItem
              key={item.productId}
              cartItem={item}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
            />
          ))}
        </div>
        )
      ) :(
        <div>
          <p className={styles.heading}>This is the cart</p>
           </div>
      )}
    </div>
  )
}

export default SharedCart
