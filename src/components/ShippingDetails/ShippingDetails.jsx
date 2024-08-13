import styles from "./ShippingDetails.module.scss"
import { BiArrowBack } from "react-icons/bi";
import {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { saveShippingInfo } from "../redux/reducer/cartReducer";


const Shipping = () => {
  const navigate = useNavigate();
 //  const dispatch = useDispatch();

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",    
    pinCode: "",
  });


  const changeHandler = (e) => {
    setShippingInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div className={styles.shipping}>
      <Link to="/carted" className={styles.backBtn}>
        <BiArrowBack />
      </Link>
      <form>
        <h1>Enter Shipping Address</h1>
        {/* Make sure name matches with state variables! */}
        <input
          required
          type="text"
          placeholder="Building, Street info"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />

        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />

        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="bangladesh">Bangladesh</option>
        </select>

        <input
          required
          type="number"
          placeholder="Pincode"
          name="pinCode"
          minLength={6}
          maxLength={6}
          value={shippingInfo.pinCode}
          onChange={changeHandler}
        />
        <button>Pay Now!</button>
        <h2>Simple. Quick. Secure</h2>
      </form>
    </div>
  );
};

export default Shipping;
