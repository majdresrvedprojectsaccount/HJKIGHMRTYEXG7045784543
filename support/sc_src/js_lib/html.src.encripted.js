async function scLIBXHTMLCODECONTXT96541AIRPORTUSERUNTIMEUICONTENTSUBPAGE() {
  try {
    const response = await fetch('https://softwarecompanycoltd.pages.dev/support/sc_src/sc_support_dist_main.html');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const htmlContent = await response.text();
    document.getElementById('_next_sc_support_web_app').innerHTML = htmlContent;
    } catch (error) {
      console.error('Error fetching external content:', error);
    }
}
scLIBXHTMLCODECONTXT96541AIRPORTUSERUNTIMEUICONTENTSUBPAGE();