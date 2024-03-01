import React, { useState } from "react";
import EventList from "../components/EventList";

function Admin({ events, addEvent }) {
  const [addClicked, setAddClicked] = useState(false);
  const [id, setId] = useState("");
  const [eventName, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const [VIP, setVIP] = useState("");
  const [Regular, setRegular] = useState("");
  const [newEvent, setNewEvent] = useState({});
  const tickets = [
    { type: "VIP", price: VIP },
    { type: "Regular", price: Regular },
  ];

  const addEventToList = (e) => {
    e.preventDefault();
    addClicked &&
      setNewEvent({
        id: id,
        name: eventName,
        date: date,
        location: location,
        tickets: [...tickets],
        // VIP: VIP,
        // Regular: Regular,
      });

    console.log(newEvent);
    alert("Added event successfully");
    // addEvent(newEvent);
  };

  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold">Welcome Administrator</h3>
      <p className="text-xs font-semibold mb-4">Manage your events with ease</p>
      <button
        className="btn btn-primary btn-outline"
        onClick={() => setAddClicked(true)}
      >
        Add event
      </button>
      {addClicked && (
        <>
          <button
            onClick={() => setAddClicked(false)}
            className="btn btn-error ml-4 py-2 px-2"
          >
            Cancel
          </button>
          <form className="flex flex-col min-[500px]:w-7/8  m-auto my-[10px] bg-white">
            <div className="mt-[35px] border-none  min-[500px]:w-3/4 md:w-[600px] min-[500px]:mx-auto flex flex-col gap-4  border-2  px-[10px]">
              <div className="flex items-center mx-auto lg:ml-0 w-full bg-[#9dc69d] rounded-md ">
                <input
                  className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
                  // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
                  type="text"
                  placeholder="enter event id"
                  required
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
                <input
                  className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
                  // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
                  type="text"
                  placeholder="enter event name"
                  required
                  value={eventName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
                <input
                  className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
                  // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
                  type="text"
                  placeholder="enter event date dd/mm/yyyy"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
                <input
                  className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
                  // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
                  type="text"
                  placeholder="enter event location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
                <input
                  className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
                  // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
                  type="number"
                  placeholder="enter VIP price"
                  required
                  value={VIP}
                  onChange={(e) => setVIP(e.target.value)}
                />
              </div>
              <div className="flex items-center m-auto w-full bg-[#9dc69d] rounded-md ">
                <input
                  className="caret-red-700 py-4 bg-transparent input input-sm md:py-6  w-full max-w-xs md:input-md md:max-w-xl focus:outline-none"
                  // className="w-[400px] h-[50px] bg-transparent border-none outline-none text-[#797979] text-md"
                  type="number"
                  placeholder="enter Regular price"
                  required
                  value={Regular}
                  onChange={(e) => setRegular(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary btn-outline"
                onClick={addEventToList}
              >
                Save
              </button>
            </div>
          </form>
        </>
      )}
      <EventList events={events} />
    </div>
  );
}

export default Admin;
