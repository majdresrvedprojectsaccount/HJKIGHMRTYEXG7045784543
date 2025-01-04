const imageSources = {
    'en': 'path/to/english-image.jpg',
    'fr': 'path/to/french-image.jpg',
    'es': 'path/to/spanish-image.jpg',
    // Add more languages and images as needed
};
const fallbackImage = 'path/to/default-image.jpg';

// Get the browser's language
const browserLanguage = navigator.language || navigator.userLanguage; // e.g., "en-US"

// Extract the primary language (e.g., "en" from "en-US")
const primaryLanguage = browserLanguage.split('-')[0];

// Select the image based on the language or use the fallback
const selectedImage = imageSources[primaryLanguage] || fallbackImage;

// Set the `src` attribute of the image
document.getElementById('languageImage').src = selectedImage;