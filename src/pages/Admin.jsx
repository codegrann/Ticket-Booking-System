import React, { useState } from "react";
import EventList from "../components/EventList";

function Admin({ events }) {
  const [addClicked, setAddClicked] = useState(false);
  const addEventToList = () => {
    setAddClicked(true);
  };
  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold">Welcome Administrator</h3>
      <p className="text-xs font-semibold">Manage your events with ease</p>
      <button className="btn btn-primary btn-outline" onClick={addEventToList}>
        Add event
      </button>
      {addClicked && (
        <form>
          <input type="text" />
        </form>
      )}
      <EventList events={events} />
    </div>
  );
}

export default Admin;
