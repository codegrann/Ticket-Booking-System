import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

function EventCard({ event }) {
  const { id, name, date, location, tickets } = event;

  return (
    <div className="">
      <h2>{name}</h2>
      <p className="flex gap-4">
        <span>Date: {date}</span> <span>Location: {location}</span>
      </p>
      <p>Tickets Available:</p>
      <ul className="flex gap-4">
        {tickets.map((ticket) => (
          <li key={ticket.type}>
            {ticket.type}:{" "}
            <span className="text-yellow-400">${ticket.price}</span>
          </li>
        ))}
      </ul>
      <Link to={`/events/${id}/book`} className="btn btn-outline">
        Book Now
      </Link>
    </div>
  );
}

export default EventCard;
