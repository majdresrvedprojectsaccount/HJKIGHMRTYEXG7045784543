async function loadPageAssets(page) {
  try {
    const response = await fetch(`assets/${page}.json`);
    
    if (!response.ok) throw new Error("Asset file not found");

    const assets = await response.json();

    // Apply image resources
    document.getElementById("logo").src = assets.images.logo;
    document.getElementById("banner").src = assets.images.banner;
    document.getElementById("introVideo").src = assets.videos.intro;
    document.getElementById("welcomeText").textContent = assets.text.welcome;
    document.getElementById("descriptionText").textContent = assets.text.description;

    // Load CSS dynamically
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = assets.styles.main;
    document.head.appendChild(cssLink);

    // Load JavaScript if needed
    if (assets.scripts) {
      const script = document.createElement('script');
      script.src = assets.scripts.main;
      script.async = true; 
      document.body.appendChild(script);
    }

  } catch (error) {
    console.error("Error loading assets:", error);
  }
}

// Load assets based on the current page
const currentPage = 'page1'; // Example: set this dynamically based on the page
loadPageAssets(currentPage);