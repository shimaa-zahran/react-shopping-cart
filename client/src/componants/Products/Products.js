import React, { useState } from "react";
import ProductModal from "./ProductModal";
import "./Products.css";

export default function Products(props) {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => [setProduct(false)];
  return (
    <div className="productElem">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a
            href="#"
            onClick={() => {
              openModal(product);
            }}
          >
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <p>{product.desc}</p>
            <span>{product.price}</span>
          </div>
          <button>Add To Cart</button>
        </div>
      ))}
      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
}
