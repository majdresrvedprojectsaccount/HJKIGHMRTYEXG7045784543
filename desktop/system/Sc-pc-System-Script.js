        // Function to update the clock with the browser's local time
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const timeString = `${hours}:${minutes}`;

            // Update the clock element with the current time
            document.getElementById('clock').textContent = timeString;
        }

        // Update the clock every second
        setInterval(updateClock, 1000);

        // Initialize the clock when the page loads
        updateClock();

        // Function to get the formatted date based on the browser's local time
        function updateLocalDate() {
            const now = new Date();

            // Array for days and months abbreviations
            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Get the formatted components
            const dayOfWeek = dayNames[now.getDay()]; // Day of the week (e..g.., "Fri")
            const month = monthNames[now.getMonth()]; // Month abbreviation (e..g.., "Sep")
            const dayOfMonth = now.getDate(); // Day of the month (e..g.., "2")

            // Display the date in the format "Fri, Sep, 2"
            document.getElementById('local-date').innerHTML = `${dayOfWeek}, ${month}, ${dayOfMonth}`;
        }

        // Update the date every second
        setInterval(updateLocalDate, 1000);

        // Initialize the date when the page loads
        updateLocalDate();

        const contextMenu = document.getElementById('context-menu');

        // Show the context menu at the mouse cursor position
        window.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent the default right-click menu
            contextMenu.style.display = 'block'; // Show the context menu
            contextMenu.style.left = `${event.pageX}px`; // Position menu at mouse x
            contextMenu.style.top = `${event.pageY}px`; // Position menu at mouse y
        });

        // Hide the context menu when clicking anywhere on the page
        window.addEventListener('click', function() {
            contextMenu.style.display = 'none';
        });

        // Add custom actions for each menu item (optional)
        document.getElementById('item1').addEventListener('click', function() {
            alert('You clicked Option 1');
            contextMenu.style.display = 'none'; // Close menu after selection
        });

        document.getElementById('item2').addEventListener('click', function() {
            alert('You clicked Option 2');
            contextMenu.style.display = 'none'; // Close menu after selection
        });

        document.getElementById('item3').addEventListener('click', function() {
            alert('You clicked Option 3');
            contextMenu.style.display = 'none'; // Close menu after selection
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'F12') {
                event.preventDefault();
            }
            if (event.ctrlKey && event.shiftKey && event.key === '') {
                event.preventDefault();
            }
        });

        document.addEventListener("keydown", function(event) {
            if ((event.ctrlKey || event.metaKey) && event.key === "s") {
                event.preventDefault();
                alert("Saving is disabled on this page..");
            }
        });

    const container = document.getElementById("selection-container");
    let startX, startY, selectionBox;

    // Start drawing the selection box on mousedown
    container.addEventListener("mousedown", (event) => {
        // Create a new selection box
        startX = event.pageX - container.offsetLeft;
        startY = event.pageY - container.offsetTop;

        selectionBox = document.createElement("div");
        selectionBox.className = "selection-box";
        selectionBox.style.left = `${startX}px`;
        selectionBox.style.top = `${startY}px`;
        container.appendChild(selectionBox);

        // Add mousemove event to resize the box as the mouse moves
        container.addEventListener("mousemove", onMouseMove);
    });

    // Resize selection box on mouse move
    function onMouseMove(event) {
        const currentX = event.pageX - container.offsetLeft;
        const currentY = event.pageY - container.offsetTop;
        selectionBox.style.width = `${Math.abs(currentX - startX)}px`;
        selectionBox.style.height = `${Math.abs(currentY - startY)}px`;
        selectionBox.style.left = `${Math.min(currentX, startX)}px`;
        selectionBox.style.top = `${Math.min(currentY, startY)}px`;
    }

    // Stop drawing and remove selection box on mouseup
    document.addEventListener("mouseup", (event) => {
        if (selectionBox) {
            selectionBox.remove();
            selectionBox = null;
        }
        container.removeEventListener("mousemove", onMouseMove);
    });

    window.onload = function() {
        const notification = document.getElementById('notification');
    };

    function closeDiv() {
        var messageBox = document.getElementById("notification");
        messageBox.style.display = "none";
    }

    function toggleDiv() {
        var messageBox = document.getElementById("account");
        // Check current display value and toggle
        if (messageBox.style.display === "none") {
            messageBox.style.display = "block"; // Show the div
        } else {
            messageBox.style.display = "none"; // Hide the div
        }
    }

    // Event listener for the toggle button
    document.getElementById("hideshowButton").addEventListener("click", toggleDiv);



    
    function toggleDiv1() {
        var messageBox = document.getElementById("startwindow");
        // Check current display value and toggle
        if (messageBox.style.display === "none") {
            messageBox.style.display = "block"; // Show the div
        } else {
            messageBox.style.display = "none"; // Hide the div
        }
    }

    // Event listener for the toggle button
    document.getElementById("hideshowButton1").addEventListener("click", toggleDiv1);



    function accountShowDiv() {
        var messageBox = document.getElementById("account");
        messageBox.style.display = "block";
    }

    function accountCloseDiv() {
        var messageBox = document.getElementById("account");
        messageBox.style.display = "none";
    }

    document.getElementById("accountclosebutton").addEventListener("click", accountCloseDiv);
    document.getElementById("accountshowbutton").addEventListener("click", accountShowDiv);