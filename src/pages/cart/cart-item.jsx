import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₪{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
      <img src={productImage} />
    </div>
  );
};

export default CartItem;