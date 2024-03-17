import React, { useContext } from 'react';
import { IonToggle } from '@ionic/react';
import { LanguageContext } from './LanguageContext';

const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    const handleToggle = () => {
        toggleLanguage();
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>    
        <span style={{ marginRight: '.5rem' }}>EN</span>
          <IonToggle
              checked={language === 'es'}
              onIonChange={handleToggle}
          />
        <span style={{ marginLeft: '.5rem' }}>ES</span>
      </div>
    );
};

export default LanguageToggle;
