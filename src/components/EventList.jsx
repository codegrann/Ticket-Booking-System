import React from "react";
import EventCard from "./EventCard";

function EventList() {
  const events = [
    {
      id: "event 1",
      Date: "27/09/2021",
      location: "Mumbai",
      tickets: [
        { type: "VIP", price: 1200 },
        { type: "Regular", price: 500 },
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-black font-medium md:text-xl">Upcoming Events</h3>
      <div>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
