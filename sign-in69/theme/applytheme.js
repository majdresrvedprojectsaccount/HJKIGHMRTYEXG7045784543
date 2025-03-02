
        // Call the function to apply the theme when the page loads
        // document.addEventListener("DOMContentLoaded", setThemeBasedOnTime);

        // function applyTheme() {
            // const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // document.body.style.backgroundColor = isDarkMode ? '#121212' : '#ffffff';
            // document.body.style.color = isDarkMode ? '#ffffff' : '#000000';
          // }
      
          // Apply theme on load
          // applyTheme();
      
          // Listen for theme changes
          // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

        // JavaScript function to set the background color based on the time
        // function setThemeBasedOnTime() {
            // const currentHour = new Date().getHours(); // Get the current hour (0-23)
            // const body = document.body;

            // Define the time range for dark mode (7 PM to 7 AM)
            // const darkModeStart = 19; // 7 PM
            // const darkModeEnd = 7;    // 7 AM

            // Apply dark mode if the hour is between darkModeStart and darkModeEnd
            // if (currentHour >= darkModeStart || currentHour < darkModeEnd) {
                // body.style.backgroundColor = "#262626"; // Dark background
                // body.style.color = "#ffffff"; // Light text
            // } else {
                // body.style.backgroundColor = "#ffffff"; // Light background
                // body.style.color = "#000000"; // Dark text
            // }
        // }

        function applyTimeBasedTheme() {
            const currentHour = new Date().getHours(); // Get the current hour (0-23)
            const darkModeStart = 19; // 7 PM
            const darkModeEnd = 7;   // 7 AM
            
            if (currentHour >= darkModeStart || currentHour < darkModeEnd) {
              // Nighttime theme
              document.body.style.backgroundColor = "#262626"; // Dark background
              document.body.style.color = "#ffffff"; // Light text
              const google = document.getElementById('google-login-btn')
              google.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'
              const miMS = document.getElementById('ms-signin')
              miMS.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'
              const github = document.getElementById('github-login')
              github.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'
              const apple = document.getElementById('apple-login')
              apple.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'

              const pwdinput = document.getElementById('password')
              pwdinput.style.cssText = 'border: 1px solid rgba(227, 227, 227, 0.33); color: #f4f4f4;'
              const eMl = document.getElementById('email')
              eMl.style.cssText = 'border: 1px solid rgba(227, 227, 227, 0.33); color: #f4f4f4;'

              const line = document.getElementById('line')
              line.style.cssText = 'background-color rgba(227, 227, 227, 0.33)'
              return true; // Indicates that the time-based theme is applied
            }
            return false; // Indicates that the time-based theme is not applied
          }
      
          function applyDeviceTheme() {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.style.backgroundColor = isDarkMode ? '#262626' : '#ffffff';
            document.body.style.color = isDarkMode ? '#ffffff' : '#000000';
            const google = document.getElementById('google-login-btn')
            google.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'
            const miMS = document.getElementById('ms-signin')
            miMS.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'
            const github = document.getElementById('github-login')
            github.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'
            const apple = document.getElementById('apple-login')
            apple.style.cssText = 'background-color: rgba(244, 244, 244, 0.2); border: 1px solid #e3e3e340;'

            const pwdinput = document.getElementById('password')
            pwdinput.style.cssText = 'border: 1px solid rgba(227, 227, 227, 0.33)'
            const eMl = document.getElementById('email')
            eMl.style.cssText = 'border: 1px solid rgba(227, 227, 227, 0.33)'

            const line = document.getElementById('line')
            line.style.cssText = 'background-color: rgba(227, 227, 227, 0.33)'
          }
      
          function applyTheme() {
            // Check if it's nighttime (7 PM to 7 AM)
            const isTimeBasedThemeApplied = applyTimeBasedTheme();
            
            // If not nighttime, fall back to device theme
            if (!isTimeBasedThemeApplied) {
              applyDeviceTheme();
            }
          }
      
          // Apply the initial theme when the page loads
          document.addEventListener("DOMContentLoaded", applyTheme);
      
          // Listen for changes in device theme preferences
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            const currentHour = new Date().getHours();
            // Only apply device theme changes if it's not nighttime
            if (currentHour < 19 && currentHour >= 7) {
              applyDeviceTheme();
            }
          });
      
          // Optional: Refresh the time-based theme at midnight or specific intervals
          setInterval(() => {
            applyTheme();
          }, 60 * 1000); // Check every minute