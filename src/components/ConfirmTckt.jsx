import React from "react";

const ConfirmationModal = ({ closeModal }) => {
  // console.log(cartItems);
  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal bg-white p-8 rounded-sm text-center">
        <p className="my-0 mx-8">
          Ticket booked. Thank you for eventing with us!
        </p>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
