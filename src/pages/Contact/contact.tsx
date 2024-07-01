import React, { useContext } from 'react';
import { IonContent, IonPage, IonImg, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonText } from '@ionic/react';
import './contact.scss';
import { useIsMobile } from '../../hooks/useIsMobile';
import { LanguageContext } from "../../components/LanguageContext";

const translations = {
  en: {
    contact: 'Contact',
    getInTouch: 'Get in touch',
    interested: "If there is a piece that you're interested in purchasing, please",
    sendEmail: 'send me an email',
    discuss: 'and I would be happy to discuss further details.',
  },
  es: {
    contact: 'Contacto',
    getInTouch: 'Ponte en contacto',
    interested: 'Si hay una pieza que le interese comprar, por favor',
    sendEmail: 'envíame un correo electrónico',
    discuss: 'y estaré encantado de discutir más detalles.',
  },
};

const Contact: React.FC = () => {
  const contactPic = "/assets/images/oxen.png";
  const isMobile = useIsMobile();
  const textClass = isMobile ? 'mobile-text' : 'web-text';
  const linkClass = isMobile ? 'mobile-link' : 'web-link';
  const { language } = useContext(LanguageContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton style={{ color: '#fff' }} />
          </IonButtons>
          <IonTitle>{translations[language].contact}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {isMobile ? (
          <>
            <IonImg src={contactPic} alt="Jaime Kafati" />
            <IonText>
              <div className="contact-link">
                <h1 className={`contact-description-h1 ${textClass}`}>{translations[language].getInTouch}</h1>
                <p className={`contact-description ${textClass}`}>
                  {translations[language].interested}{' '}
                  <a className={linkClass} href="mailto:jeskb57@gmail.com" style={{ textDecoration: 'underline' }}>
                    {translations[language].sendEmail}
                  </a>, {translations[language].discuss}
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
                  <h1 className={`contact-description-h1 ${textClass}`}>{translations[language].getInTouch}</h1>
                  <p className={`contact-description ${textClass}`}>
                    {translations[language].interested}{' '}
                    <a className={linkClass} href="mailto:jeskb57@gmail.com" style={{ textDecoration: 'underline' }}>
                      {translations[language].sendEmail}
                    </a>, {translations[language].discuss}
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
