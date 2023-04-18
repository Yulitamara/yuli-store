import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Minus, Plus } from "phosphor-react";

const CartItem = (props) => {
  const { id, productName, price, productImage, productSize } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="right">
        <p>₪{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>
            <Minus size={22} />
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>
            <Plus size={22} />
          </button>
        </div>
      </div>
      <div className="left">
        <div>
          <p>{productName}</p>
          <p className="product-size">{productSize} ס"מ</p>
        </div>
        <img src={productImage} />
      </div>
    </div>
  );
};

export default CartItem;
