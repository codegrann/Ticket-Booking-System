import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Client from "./pages/Client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="px-4 text-sm">
          <Routes>
            <Route exact path="/" element={<Home />} />
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
