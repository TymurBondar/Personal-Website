import { useState } from "react";
import "../App.css";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";

function App() {
  const [mainContent, setMainContent] = useState("About");

  return (
    <div className="flex flex-col h-screen">
      <Navbar setMainContent={setMainContent} />
      <div className="flex flex-grow justify-center items-center w-full">
        {mainContent === "About" ? (
          <About />
        ) : mainContent === "Projects" ? (
          <Projects />
        ) : null}
      </div>
    </div>
  );
}

export default App;
