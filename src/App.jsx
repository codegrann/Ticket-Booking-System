import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Client from "./pages/Client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-4 text-sm">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Client />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
