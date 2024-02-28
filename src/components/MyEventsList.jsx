import React from "react";
import MyEventCard from "./MyEventCard";

function MyEventsList({ bookedEvents }) {
  return (
    <div>
      {bookedEvents.map((event) => (
        <MyEventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default MyEventsList;
