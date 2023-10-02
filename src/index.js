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
