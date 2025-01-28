function copyLink() {
    // Assuming the link to copy is the current page URL
    const link = window.location.href + '#Home'; // Add the title ID as an anchor
  
    // Create a temporary input element to hold the URL
    const tempInput = document.createElement("input");
    tempInput.value = link;
    document.body.appendChild(tempInput);
  
    // Select and copy the URL
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
  
    // Remove the temporary input
    document.body.removeChild(tempInput);
  
    // Optionally, show a message
    alert("Link copied to clipboard!");
  }