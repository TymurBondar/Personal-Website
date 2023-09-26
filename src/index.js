const projectList = document.getElementById("projectLinks");

function listProject(project){
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const newName = document.createElement("h2");
    const newDesc = document.createElement("p");
    newDesc.textContent = project.description;
    newName.textContent = project.name;
    newA.textContent = project.link;
    newLi.append(newA);
    document.getElementById("projectLinks").append(newLi);

}

fetch("http://localhost:3000/projects")
.then(res => res.json())
.then(projects => {
    projects.forEach(project => {
        
    });
})