import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import navImg from "../assets/nav-img.png";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/cart">
          <ShoppingCart size={32} className="shoppingcart" />
        </Link>
        <Link className="link" to="/">
          <img src={navImg} alt="" />
        </Link>
      </div>
    </div>
  );
};
