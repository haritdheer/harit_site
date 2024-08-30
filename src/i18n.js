import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import en from '../locales/en.json';
import de from '../locales/de.json'; // Example for French

i18n
    .use(LanguageDetector) // Detect the user's language
    .use(initReactI18next)  // Pass i18n down to react-i18next
    .init({
        resources: {
            en: { translation: en },
            de: { translation: de },
        },
        fallbackLng: 'en', // Default language
        detection: {
            order: ['navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
