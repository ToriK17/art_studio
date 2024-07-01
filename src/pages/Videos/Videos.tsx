import React, { useContext } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import './Videos.scss';
import videoList from './video_list.js';
import { LanguageContext } from "../../components/LanguageContext";

const translations = {
  en: {
    videos: 'Videos',
    visitYoutube: 'Please Visit',
    youtubeLink: 'Youtube',
    fullPlaylist: 'for full playlist and to Subscribe',
  },
  es: {
    videos: 'Videos',
    visitYoutube: 'Por favor visita',
    youtubeLink: 'Youtube',
    fullPlaylist: 'para la lista completa y suscríbete',
  },
};

const Videos: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton style={{ color: '#fff' }} />
          </IonButtons>
          <IonTitle>{translations[language].videos}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2 className='top-text'>
          {translations[language].visitYoutube} &nbsp;
          <a href='https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg'>{translations[language].youtubeLink}</a> &nbsp;
          {translations[language].fullPlaylist}
        </h2>
        <div className="video-container">
          {videoList.slice(0).reverse().map((data) => {
            return (
              <iframe
                title={data.title}
                width="560"
                height="315"
                src={data.src}
                key={data.src + data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Videos;
