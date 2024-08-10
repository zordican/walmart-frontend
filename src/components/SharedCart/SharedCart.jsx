import Navbar from "../navbar/Navbar";
import styles from "./SharedCart.module.scss"
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
function SharedCart() {
  const isCartEmpty = false;
  const isLogin = true;

  const cartItems = [
    {
      productId: "123",
      photo: "https://rukminim2.flixcart.com/image/850/1000/xif0q/cookie-biscuit/z/j/y/-original-imagwcjwgscghbdz.jpeg?q=90&crop=false",
      name: "Oreo Chocolaty Biscuit",
      price: 39,
      quantity: 2,
      stock: 10,
      byId: "Hraday"
    },
    {
      productId: "124",
      photo: "https://i5.walmartimages.com/seo/Coleman-Sundome-6-Person-Dome-Tent-72-Center-Height-Overall-Dimensions-120-H-x-120-W_4c0a127f-6070-42e2-87af-b47d967d3c58_1.9a3bb2c23561543e0726c19a6522bae4.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      name: "Coleman Sundome 6-Person Dome Tent",
      price: 5999,
      quantity: 1,
      stock: 5,
      byId: "Niraj"
    },
    {
      productId: "125",
      photo: "https://i5.walmartimages.com/seo/Tylenol-Extra-Strength-Acetaminophen-Rapid-Release-Gels-24-Ct_bc34682b-a636-4efe-8eb3-6025144c4cfa.9b4a15752da489e69e8ffc17b156f8c1.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Tylenol Extra Strength Acetaminophen Gels",
      price: 349.00,
      quantity: 2,
      stock: 5,
      byId: "Aryan"
    },
    {
      productId: "126",
      photo: "https://i5.walmartimages.com/seo/Great-Value-Purified-Drinking-Water-16-9-fl-oz-Bottles-40-Count_061099c8-2637-49ad-9706-506d42bbe542.33c33902d22157d2c215a61e15fd4a4b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Great Value Purified Drinking Water (40 bottles)",
      price: 699.00,
      quantity: 1,
      stock: 5,
      byId: "Rishabh"
    },
    {
      productId: "127",
      photo: "/",
      name: "Sample Product 5",
      price: 299.99,
      quantity: 1,
      stock: 5,
      byId: "Hraday"
    },
    {
      productId: "128",
      photo: "/",
      name: "Sample Product 6",
      price: 299.99,
      quantity: 1,
      stock: 5,
      byId: "Hraday"
    },
    {
      productId: "129",
      photo: "/",
      name: "Sample Product 7",
      price: 299.99,
      quantity: 1,
      stock: 5,
      byId: "Hraday"
    },
    {
      productId: "130",
      photo: "/",
      name: "Sample Product 8",
      price: 299.99,
      quantity: 1,
      stock: 5,
      byId: "Hraday"
    },
    {
      productId: "131",
      photo: "/",
      name: "Sample Product 9",
      price: 299.99,
      quantity: 1,
      stock: 5,
      byId: "Hraday"
    },
    {
      productId: "132",
      photo: "/",
      name: "Sample Product 10",
      price: 149.99,
      quantity: 3,
      stock: 8,
      byId: "Hraday"
    }
  ];

  const subtotal = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0).toFixed(2);
  // const subtotal = 4000;
  const tax = Math.round(subtotal*0.18);
  const shippingCharges = (subtotal > 1000 ? 0 : 40);
  const discount = 400;
  const calctotal = subtotal + tax + shippingCharges - discount;
  const total = calctotal.toFixed(2);
  
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
            <br /><br />
          <h1>Shared Shopping Cart</h1>
          <section className={styles.cart}>
          <main>
          {cartItems.map((item) => (
            <CartItem
              key={item.productId}
              cartItem={item}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
            />
          ))}
          </main>
          <aside className={styles.calcSection}>
          <button>
            { cartItems.length > 0 && 
              <Link to="/"> Continue to checkout</Link>
            }
            </button>
          <p>GST: ₹{tax}</p>
          <p>Subtotal (Incl. GST): ₹{subtotal}</p>
          <p>Shipping Charges (Incl. GST): ₹{shippingCharges}</p>
          <p> Discount:  
            <em className="green">&nbsp; - ₹{discount}</em>
          </p>
          <p>
            <b> Total: ₹{total}</b>
          </p>
            
        </aside>
        </section>
            
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
