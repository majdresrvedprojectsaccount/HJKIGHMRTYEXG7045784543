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

        document.addEventListener('keydown', function(event) {
            // Check if the Alt key is pressed
            if (event.key === "Alt") {
                // Close the window (works only if this window was opened via script)
                window.close();
            }
        });

document.addEventListener('keydown', function(event) {
    if (event.altKey) {
        event.preventDefault();
        console.log("Alt key usage is disabled on this page.");
    }
});

