import React from 'react';
import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { logoInstagram, logoFacebook, logoYoutube, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, images, imagesOutline, imagesSharp, informationCircleOutline, personOutline, personSharp, videocamOutline, videocamSharp, chatbubbleOutline } from 'ionicons/icons'; // Importing specific icons for social media
import './Menu.css';
import customIcon from '/src/assets/images/sa-logo.png';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Gallery',
    url: '/gallery',
    iosIcon: imagesOutline,
    mdIcon: imagesSharp
  },
  {
    title: 'About',
    url: '/about',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Videos',
    url: '/videos',
    iosIcon: videocamOutline,
    mdIcon: videocamSharp
  },
  {
    title: 'Contact',
    url: '/Contact',
    iosIcon: chatbubbleOutline,
    mdIcon: archiveSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader className="kafati-font-header" style={{ color: '#fff' }}>Kafati Art Studio</IonListHeader>
          <IonNote>Pintor con el pincel extranjero</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} style={{ color: '#fff' }} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
        <IonList id="social-list">
        <IonItem lines="none" href="https://www.instagram.com/kafati_art_studio/?hl=en" target="_blank" detail={false} >
            <IonIcon slot="start" icon={logoInstagram} style={{ color: 'white' }} />
            Instagram
          </IonItem>
          <IonItem lines="none" href="https://www.facebook.com/jaime.kafati.5" target="_blank" detail={false}>
            <IonIcon slot="start" icon={logoFacebook} style={{ color: '#4267B2' }} />
            Facebook
          </IonItem>
          <IonItem lines="none" href="https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg" target="_blank" detail={false}>
            <IonIcon slot="start" icon={logoYoutube} style={{ color: 'red' }} />
            YouTube
          </IonItem>
          <IonItem lines="none" href="https://www.saatchiart.com/kafati" target="_blank" detail={false}>
            <div className="custom-icon-container">
              <IonImg src={customIcon} alt="Saatchi Art" />
            </div>
            Saatchi Art
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
