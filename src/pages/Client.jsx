import React from "react";

function Client({ user, bookedEvents }) {
  return (
    <div>
      {user.name}
      {bookedEvents.map((event) => {
        <ul>
          <li key={event}>{event}</li>
        </ul>;
      })}
    </div>
  );
}

export default Client;
