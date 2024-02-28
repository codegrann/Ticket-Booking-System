import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal, selectedTicket }) => {
  const handleTicketTypeSelection = (type) => {
    console.log(`Selected ticket type: ${type}`);
    // Add your logic for handling the selected ticket type here
  };
  //   const navigate = useNavigate();

  //   const goToCart = () => {
  //     closeModal();
  //     navigate("/cart");
  //   };

  return (
    <div className="fixed z-10 top-[200px] max-w-[500px] mx-auto inset-0 overflow-y-auto rounded-lg">
      <div className="p-8 rounded-lg text-center bg-gray-900 text-white">
        <p className="text-gray-600 mb-2">Ticket Name: {selectedTicket.name}</p>
        <div className="flex justify-between mb-4">
          {["VIP", "Regular"].map((type) => (
            <button
              key={type}
              onClick={() => handleTicketTypeSelection(type)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            >
              {type}:{selectedTicket.tickets.price}
            </button>
          ))}
        </div>
        <button onClick={closeModal}>Back to events</button>
      </div>
    </div>
  );
};

export default Modal;
