import { useState } from "react";

function Projects() {
    const [displayedProject, setDisplayedProject] = useState("")
    return (
        <div className="flex justify-start w-full">
          <div className="text-left text-2xl">
            <ul className="list-disc ml-6">
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