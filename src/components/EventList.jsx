import React from "react";
import EventCard from "./EventCard";

function EventList({ bookTicket, addToMyEvents, events, selectedTicket }) {
  return (
    <div className="my-10">
      <h3 className="text-black font-medium md:text-xl mb-4">
        Upcoming Events
      </h3>
      <div className="flex flex-col gap-4 flex-wrap md:flex-row">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            bookTicket={bookTicket}
            addToMyEvents={addToMyEvents}
            selectedTicket={selectedTicket}
          />
        ))}
      </div>
    </div>
  );
}

export default EventList;
