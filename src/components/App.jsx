import { useState } from "react";
import "../App.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [mainContent, setMainContent] = useState("About");

  function handleMainContentChange(event) {
    event.preventDefault();
    setMainContent(event.target.textContent);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between">
        <nav className="flex justify-between">
          <a onClick={handleMainContentChange} className="" href="">
            About
          </a>
          <a onClick={handleMainContentChange} className="" href="">
            Projects
          </a>
          <a onClick={handleMainContentChange} className="" href="">
            Contact
          </a>
        </nav>
      </div>
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
