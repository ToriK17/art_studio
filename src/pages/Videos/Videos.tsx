import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import './Videos.scss';
import videoList from './video_list.js';

const Videos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Videos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2>Please Visit &nbsp;<a href='https://www.youtube.com/channel/UCzz1Z-gsHb9w4bvj3Xh9REg'>Youtube</a> &nbsp;for full playlist and to Subscribe</h2>
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
