import React from "react";
import Hero from "../components/Hero";
import EventList from "../components/EventList";

function Home({ bookTicket }) {
  return (
    <div>
      <Hero />
      <EventList bookTicket={bookTicket} />
    </div>
  );
}

export default Home;
