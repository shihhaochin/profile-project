import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NaviComponent from "./components/navi-component";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import Skillpage from "./pages/skillpage";
import Portfoliopage from "./pages/portfoliopage";
import Contactmepage from "./pages/contactmepage";
import "./styles/style.css";

function App() {
  const [isHomepage, setIsHomepage] = useState(false);
  const [isAboutpage, setIsAboutpage] = useState(false);
  const [isSkillpage, setIsSkillpage] = useState(false);
  const [isPortfoliopage, setIsPortfoliopage] = useState(false);
  const [isContactpage, setIsContactpage] = useState(false);

  return (
    <div className="App" style={{ position: "relative" }}>
      <NaviComponent
        isHomepage={isHomepage}
        isAboutpage={isAboutpage}
        isSkillpage={isSkillpage}
        isPortfoliopage={isPortfoliopage}
        isContactpage={isContactpage}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              setIsHomepage={setIsHomepage}
              setIsAboutpage={setIsAboutpage}
              setIsSkillpage={setIsSkillpage}
              setIsPortfoliopage={setIsPortfoliopage}
              setIsContactpage={setIsContactpage}
            />
          }
        />
        <Route
          path="/aboutme"
          element={
            <Aboutpage
              setIsHomepage={setIsHomepage}
              setIsAboutpage={setIsAboutpage}
              setIsSkillpage={setIsSkillpage}
              setIsPortfoliopage={setIsPortfoliopage}
              setIsContactpage={setIsContactpage}
            />
          }
        />
        <Route
          path="/skill"
          element={
            <Skillpage
              setIsHomepage={setIsHomepage}
              setIsAboutpage={setIsAboutpage}
              setIsSkillpage={setIsSkillpage}
              setIsPortfoliopage={setIsPortfoliopage}
              setIsContactpage={setIsContactpage}
            />
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfoliopage
              setIsHomepage={setIsHomepage}
              setIsAboutpage={setIsAboutpage}
              setIsSkillpage={setIsSkillpage}
              setIsPortfoliopage={setIsPortfoliopage}
              setIsContactpage={setIsContactpage}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contactmepage
              setIsHomepage={setIsHomepage}
              setIsAboutpage={setIsAboutpage}
              setIsSkillpage={setIsSkillpage}
              setIsPortfoliopage={setIsPortfoliopage}
              setIsContactpage={setIsContactpage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
