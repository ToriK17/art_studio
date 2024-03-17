import React, { useEffect, useState } from 'react';
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

const NavBar: React.FC = () => {
  const history = useHistory();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

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
              <IonButton fill="clear" onClick={() => navigate('/gallery')}>Gallery</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/about')}>About</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/videos')}>Videos</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/contact')}>Contact</IonButton>
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
