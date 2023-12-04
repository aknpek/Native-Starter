import React, { createContext, useState, useContext, useEffect } from "react";
import { loadLocale, deviceLocale } from "./index";

const defaultLocale = deviceLocale || "en"; // Use device locale or fallback to "en"

type Translations = {
  [key: string]: string;
};

export const LocalizationContext = createContext({
  language: defaultLocale,
  translations: {} as Translations,
  setLanguage: (lang: string) => {},
});

interface LocalizationProviderProps {
  children: React.ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState(defaultLocale);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchInitialTranslations = async () => {
      const initialTranslations = await loadLocale(defaultLocale);
      setTranslations(initialTranslations);
    };

    fetchInitialTranslations();
  }, []);

  const changeLanguage = async (lang: string) => {
    const newTranslations = await loadLocale(lang);
    setLanguage(lang);
    setTranslations(newTranslations);
  };

  return (
    <LocalizationContext.Provider
      value={{ language, translations, setLanguage: changeLanguage }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
