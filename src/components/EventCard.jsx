import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

function EventCard({ event, bookTicket, selectedTicket, role }) {
  const { id, name, date, location, tickets } = event;

  return (
    <div className="border-2 rounded-lg shadow-lg p-4 flex flex-col gap-4 min-w-[290px] max-w-[435px]">
      <h2 className="text-lg">{name}</h2>
      <p className="flex gap-4">
        <span>Date: {date}</span> <span>Location: {location}</span>
      </p>
      <p>Tickets Available:</p>
      <ul className="flex gap-4">
        {tickets.map((ticket) => (
          <li key={ticket.type}>
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
      {role == "ADMIN" && (
        <Link className="btn btn-error btn-outline">Remove event</Link>
      )}
      {role == "CLIENT" && (
        <Link
          // to={`/events/${id}/book`}
          className="btn btn-outline"
          onClick={() => bookTicket(event)}
        >
          Book Now
        </Link>
      )}
      {role == "" && (
        <Link
          // to={`/events/${id}/book`}
          className="btn btn-outline disabled:text-gray-900"
          onClick={() => bookTicket(event)}
          disabled={role == ""}
        >
          Book Now
        </Link>
      )}
      {role == "" && <p className="text-red-500">Login to book</p>}
    </div>
  );
}

export default EventCard;
