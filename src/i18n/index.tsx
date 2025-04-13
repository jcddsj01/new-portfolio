import { createContext, useContext, useState } from "react";
import pt from "./pt.json";
import en from "./en.json";
import React from "react";

type Language = "portuguese" | "english";

const translations = {
  portuguese: pt,
  english: en,
};

type TranslationContextProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
};

const I18nContext = createContext<TranslationContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("portuguese");

  const translate = (key: string): string => {
    const keys = key.split(".");
    return keys.reduce((obj: any, k: string) => obj?.[k], translations[language]) || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): TranslationContextProps => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
