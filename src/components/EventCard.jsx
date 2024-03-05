import React, { useState } from "react";

function EventCard({
  event,
  bookTicket,
  selectedTicket,
  events,
  setEvents,
  role,
}) {
  const {
    id,
    name: originalName,
    date: originalDate,
    location: originalLocation,
    tickets: originalTickets,
  } = event;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(originalName);
  const [date, setDate] = useState(originalDate);
  const [location, setLocation] = useState(originalLocation);
  const [tickets, setTickets] = useState(originalTickets);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    const updatedEvent = { ...event, name, date, location, tickets };
    // Update the event in the events array
    const updatedEvents = events.map((e) =>
      e.id === event.id ? updatedEvent : e
    );
    setEvents(updatedEvents);
    // Exit edit mode
    setIsEditing(false);
  };

  const handleTicketChange = (index, key, value) => {
    const updatedTickets = [...tickets];
    updatedTickets[index][key] = value;
    setTickets(updatedTickets);
  };
  const position = isEditing
    ? " md:bg-white md:z-10 md:fixed md:top-1/4 md:left-1/4"
    : "md:relative";
  return (
    <div
      className={`border-2  rounded-lg shadow-lg p-4 flex flex-col gap-4 min-w-[290px] max-w-[435px] ${position}`}
    >
      {role === "ADMIN" && (
        <span
          className="text-xs text-red-600 absolute cursor-pointer right-2 top-0"
          onClick={toggleEdit}
        >
          {isEditing ? "Cancel" : "Edit"}
        </span>
      )}
      <h2 className="text-lg">
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="caret-red-700 py-4 bg-transparent input input-success input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl"
          />
        ) : (
          name
        )}
      </h2>
      <p className="flex gap-4">
        <span>
          Date:{" "}
          {isEditing ? (
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="caret-red-700 py-4 bg-transparent input input-success input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl"
            />
          ) : (
            date
          )}
        </span>{" "}
        <span>
          Location:{" "}
          {isEditing ? (
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="caret-red-700 py-4 bg-transparent input input-success input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl"
            />
          ) : (
            location
          )}
        </span>
      </p>
      <p>Tickets Available:</p>
      <ul className="flex gap-4">
        {tickets.map((ticket, index) => (
          <li key={ticket.type}>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={ticket.type}
                  className="caret-red-700 py-4 bg-transparent input  input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl"
                  readOnly
                />

                <input
                  type="number"
                  value={ticket.price}
                  className="caret-red-700 py-4 bg-transparent input input-success input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl"
                  onChange={(e) =>
                    handleTicketChange(index, "price", e.target.value)
                  }
                />
              </>
            ) : (
              <>
                {ticket.type}:{" "}
                <span
                  className={
                    ticket.type === "VIP" ? "text-yellow-700" : "text-green-500"
                  }
                >
                  ${ticket.price}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
      {role === "ADMIN" && isEditing && (
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      )}
      {/* {role === "ADMIN" && !isEditing && (
        <button className="btn btn-error btn-outline" onClick={toggleEdit}>
          Edit
        </button>
      )} */}
      {role == "ADMIN" && (
        <button
          className="btn btn-error btn-outline"
          onClick={() => setEvents(events.filter((e) => e.id !== event.id))}
        >
          Remove event
        </button>
      )}
      {role === "CLIENT" && (
        <button className="btn btn-outline" onClick={() => bookTicket(event)}>
          Book Now
        </button>
      )}
      {role === "" && (
        <button
          className="btn btn-outline disabled:text-gray-900"
          onClick={() => bookTicket(event)}
          disabled={role === ""}
        >
          Book Now
        </button>
      )}
      {role === "" && <p className="text-red-500">Login to book</p>}
    </div>
  );
}

export default EventCard;
