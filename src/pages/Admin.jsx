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
      {/* {addClicked && ( */}
      <>
        <button
          onClick={() => setAddClicked(false)}
          className="btn btn-error ml-4"
        >
          Cancel
        </button>
        <form>
          <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
            <input
              className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
              // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
              type="email"
              placeholder="Email"
              required
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input type="text" placeholder="enter event name" />
          <input type="text" placeholder="enter event date" />
          <input type="text" placeholder="enter event location" />
        </form>
      </>
      {/* )} */}
      <EventList events={events} />
    </div>
  );
}

export default Admin;
