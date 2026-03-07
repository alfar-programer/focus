import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from './locales/en';
import ar from './locales/ar';

const STORAGE_KEY = 'focus-language';
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = [ 'en', 'ar' ];

const dictionaries = { en, ar };

const I18nContext = createContext(null);

const getByPath = (source, path) => {
    if (!source || !path) return undefined;
    return path.split('.').reduce((acc, segment) => {
        if (acc && Object.prototype.hasOwnProperty.call(acc, segment)) {
            return acc[segment];
        }
        return undefined;
    }, source);
};

const detectInitialLanguage = () => {
    try {
        const savedLanguage = localStorage.getItem(STORAGE_KEY);
        if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
            return savedLanguage;
        }
    } catch {
        // no-op: fallback to navigator/default
    }

    if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('ar')) {
        return 'ar';
    }

    return DEFAULT_LANGUAGE;
};

export const I18nProvider = ({ children }) => {
    const [language, setLanguageState] = useState(detectInitialLanguage);

    const setLanguage = useCallback((nextLanguage) => {
        if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) return;
        setLanguageState(nextLanguage);
    }, []);

    const currentDictionary = dictionaries[language] || dictionaries[DEFAULT_LANGUAGE];

    const t = useCallback((path, fallback = '') => {
        const currentValue = getByPath(currentDictionary, path);
        if (typeof currentValue === 'string' || typeof currentValue === 'number') {
            return String(currentValue);
        }

        const fallbackValue = getByPath(dictionaries[DEFAULT_LANGUAGE], path);
        if (typeof fallbackValue === 'string' || typeof fallbackValue === 'number') {
            return String(fallbackValue);
        }

        return fallback;
    }, [currentDictionary]);

    const get = useCallback((path, fallback = null) => {
        const currentValue = getByPath(currentDictionary, path);
        if (currentValue !== undefined) return currentValue;

        const fallbackValue = getByPath(dictionaries[DEFAULT_LANGUAGE], path);
        if (fallbackValue !== undefined) return fallbackValue;

        return fallback;
    }, [currentDictionary]);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // no-op: localStorage unavailable
        }

        const isRTL = language === 'ar';
        document.documentElement.lang = language;
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }, [language]);

    const value = useMemo(() => ({
        language,
        isRTL: language === 'ar',
        setLanguage,
        t,
        get,
        supportedLanguages: SUPPORTED_LANGUAGES
    }), [language, setLanguage, t, get]);

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};

