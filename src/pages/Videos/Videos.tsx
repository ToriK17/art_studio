import React, { useContext, useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import './Videos.scss';
import videoList from './video_list.js';
import { LanguageContext } from "../../components/LanguageContext";

const translations = {
  en: {
    videos: 'Videos',
    blurb: 'These videos document my painting process, studio experiments, and lectures on figurative art.',
    visitYoutube: 'Visit the ',
    youtubeLink: 'YouTube channel',
    fullPlaylist: ' for the full video library and to subscribe.',
  },
  es: {
    videos: 'Videos',
    blurb: 'Estos videos documentan mi proceso de pintura, experimentos en el estudio y conferencias sobre arte figurativo.',
    visitYoutube: 'Visita el ',
    youtubeLink: 'canal de YouTube',
    fullPlaylist: ' para la biblioteca completa de videos y suscríbete.',
  },
};

const getVideoId = (src: string) => src.split('/embed/')[1]?.split('?')[0] ?? '';

const Videos: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [activeVideos, setActiveVideos] = useState<Set<string>>(new Set());

  const activate = (src: string) =>
    setActiveVideos(prev => new Set(prev).add(src));

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
        <div className="videos-header">
          <p className="top-blurb">{translations[language].blurb}</p>
          <p className="top-text">
            {translations[language].visitYoutube}
            <a href="https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg" target="_blank" rel="noreferrer">
              {translations[language].youtubeLink}
            </a>
            {translations[language].fullPlaylist}
          </p>
        </div>
        <div className="video-container">
          {videoList.slice(0).reverse().map((data) => {
            const videoId = getVideoId(data.src);
            const isActive = activeVideos.has(data.src);

            return (
              <div className="video-card" key={data.src}>
                {isActive ? (
                  <div className="video-iframe-wrapper">
                    <iframe
                      title={data.title}
                      width="100%"
                      height="100%"
                      src={`${data.src}?autoplay=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    className="video-thumb"
                    onClick={() => activate(data.src)}
                    role="button"
                    aria-label={`Play ${data.title}`}
                  >
                    <div className="video-thumb-img-wrapper">
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={data.title}
                      />
                      <div className="play-button">▶</div>
                    </div>
                    <div className="video-card-footer">
                      <span className="video-eyebrow">Video</span>
                      <div className="video-thumb-title">{data.title}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Videos;
