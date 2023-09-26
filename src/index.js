const projectList = document.getElementById("projectLinks");
let newId = 0;

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
    newId++;
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
    document.getElementById("recommendForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const director = e.target.director.value;
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id: newId,
                movie: title,
                director: director
            })
        })
    })
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

// document.addEventListener('DOMContentLoaded', function() {
// Add click event listener to all links with 'transition-link' class
document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Add 'fade-out' class to body to start the fade-out transition
        document.body.classList.add('fade-out');
        // When the transition ends, navigate to the link's href
        setTimeout(() => {
            window.location.href = link.href;
        }, 500); // 500ms corresponds to the transition duration in the CSS
    });
});
// });
