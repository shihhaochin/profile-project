import React from "react";
import { Routes, Route } from "react-router-dom";
import NaviComponent from "./components/navi-component";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import Skillpage from "./pages/skillpage";
import Portfoliopage from "./pages/portfoliopage";
import Contactmepage from "./pages/contactmepage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <NaviComponent />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutpage />} />
        <Route path="/skill" element={<Skillpage />} />
        <Route path="/portfolio" element={<Portfoliopage />} />
        <Route path="/contact" element={<Contactmepage />} />
      </Routes>
    </div>
  );
}

export default App;
