import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MyEventCard({
  event,
  removeFromMyEvents,
  setBookedEvents,
  bookedEvents,
}) {
  //   console.log(event);
  const { id, name, date, location, tickets } = event;
  // const removeEvent = () => () => {
  // removeFromMyEvents(event);
  // };

  return (
    <div className="border-2 rounded-lg shadow-lg p-4 flex flex-col gap-4 min-w-[290px] max-w-[435px]">
      <h2 className="text-lg">{name}</h2>
      <p className="flex gap-4">
        <span>Date: {date}</span> <span>Location: {location}</span>
      </p>
      <ul className="flex gap-4">
        {tickets.map((ticket) => (
          <li key={ticket.type}>
            <span></span>
            {ticket.type}:{" "}
            <span
              className={
                ticket.type == "VIP" ? "text-yellow-700" : "text-green-500"
              }
            >
              ${ticket.price}
            </span>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-error text-sm"
        onClick={() =>
          setBookedEvents(bookedEvents.filter((e) => e.id !== event.id))
        }
      >
        Not going
      </button>
    </div>
  );
}

export default MyEventCard;
