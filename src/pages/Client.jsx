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
    <div className="h-screen border-2 border-red-500">
      <div>
        {role} {bookedEventsCount}
      </div>
      <MyEventsList
        bookedEvents={bookedEvents}
        removeFromMyEvents={removeFromMyEvents}
      />
    </div>
  );
}

export default Client;
