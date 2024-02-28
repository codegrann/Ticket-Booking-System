import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MyEventCard({ event }) {
  console.log(event);
  //   const { id, name, date, location, tickets } = event;

  return (
    <div className="border-2 rounded-lg shadow-lg p-4 flex flex-col gap-4 min-w-[290px] max-w-[435px]">
      <h2 className="text-lg">{name}</h2>
      <p className="flex gap-4">
        <span>Date: {event.date}</span> <span>Location: {event.location}</span>
      </p>
      <p>Tickets Available:</p>
      <ul className="flex gap-4">
        {event.tickets.map((ticket) => (
          <li>
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
      <Link
        // to={`/events/${id}/book`}
        className="btn btn-outline"
        onClick={() => bookTicket(event)}
      >
        Book Now
      </Link>
    </div>
  );
}

export default MyEventCard;
