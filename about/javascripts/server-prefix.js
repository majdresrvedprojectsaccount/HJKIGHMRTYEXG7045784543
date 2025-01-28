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

    function startSpeech() {
      const paragraph = document.getElementById("text");
      const text = paragraph.innerText;
      const words = text.split(" "); // Split text into words

      let currentIndex = 0;

      // Speech synthesis initialization
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1; // Speed of speech
      utterance.pitch = 1; // Pitch of speech
      utterance.lang = 'en-US'; // Language

      // Highlight each word as it is spoken
      utterance.onboundary = (event) => {
        if (event.name === "word" && currentIndex < words.length) {
          // Clear previous highlights
          paragraph.innerHTML = words
            .map((word, index) =>
              index === currentIndex ? `<span class="highlight">${word}</span>` : word
            )
            .join(" ");
          currentIndex++;
        }
      };

      // Reset paragraph when finished
      utterance.onend = () => {
        paragraph.innerHTML = words.join(" ");
      };

      // Start speaking
      speechSynthesis.speak(utterance);
    }