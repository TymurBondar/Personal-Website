import { useState } from "react";

function Projects() {
    const [displayedProject, setDisplayedProject] = useState("")
    return (
        <div className="flex justify-start w-full">
          <div className="text-left text-3xl">
            <ul className="list-disc ml-28 mb-60">
              <li className="mb-6">Project 1</li>
              <li className="mb-6">Project 2</li>
              <li className="mb-6">Project 3</li>
              <li className="mb-6">Project 4</li>
              <li className="mb-6">Project 5</li>
            </ul>
          </div>
        </div>
      );
};

export default Projects;