import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

const resources = {
    en: {
        translation: enTranslations,
    },
    fr: {
        translation: frTranslations,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
        },
    });

// La langue declaree de la page (<html lang>) suit la langue affichee.
const majLang = (lng: string) => { document.documentElement.lang = (lng || 'fr').slice(0, 2) }
majLang(i18n.language)
i18n.on('languageChanged', majLang)

export default i18n;
