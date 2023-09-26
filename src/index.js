const projectList = document.getElementById("projectLinks");

function listProject(project) {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const newName = document.createElement("h5");
    const newDesc = document.createElement("p");
    newDesc.textContent = project.technologies;
    newDesc.style.fontSize = "1rem";
    newName.textContent = project.name;
    newA.href = project.link;
    newA.target = "_blank";
    newA.append(newName);
    newLi.append(newA, newDesc);
    document.getElementById("projectLinks").append(newLi);

}

if (document.getElementById("index")) {
    document.addEventListener("keyup", (e) => {
        if (e.key === "m" || e.key === "M") {
            fetch("http://localhost:3000/movies")
                .then(res => res.json())
                .then(projects => {
                    const movie = projects[(Math.floor(Math.random() * projects.length))];
                    document.getElementById("movieRec").textContent = `Movie: ${movie.movie}, Director: ${movie.director}`;
                })
        }
    });
};

if (document.getElementById("portfolioPage")) {
    fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then(projects => {
            projects.forEach(project => {
                listProject(project);
            });
        })
}