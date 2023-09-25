const projectList = document.getElementById("projectLinks");

function listProject(project){
    const newLi = document.createElement("li")
}

fetch("http://localhost:3000/projects")
.then(res => res.json())
.then(projects => {
    projects.forEach(project => {
        
    });
})