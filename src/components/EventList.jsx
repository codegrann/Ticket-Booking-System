import React from "react";
import EventCard from "./EventCard";

function EventList({
  bookTicket,
  events,
  setEvents,
  selectedTicket,
  role,
  bookedEventsCount,
}) {
  return (
    <div className="my-10 relative">
      <h3 className="text-black font-medium md:text-xl mb-4">
        Upcoming Events
      </h3>
      <div className="flex flex-col gap-4 flex-wrap md:flex-row">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            bookTicket={bookTicket}
            selectedTicket={selectedTicket}
            role={role}
            bookedEventsCount={bookedEventsCount}
            events={events}
            setEvents={setEvents}
          />
        ))}
      </div>
    </div>
  );
}

export default EventList;
