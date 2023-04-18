import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/cart">
          <ShoppingCart size={32} className="shoppingcart" />
        </Link>
        <Link to="/"> חנות </Link>
      </div>
    </div>
  );
};
