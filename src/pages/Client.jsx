import React from "react";
import MyEventsList from "../components/MyEventsList";

function Client({ user, bookedEvents, removeFromMyEvents, bookedEventsCount }) {
  console.log(user.name);

  return (
    <>
      <div>
        {user.name} {bookedEventsCount}
      </div>
      <MyEventsList
        bookedEvents={bookedEvents}
        removeFromMyEvents={removeFromMyEvents}
      />
    </>
  );
}

export default Client;
