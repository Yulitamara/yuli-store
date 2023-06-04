import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import "./cart.css";

import { useNavigate } from "react-router-dom";
import PayPal from "../../components/paypal";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const [checkout, setCheckout] = useState(false);

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <div>
          <h1>סל הקניות שלך</h1>
        </div>
      ) : (
        <h1></h1>
      )}
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>סה"כ: {totalAmount}₪</p>
          <button className="btn-first" onClick={() => navigate("/")}>
            חזרה לחנות
          </button>
          {checkout ? (
            <PayPal/>
          ) : (
            <button
              className="btn-second"
              onClick={() => {
                setCheckout(true);
              }}
            >
              לתשלום
            </button>
          )}
        </div>
      ) : (
        <div className="empty">
          <h1>סל הקניות שלך ריק</h1>
          <button className="btn-first" onClick={() => navigate("/")}>
            חזרה לחנות
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
