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
  const [user, setUser] = useState({ name: "user 1" });
  const [bookedEvents, setBookedEvent] = useState([
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
  ]);
  const addToMyEvents = (event) => {
    setBookedEvent([...bookedEvents, event]);
  };

  const events = [
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
      location: "Nairoi",
      tickets: [
        { type: "VIP", price: 12 },
        { type: "Regular", price: 5 },
      ],
    },
  ];
  const bookTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  return (
    <>
      <Router>
        <Navbar />
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
                    />
                  )}
                </>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/profile"
              element={<Client user={user} bookedEvents={bookedEvents} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
