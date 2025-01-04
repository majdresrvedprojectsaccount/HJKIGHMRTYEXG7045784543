document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
});

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        alert("Saving is disabled on this page.");
    }
});