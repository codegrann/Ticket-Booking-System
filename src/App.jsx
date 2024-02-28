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
  const bookTicket = () => {
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
                  <Home bookTicket={bookTicket} />
                  {showModal && <Modal closeModal={closeModal} />}
                </>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Client />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
