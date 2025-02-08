document.getElementById('googleplaylink').addEventListener('Click', function(event) {
    event.preventDefault();
    this.href = "https://play.google.com";
    window.location.href = this.href;
});