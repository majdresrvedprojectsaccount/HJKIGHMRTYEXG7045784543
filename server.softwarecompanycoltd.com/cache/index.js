(function() {
    // Get the current URL path
    var currentUrl = window.location.pathname;
    
    // Remove any trailing slashes for consistency
    currentUrl = currentUrl.replace(/\/$/, "");
  
    // Function to check if the current page exists
    function checkPageExistence(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', url, true); // Use HEAD to avoid downloading the entire page content
      xhr.onload = function() {
        if (xhr.status === 404) {
          // If the status is 404, redirect to the 404 page
          window.location.href = "./404"; // Change this to your actual 404 page URL if needed
        }
      };
      xhr.onerror = function() {
        // In case of an error (e.g., network issues), also redirect to the 404 page
        window.location.href = "./404"; // Adjust to your 404 page URL
      };
      xhr.send();
    }
  
    // Check if the current page exists
    checkPageExistence(currentUrl);
  })();