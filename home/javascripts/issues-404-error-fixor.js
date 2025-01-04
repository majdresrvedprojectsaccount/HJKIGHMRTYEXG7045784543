// Redirect to 404.html if the URL does not match existing routes
document.addEventListener("DOMContentLoaded", function () {
    // Define valid routes in your application
    const validRoutes = ["/", "./home", "./about", "./contact", "./services"]; // Add your actual valid routes here
    
    // Get the current path
    const currentPath = window.location.pathname;
    
    // Check if the current path is not in the valid routes
    if (!validRoutes.includes(currentPath)) {
        window.location.href = "../../404/"; // Redirect to the 404.html page
    }
});
