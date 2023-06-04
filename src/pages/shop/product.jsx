import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Minus, Plus } from "phosphor-react";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } =
    useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₪{price}</p>
        <button className="btn-first" onClick={() => addToCart(id)}>
          הוספה לעגלה {cartItemAmount > 0 && <> - {cartItemAmount}</>}
        </button>
        {/* <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>
            <Minus size={22} weight="bold"/>
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>
            <Plus size={22} weight="bold" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
