document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    "en": {
      "backuptext": "back up",
      "downloadnowtext": "Download Now",
      "selectLanguage": "Select Language",
      "company-text": "Hello, world!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "ar": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "it": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "lv": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "es": {
      "backuptext": "Bienvenido a Nuestro Sitio Web",
      "downloadnowtext": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "company-text": "¡Hola, mundo!"
    },
    "fr": {
      "backuptext": "reculer",
      "downloadnowtext": "Télécharger Maintenant",
      "selectLanguage": "Choisir la langue",
      "company-text": "Entreprise"
    }
  };

  const backuptext = document.getElementById('backuptext');
  const downloadnowtext = document.getElementById('downloadnowtext');
  const languageLabel = document.getElementById('language-label');
  const languageSelect = document.getElementById('language-select');

  function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0];
  }

  function translatePage(lang) {
    if (translations[lang]) {
      backuptext.textContent = translations[lang].backuptext;
      downloadnowtext.textContent = translations[lang].downloadnowtext;
      languageLabel.textContent = translations[lang].selectLanguage;
      console.log("Page translated to:", lang);  // Debug: Confirm translation application
    } else {
      console.warn(`Translation for ${lang} not found, using default English.`);
      translatePage('en');
    }
  }

  function init() {
    const browserLang = getBrowserLanguage();
    const defaultLang = translations[browserLang] ? browserLang : 'en';
    translatePage(defaultLang);
    languageSelect.value = defaultLang;

    languageSelect.addEventListener('change', (event) => {
      translatePage(event.target.value);
    });
  }

  init();
});
