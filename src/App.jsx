import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Client from "./pages/Client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState({});
  const [events, setEvents] = useState([
    {
      id: "rbn27",
      name: "React Bootathon Nairobi",
      date: "27/09/2024",
      location: "Nairobi",
      tickets: [
        { type: "VIP", price: 12 },
        { type: "Regular", price: 6 },
      ],
    },
    {
      id: "wdw30",
      name: "Web Development Workshop",
      date: "30/09/2024",
      location: "Mombasa",
      tickets: [
        { type: "VIP", price: 10 },
        { type: "Regular", price: 5 },
      ],
    },
    {
      id: "w3ec20",
      name: "Web3 Enthusiasts Chitchat",
      date: "20/10/2024",
      location: "Online",
      tickets: [
        { type: "VIP", price: 9 },
        { type: "Regular", price: 4 },
      ],
    },
    {
      id: "mdgs02",
      name: "MongoDB - Getting Started",
      date: "02/11/2024",
      location: "Nairobi",
      tickets: [
        { type: "VIP", price: 12 },
        { type: "Regular", price: 5 },
      ],
    },
    {
      id: "gswm04",
      name: "Getting Started with MySQL",
      date: "04/11/2024",
      location: "Nairobi",
      tickets: [
        { type: "VIP", price: 8 },
        { type: "Regular", price: 5 },
      ],
    },
    {
      id: "tfoai10",
      name: "The future of AI",
      date: "10/11/2024",
      location: "Nairobi",
      tickets: [
        { type: "VIP", price: "free" },
        { type: "Regular", price: "free" },
      ],
    },
  ]);
  const [bookedEvents, setBookedEvents] = useState([]);

  // HANDLE SIGN IN
  const [user, setUser] = useState({
    email: "",
    role: "",
  });
  const [role, setRole] = useState("");

  const handleSignIn = (role) => {
    // setRole(role);
    // console.log(role);
  };

  const [bookedEventsCount, setBookedEventsCount] = useState(
    bookedEvents.length
  );
  // MANAGING ADMIN EVENTS
  // adding an event
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  // MANAGING USER EVENTS
  const addToMyEvents = (event) => {
    setBookedEventsCount(bookedEventsCount + 1);
    if (bookedEventsCount > 5) {
      alert("You can only book 5 events at a time");
      return;
    }

    setBookedEvents([...bookedEvents, event]);
  };
  const removeFromMyEvents = (event) => {
    console.log("removed");
    // console.log(bookedEvents.filter((e) => e.id !== event.id));
    setBookedEventsCount(bookedEventsCount - 1);
    setBookedEvents(bookedEvents.filter((e) => e.id !== event.id));
  };

  const bookTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  // END OF USER EVENTS

  return (
    <>
      <Router>
        <Navbar role={role} setRole={setRole} />
        <div className="px-4 md:px-10 text-sm">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home
                    bookTicket={bookTicket}
                    events={events}
                    selectedTicket={selectedTicket}
                  />
                  {showModal && (
                    <Modal
                      closeModal={closeModal}
                      addToMyEvents={addToMyEvents}
                      selectedTicket={selectedTicket}
                      bookedEvents={bookedEvents}
                      bookedEventsCount={bookedEventsCount}
                    />
                  )}
                </>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/signin"
              element={<SignIn handleSignIn={handleSignIn} setRole={setRole} />}
            />
            <Route
              path="/admin"
              element={<Admin events={events} addEvent={addEvent} />}
            />
            <Route
              path="/client"
              element={
                <Client
                  user={user}
                  bookedEvents={bookedEvents}
                  removeFromMyEvents={removeFromMyEvents}
                  bookedEventsCount={bookedEventsCount}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
