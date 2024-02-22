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

// Updated with social media information
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kafati_art_studio/?hl=en',
    icon: logoInstagram,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/jaime.kafati.5',
    icon: logoFacebook,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg',
    icon: logoYoutube,
  },
  {
    name: 'Saatchiart',
    url: 'https://www.saatchiart.com/kafati',
    icon: customIcon,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Kafati Art Studio</IonListHeader>
          <IonNote>Pintor con el pincel extranjero</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        <IonList id="social-list">
        {socialLinks.map((link, index) => (
          <IonItem lines="none" key={index} href={link.url} target="_blank" detail={false}>
            {link.name === 'Saatchiart' ? 
              <div className="custom-icon-container">
                <IonImg src={link.icon} alt={link.name} />
              </div> : 
              <IonIcon slot="start" icon={link.icon} />
            }
            <IonLabel>{link.name}</IonLabel>
          </IonItem>
        ))}
    </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
