import React from "react";
import EventCard from "./EventCard";

function EventList({ bookTicket }) {
  const events = [
    {
      id: "rbn27",
      name: "React Bootathon Nairobi",
      date: "27/09/2024",
      location: "Nairobi",
      tickets: [
        { type: "VIP", price: 12 },
        { type: "Regular", price: 6 },
      ],
    },
    {
      id: "wdw30",
      name: "Web Development Workshop",
      date: "30/09/2024",
      location: "Mombasa",
      tickets: [
        { type: "VIP", price: 10 },
        { type: "Regular", price: 5 },
      ],
    },
    {
      id: "w3ec20",
      name: "Web3 Enthusiasts Chitchat",
      date: "20/10/2024",
      location: "Online",
      tickets: [
        { type: "VIP", price: 9 },
        { type: "Regular", price: 4 },
      ],
    },
    {
      id: "mdgs02",
      name: "MongoDB - Getting Started",
      date: "02/11/2024",
      location: "Nairoi",
      tickets: [
        { type: "VIP", price: 12 },
        { type: "Regular", price: 5 },
      ],
    },
  ];

  return (
    <div>
      <h3 className="text-black font-medium md:text-xl mt-6">
        Upcoming Events
      </h3>
      <div className="flex flex-col gap-4 flex-wrap md:flex-row">
        {events.map((event) => (
          <EventCard key={event.id} event={event} bookTicket={bookTicket} />
        ))}
      </div>
    </div>
  );
}

export default EventList;
