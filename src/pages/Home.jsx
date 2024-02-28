import React from "react";
import Hero from "../components/Hero";
import EventList from "../components/EventList";

function Home({ bookTicket, addToMyEvents, events, selectedTicket }) {
  return (
    <div>
      <Hero />
      <EventList
        bookTicket={bookTicket}
        events={events}
        selectedTicket={selectedTicket}
        addToMyEvents={addToMyEvents}
      />
    </div>
  );
}

export default Home;
