import React from 'react';
import { IonContent, IonPage, IonImg, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonText } from '@ionic/react';
import './contact.scss';
import { useIsMobile } from '../../hooks/useIsMobile';

const Contact: React.FC = () => {
  const contactPic = "/assets/images/oxen.png";
  const isMobile = useIsMobile();
  const textClass = isMobile ? 'mobile-text' : 'web-text';
  const linkClass = isMobile ? 'mobile-link' : 'web-link';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton style={{ color: '#fff' }}/>
          </IonButtons>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {isMobile ? (
          <>
            <IonImg src={contactPic} alt="Jaime Kafati" />
            <IonText>
              <div className="contact-link">
                <h1 className={`contact-description-h1 ${textClass}`}>Get in touch</h1>
                <p className={`contact-description ${textClass}`}>
                  If there is a piece that you're interested in purchasing, please{' '}
                  <a className={linkClass} href="mailto:jeskb57@gmail.com" style={{ textDecoration: 'underline' }}>
                    send me an email
                  </a>, and I would be happy to discuss further details.
                </p>
              </div>
            </IonText>
          </>
        ) : (
          <div className="container">
            <div className="left-half">
              <IonImg src={contactPic} className="profile-img" alt="Jaime Kafati" />
            </div>
            <div className="right-half">
              <IonText>
                <div className="contact-link">
                  <h1 className={`contact-description-h1 ${textClass}`}>Get in touch</h1>
                  <p className={`contact-description ${textClass}`}>
                    If there is a piece that you're interested in purchasing, please{' '}
                    <a className={linkClass} href="mailto:jeskb57@gmail.com" style={{ textDecoration: 'underline' }}>
                      send me an email
                    </a>, and I would be happy to discuss further details.
                  </p>
                </div>
              </IonText>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Contact;
