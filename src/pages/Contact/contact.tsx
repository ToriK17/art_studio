import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton, IonImg, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import './contact.scss';

const Contact: React.FC = () => {
  const contactPic = "/assets/images/oxen.png"; // Adjusted path for web accessibility

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
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center centered-container">
              <IonImg src={contactPic} alt="Jaime Kafati" className="contact-img" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <div className="about-description">
                <h1>Get in touch</h1>
                <p>
                  If there is a piece that you're interested in purchasing, please{' '}
                  <a href="mailto:jeskb57@gmail.com" style={{ textDecoration: 'underline', color: 'inherit' }}>
                    send me an email
                  </a>, and I would be happy to discuss further details.
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
