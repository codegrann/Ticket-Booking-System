import React from "react";
import MyEventsList from "../components/MyEventsList";

function Client({
  user,
  bookedEvents,
  removeFromMyEvents,
  bookedEventsCount,
  role,
}) {
  // console.log();

  return (
    <div className="min-h-screen pb-8">
      <div>{bookedEventsCount} events booked </div>
      <MyEventsList
        bookedEvents={bookedEvents}
        removeFromMyEvents={removeFromMyEvents}
      />
    </div>
  );
}

export default Client;
