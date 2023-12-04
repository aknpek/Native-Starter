import enTranslations from "./langs/en.json"; // Adjust path as needed
// import { getLocales } from "react-native-localize";

// export const deviceLocale = getLocales()[0].languageCode; // This will give you the device's current locale, e.g., 'en'
export const deviceLocale = "en"; // This will give you the device's current locale, e.g., 'en'

type Translations = {
  [key: string]: any;
};

const translations: Translations = {
  en: enTranslations,
};

export const loadLocale = (locale: string) => {
  return translations[locale] || translations["en"];
};
