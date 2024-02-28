import React from "react";
import MyEventCard from "./MyEventCard";

function MyEventsList({ bookedEvents }) {
  return (
    <div>
      {bookedEvents.map((event) => (
        <MyEventCard event={event} />
      ))}
    </div>
  );
}

export default MyEventsList;
