        // JavaScript function to set the background color based on the time
        function setThemeBasedOnTime() {
            const currentHour = new Date().getHours(); // Get the current hour (0-23)
            const body = document.body;

            // Define the time range for dark mode (7 PM to 7 AM)
            const darkModeStart = 19; // 7 PM
            const darkModeEnd = 7;    // 7 AM

            // Apply dark mode if the hour is between darkModeStart and darkModeEnd
            if (currentHour >= darkModeStart || currentHour < darkModeEnd) {
                body.style.backgroundColor = "#000000"; // Dark background
                body.style.color = "#ffffff"; // Light text
            } else {
                body.style.backgroundColor = "#ffffff"; // Light background
                body.style.color = "#000000"; // Dark text
            }
        }

        // Call the function to apply the theme when the page loads
        document.addEventListener("DOMContentLoaded", setThemeBasedOnTime);
