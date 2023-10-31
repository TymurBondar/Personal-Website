import { useState } from "react";
import "../App.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  const [mainContent, setMainContent] = useState("About");

  return (
    <div className="flex flex-col">
      <Navbar setMainContent={setMainContent}/>
      <div className="main">
        {mainContent === "About" ? (
          <About />
        ) : mainContent === "Projects" ? (
          <Projects />
        ) : mainContent === "Contact" ? (
          <Contact />
        ) : null}
      </div>
    </div>
  );
}

export default App;
