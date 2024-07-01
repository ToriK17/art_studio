import React, { useEffect, useState, useContext } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logoInstagram, logoFacebook, logoYoutube } from 'ionicons/icons';
import './navbar.scss';
import customIcon from '/src/assets/images/sa-logo.png';
import LanguageToggle from './LanguageToggle';
import { LanguageContext } from './LanguageContext'; // Import LanguageContext

interface TranslationsType {
  en: {
    gallery: string;
    about: string;
    videos: string;
    contact: string;
  };
  es: {
    gallery: string;
    about: string;
    videos: string;
    contact: string;
  };
}

const translations: TranslationsType = {
  en: {
    gallery: 'Gallery',
    about: 'About',
    videos: 'Videos',
    contact: 'Contact',
  },
  es: {
    gallery: 'Galería',
    about: 'Acerca de',
    videos: 'Videos',
    contact: 'Contacto',
  },
};

const NavBar: React.FC = () => {
  const history = useHistory();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const { language } = useContext(LanguageContext); // Use context to get current language

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = (path: string) => history.push(path);

  return (
    <IonHeader>
      <IonToolbar className="custom-toolbar">
        <a href="/gallery" className="toolbar-title">Kafati Art Studio</a>
        {!isSmallScreen && (
          <div className="navbar-content">
            <div className="navbar-links">
              <IonButton fill="clear" onClick={() => navigate('/gallery')}>{translations[language].gallery}</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/about')}>{translations[language].about}</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/videos')}>{translations[language].videos}</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/contact')}>{translations[language].contact}</IonButton>
            </div>
            <div className="social-links">
              <LanguageToggle />
              <IonButton fill="clear" href="https://www.instagram.com/kafati_art_studio/?hl=en" target="_blank">
                <IonIcon icon={logoInstagram} style={{ color: 'white' }} />
              </IonButton>
              <IonButton fill="clear" href="https://www.facebook.com/jaime.kafati.5" target="_blank">
                <IonIcon icon={logoFacebook} style={{ color: 'royalblue' }} />
              </IonButton>
              <IonButton fill="clear" href="https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg" target="_blank">
                <IonIcon icon={logoYoutube} style={{ color: 'red' }} />
              </IonButton>
              <IonButton fill="clear" href="https://www.saatchiart.com/kafati" target="_blank">
                <img src={customIcon} style={{ width: '24px', height: '24px' }} alt="Saatchi Art" />
              </IonButton>
            </div>
          </div>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default NavBar;
