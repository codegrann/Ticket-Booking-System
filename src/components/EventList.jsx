import React from "react";
import EventCard from "./EventCard";

function EventList() {
  const events = [
    {
      id: "event 1",
      name: "React Bootathon Nairobi",
      date: "27/09/2024",
      location: "Mumbai",
      tickets: [
        { type: "VIP", price: 1200 },
        { type: "Regular", price: 500 },
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-black font-medium md:text-xl mt-6">
        Upcoming Events
      </h3>
      <div>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
