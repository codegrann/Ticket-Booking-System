import React from "react";
import Hero from "../components/Hero";
import EventList from "../components/EventList";

function Home({ bookTicket, events }) {
  return (
    <div>
      <Hero />
      <EventList bookTicket={bookTicket} events={events} />
    </div>
  );
}

export default Home;
