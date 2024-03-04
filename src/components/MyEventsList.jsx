import React from "react";
import MyEventCard from "./MyEventCard";

function MyEventsList({ bookedEvents, setBookedEvents, setBookedEventsCount }) {
  return (
    <div>
      <h3 className="text-black font-medium md:text-xl mb-4">
        Manage booked Events
      </h3>
      <div className="flex flex-col gap-4 flex-wrap md:flex-row">
        {bookedEvents.map((event) => (
          <MyEventCard
            key={event.id}
            event={event}
            bookedEvents={bookedEvents}
            setBookedEvents={setBookedEvents}
            setBookedEventsCount={setBookedEventsCount}
          />
        ))}
      </div>
    </div>
  );
}

export default MyEventsList;
