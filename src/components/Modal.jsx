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
      <div className="p-8 rounded-lg text-center bg-gray-900 text-white space-y-4">
        <p className="text-gray-200 mb-2">Event: {selectedTicket.name}</p>
        <p className="flex gap-4 justify-center">
          <span>When: {selectedTicket.date}</span>
          <span>Venue: {selectedTicket.location}</span>
        </p>
        <div className="flex gap-4 justify-around">
          {["VIP", "Regular"].map((type) => (
            <button
              key={type}
              onClick={() => handleTicketTypeSelection(type)}
              className="px-4 py-2 btn btn-primary text-white rounded-md mr-2"
            >
              {type}:{" $"}
              {type == "VIP"
                ? selectedTicket.tickets[0].price
                : selectedTicket.tickets[1].price}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-2 ">
          <button className="btn btn-primary btn-outline px-2">
            View my events
          </button>
          <button
            onClick={closeModal}
            className="btn btn-primary btn-outline px-2"
          >
            Back to events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
