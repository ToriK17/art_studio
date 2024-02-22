import React, { useEffect, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logoInstagram, logoFacebook, logoYoutube } from 'ionicons/icons';
import './navbar.scss'; // Make sure this path is correct

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
        <div className="navbar-content">
          <IonTitle>Kafati Art Studio</IonTitle>
          {!isSmallScreen && (
            <div className="navbar-links">
              <IonButton fill="clear" onClick={() => navigate('/gallery')}>Gallery</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/about')}>About</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/videos')}>Videos</IonButton>
              <IonButton fill="clear" onClick={() => navigate('/contact')}>Contact</IonButton>
              <IonButton fill="clear" href="https://www.instagram.com/kafati_art_studio/?hl=en" target="_blank">
                <IonIcon icon={logoInstagram} />
              </IonButton>
              <IonButton fill="clear" href="https://www.facebook.com/jaime.kafati.5" target="_blank">
                <IonIcon icon={logoFacebook} />
              </IonButton>
              <IonButton fill="clear" href="https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg" target="_blank">
                <IonIcon icon={logoYoutube} />
              </IonButton>
              {/* Saatchi Art link and custom icon */}
            </div>
          )}
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavBar;
