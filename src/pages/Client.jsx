import React from "react";
import MyEventsList from "../components/MyEventsList";

function Client({ user, bookedEvents }) {
  console.log(user.name);

  return (
    <>
      <div>{user.name}</div>
      <MyEventsList bookedEvents={bookedEvents} />
    </>
  );
}

export default Client;
