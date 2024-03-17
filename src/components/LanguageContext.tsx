import React, { createContext, ReactNode, useState } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  toggleLanguage: () => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const contextValue = { language, setLanguage, toggleLanguage };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
