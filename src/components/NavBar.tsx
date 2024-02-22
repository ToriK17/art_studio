import React, { useEffect, useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonIcon,
  IonImg,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logoInstagram, logoFacebook, logoYoutube } from 'ionicons/icons';

const NavBar: React.FC = () => {
  const history = useHistory();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  const navigate = (path: string) => {
    history.push(path);
  };

  return (
    <IonHeader>
      <IonToolbar>
        {isSmallScreen && (
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        )}
        <IonTitle>Kafati Art Studio</IonTitle>
        {!isSmallScreen && (
          <>
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
            {/* Here you can add your custom Saatchi Art icon and link */}
          </>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default NavBar;
