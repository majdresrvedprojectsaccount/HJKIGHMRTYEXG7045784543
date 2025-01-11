document.addEventListener("DOMContentLoaded", () => {
    const enterFullscreen = () => {
        const element = document.documentElement; // The entire page
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // For Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // For Chrome, Safari, and Edge
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // For IE/Edge
            element.msRequestFullscreen();
        }
    };

    // Automatically attempt fullscreen
    enterFullscreen();

    // Optional: Add fallback button for user interaction
    const button = document.createElement("button");
    button.textContent = "Go Fullscreen";
    button.style.position = "fixed";
    button.style.bottom = "10px";
    button.style.right = "10px";
    button.style.zIndex = "9999";
    document.body.appendChild(button);

    button.addEventListener("click", enterFullscreen);
});
