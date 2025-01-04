document.addEventListener(
  'DOMContentLoaded',
  () => {
    const translations = {
      "en": {
        "downloadnow": "Download Now",
        "description": "This is a simple multilingual website example.",
        "selectLanguage": "Select Language",
        "greeting": "Hello, world!"
      },
    "es": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "fr": {
      "downloadnow": "Télécharger Maintenant",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "it": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "pt": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "vi": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "tr": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "ru": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "hi": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "ko": {
      "downloadnow": "",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "ja": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "zh": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "ar": {
      "downloadnow": "تحميل الآن",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "th": {
      "downloadnow": "Bienvenido a Nuestro Sitio Web",
      "description": "Este es un ejemplo simple de un sitio web multilingüe.",
      "selectLanguage": "Seleccionar idioma",
      "greeting": "¡Hola, mundo!"
    },
    "he": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "nl": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "nb": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "cs": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "el": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "pl": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "ro": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "ga": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "is": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "kk": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "uz": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "bg": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "hr": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "et": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "lv": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "lt": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "fi": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "sv": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "sk": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "sl": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "id": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "da": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    },
    "de": {
      "downloadnow": "Bienvenue sur Notre Site Web",
      "description": "Ceci est un exemple simple de site web multilingue.",
      "selectLanguage": "Choisir la langue",
      "greeting": "Bonjour, tout le monde!"
    }
  };
  const backup = document.getElementById('backup');
  const downloadnow = document.getElementById('downloadnow');
  const description = document.getElementById('description');
  const greeting = document.getElementById('greeting');
  const languageLabel = document.getElementById('langlabel');
  const languageSelect = document.getElementById('langDropdown');
  function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0];
  }
  function translatePage(lang) {
    if (translations[lang]) {
      backup.textContent = translations[lang].backup;
      downloadnow.textContent = translations[lang].downloadnow;
      description.textContent = translations[lang].description;
      languageLabel.textContent = translations[lang].selectLanguage;
      greeting.textContent = translations[lang].greeting;
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
  