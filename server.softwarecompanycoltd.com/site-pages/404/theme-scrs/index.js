// Function to detect the current theme and update the iframe visibility
function detectAndApplyTheme() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPreference = localStorage.getItem('theme');

    let theme = userPreference || (prefersDarkMode ? 'dark' : 'light');

    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);

    document.querySelector('.iframe-container .light').style.display = theme === 'light' ? 'block' : 'none';
    document.querySelector('.iframe-container .dark').style.display = theme === 'dark' ? 'block' : 'none';
}

// Function to toggle the theme based on user preference
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    detectAndApplyTheme();
}

// Initialize the theme on page load
document.addEventListener('DOMContentLoaded', () => {
    detectAndApplyTheme();

    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', toggleTheme);
});