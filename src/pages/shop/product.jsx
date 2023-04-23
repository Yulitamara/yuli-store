import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

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
      </div>
    </div>
  );
};

export default Product;
