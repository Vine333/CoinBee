import React, { createContext, useState, useContext, useMemo, useCallback } from "react";
import { translations } from "/public/locales/Translations.js";


const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
    const storedLanguage = localStorage.getItem("language");
    const [language, setLanguage] = useState(storedLanguage || 'ru');


    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const __i = useCallback(
        (text) => {
            const translation = translations[language][text];
            if (!translation) {
                return text;
            }
            return translation;
        },
        [language]
    );




    return (
        <LanguageContext.Provider value={{changeLanguage, language, __i}}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => useContext(LanguageContext);
