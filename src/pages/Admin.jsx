import React from "react";
import EventList from "../components/EventList";

function Admin({ events }) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold">Welcome Administrator</h3>
      <p className="text-xs font-semibold">Manage your events with ease</p>
      <button className="btn btn-primary btn-outline">Add event</button>
      <EventList events={events} />
    </div>
  );
}

export default Admin;
