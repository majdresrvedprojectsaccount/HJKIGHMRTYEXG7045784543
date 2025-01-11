// Get all display items
const items = document.querySelectorAll('.display-item');
let currentIndex = 0;

// Function to show the next item
function showNextItem() {
    // Hide the current item
    items[currentIndex].style.display = 'none';

    // Move to the next item, looping back to the first
    currentIndex = (currentIndex + 1) % items.length;

    // Show the next item
    items[currentIndex].style.display = 'block';
}

// Set interval to switch items every 7 seconds
setInterval(showNextItem, 7000);
