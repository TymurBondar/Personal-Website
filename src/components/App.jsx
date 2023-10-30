import { useState } from "react";
import "../App.css";
import About from "./About";

function App() {
  const [mainContent, setMainContent] = useState("About");

  function handleMainContentChange(event) {
    event.preventDefault();
    setMainContent(event.target.textContent);
    console.log(event.target.textContent);
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
          <div>Projects Component</div>
        ) : mainContent === "Contact" ? (
          <div>Contact Component</div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
