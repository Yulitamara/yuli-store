import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
// import buy from "../assets/gif.gif";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/cart">
          <ShoppingCart size={32} className="shoppingcart" />
        </Link>
        {/* <Link to="/">
          <img src={buy} alt="" />
        </Link> */}
      </div>
    </div>
  );
};
