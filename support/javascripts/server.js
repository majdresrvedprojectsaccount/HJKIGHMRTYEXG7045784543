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