import React from "react";
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
      <Homepage />
      <Aboutpage />
      <Skillpage />
      <Portfoliopage />
      <Contactmepage />
    </div>
  );
}

export default App;
