import React from "react";
import "./shop.css";
import { PRODUCTS } from "../../products";
import Product from "./product";
import { Header } from "../../components/header";

const Shop = () => {
  return (
    <div className="shop">
      <Header />
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
