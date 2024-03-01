import React from "react";
import Hero from "../components/Hero";
import EventList from "../components/EventList";

function Home({
  bookTicket,
  events,
  selectedTicket,
  role,
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
        // removeEvent={removeEvent}
        // removeFromMyEvents={removeFromMyEvents}
      />
    </div>
  );
}

export default Home;
