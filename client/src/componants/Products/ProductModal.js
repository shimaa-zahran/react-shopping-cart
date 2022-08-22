import React from "react";
import Modal from "react-modal";
export default function ProductModal(props) {
  const { product, closeModal } = props;
  return (
    <div>
      <Modal isOpen={product}>
        <span className="close-icon" onClick={closeModal}>
          &times;
        </span>
        <div className="product-info">
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.desc}</p>
        </div>
      </Modal>
    </div>
  );
}
