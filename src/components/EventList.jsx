import React from "react";
import EventCard from "./EventCard";

function EventList({ bookTicket, events, selectedTicket }) {
  return (
    <div>
      <h3 className="text-black font-medium md:text-xl mt-6">
        Upcoming Events
      </h3>
      <div className="flex flex-col gap-4 flex-wrap md:flex-row">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            bookTicket={bookTicket}
            selectedTicket={selectedTicket}
          />
        ))}
      </div>
    </div>
  );
}

export default EventList;
