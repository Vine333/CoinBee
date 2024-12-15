import React, { createContext, useContext, useCallback, useEffect } from "react";
import { translations } from "/public/locales/Translations.js";
import { useGlobalStore } from "../store/index.js";
import { useShallow } from "zustand/react/shallow";

const UseTranslate = createContext();

export const LanguageProvider = ({ children }) => {
    const { language, setLanguage } = useGlobalStore(useShallow((state) => ({
        language: state.language,
        setLanguage: state.setLanguage
    })));


    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage && storedLanguage !== language) {
            setLanguage(storedLanguage);
        }
    }, [setLanguage, language]);


    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const __i = useCallback((text) => {
        return translations[language]?.[text] || text;
    }, [language]);

    return (
        <UseTranslate.Provider value={{ changeLanguage, language, __i }}>
            {children}
        </UseTranslate.Provider>
    );
};

export const useLanguage = () => useContext(UseTranslate);
