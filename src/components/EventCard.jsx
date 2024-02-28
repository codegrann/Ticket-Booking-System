import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

function EventCard({ event }) {
  const { id, name, date, location, tickets } = event;

  return (
    <div className="event-card">
      <h2>{name}</h2>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Tickets Available:</p>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.type}>
            {ticket.type}: ${ticket.price}
          </li>
        ))}
      </ul>
      <Link to={`/events/${id}/book`} className="book-button">
        Book Now
      </Link>
    </div>
  );
}

export default EventCard;
