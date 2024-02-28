import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  //   const navigate = useNavigate();

  //   const goToCart = () => {
  //     closeModal();
  //     navigate("/cart");
  //   };

  return (
    <div className="fixed z-10 top-[200px] inset-0 overflow-y-auto">
      <div className="p-8 rounded-sm text-center ">
        <p className="my-0 mx-8">Item successfully added to cart!</p>
        <button>Go to Cart</button>
        <button onClick={closeModal}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Modal;
