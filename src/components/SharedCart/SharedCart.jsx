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
      byId: "Hraday"
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
      photo: "https://i5.walmartimages.com/seo/Mainstays-Comfort-Complete-Bed-Pillow-Standard-Queen_04754ad9-e885-4aa4-b2b1-bff2366cf575.0b8fd924fcff296303a5c76ff6d1a55b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      name: "Mainstays Comfort Complete Bed Pillow (2 pieces)",
      price: 429.99,
      quantity: 2,
      stock: 5,
      byId: "Rishabh"
    },
    {
      productId: "128",
      photo: "https://i5.walmartimages.com/seo/Disney-100th-Anniversary-Men-s-Big-Men-s-Mickey-Mouse-Faces-Graphic-Tee-Shirts-Sizes-S-3XL_6ecbfcec-fdd1-412c-83c9-9ff5531d1945.bae63c48966ac93760daebbbdedcaa28.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Disney 100 100th Anniversary Men's & Big Men's Mickey Mouse Faces and Time Flies Graphic Tee Shirts 2-Pack, Sizes S-3XL",
      price: 799.99,
      quantity: 1,
      stock: 5,
      byId: "Niraj"
    },
    {
      productId: "129",
      photo: "https://i5.walmartimages.com/seo/Lepro-LED-Collapsible-Camping-Lantern-4-Packs-Super-Bright-Battery-Powered-Light-IPX4-Water-Resistant-Portable-Emergency-Lights-Power-Outage-Hurrican_9df9e775-ad5d-4c95-8e5d-7a3af32eeec0.7c37de070d7ed064bd2fbd5d7385befe.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Lepro LED Collapsible Camping Lantern 4-Packs, Super Bright, Battery Powered Camping Light, IPX4 Water Resistant",
      price: 299.99,
      quantity: 1,
      stock: 5,
      byId: "Niraj"
    },
    {
      productId: "130",
      photo: "https://i5.walmartimages.com/seo/Bose-SoundLink-Flex-Wireless-Waterproof-Portable-Bluetooth-Speaker-Black_e3682e2c-1160-4a6b-b96a-50a7e8b8c045.23c03d5d3fdf6ae1aa19975a180fbf32.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Bose SoundLink Flex Wireless Waterproof Portable Bluetooth Speaker, Black",
      price: 299.99,
      quantity: 1,
      stock: 5,
      byId: "Hraday"
    },
    {
      productId: "131",
      photo: "https://i5.walmartimages.com/seo/Pocket-Juice-Slim-Pro-20-000mAh-Portable-Power-Bank-and-Charger-with-Dual-USB-Ports-Black_387948b6-ba8a-4a43-9b08-3d49f781ba76.3933f6708f940ff3e3e81a5d45f30fdc.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Pocket Juice Slim Pro 20,000mAh, Portable Power Bank and Charger with Dual USB Ports, Black",
      price: 1299.99,
      quantity: 1,
      stock: 5,
      byId: "Hraday"
    },
    {
      productId: "132",
      photo: "https://i5.walmartimages.com/seo/Freshness-Guaranteed-Chocolate-Chip-Bakery-Cookies-14-oz-10-Count_b8ff1c98-71aa-4cb8-8cd4-018ab0b2ac50.52b12ed2c82a7d96fe7dd87f10088782.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      name: "Freshness Guaranteed Chocolate Chip Bakery Cookies, 14 oz, 10 Count",
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
