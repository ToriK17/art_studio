import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: Dispatch<SetStateAction<'en' | 'es'>>;
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
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const contextValue = { language, setLanguage, toggleLanguage };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
