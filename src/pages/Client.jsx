import React from "react";

function Client({ user, bookedEvents }) {
  console.log(user.name);

  return (
    <>
      <div>{user.name}</div>
      <ul>
        {bookedEvents.map((event) => {
          return <li key={event}>{event}</li>;
        })}
      </ul>
    </>
  );
}

export default Client;
