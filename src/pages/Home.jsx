import React from "react";
import Hero from "../components/Hero";
import EventList from "../components/EventList";

function Home({
  bookTicket,
  events,
  selectedTicket,
  role,
  bookedEventsCount,
  // removeEvent,
  // removeFromMyEvents,
}) {
  return (
    <div>
      <Hero />
      <EventList
        bookTicket={bookTicket}
        events={events}
        selectedTicket={selectedTicket}
        role={role}
        bookedEventsCount={bookedEventsCount}
        // removeEvent={removeEvent}
        // removeFromMyEvents={removeFromMyEvents}
      />
    </div>
  );
}

export default Home;
