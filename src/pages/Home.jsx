import React from "react";
import Hero from "../components/Hero";
import EventList from "../components/EventList";

function Home({ bookTicket, events, selectedTicket }) {
  return (
    <div>
      <Hero />
      <EventList
        bookTicket={bookTicket}
        events={events}
        selectedTicket={selectedTicket}
      />
    </div>
  );
}

export default Home;
