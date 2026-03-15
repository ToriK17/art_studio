import React, { useContext } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import {
  IonPage,
  IonCard,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonImg,
  IonButtons,
  IonMenuButton,
  IonCol,
  IonGrid,
  IonRow,
  IonSpinner,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { LanguageContext } from '../../components/LanguageContext';
import { PaintingsContext } from '../../components/PaintingsContext';
import AvailablePill from '../../components/AvailablePill';
import { isAvailable, cleanTitle } from '../../utils/paintingUtils';

const translations = {
  en: {
    gallery: 'Gallery',
  },
  es: {
    gallery: 'Galería',
  },
};

const Gallery: React.FC = () => {
  const { paintings, loading } = useContext(PaintingsContext);
  const isMobile = useIsMobile();
  const { language } = useContext(LanguageContext);
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{translations[language].gallery}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <IonSpinner />
          </div>
        ) : (
          <IonGrid>
            <IonRow>
              {paintings.map((painting, index) => (
                <IonCol size={isMobile ? '12' : '4'} key={index}>
                  <IonCard button onClick={() => history.push(`/painting/${painting.sys.id}`)}>
                    <IonImg src={painting.imageFile?.url} alt={painting.imageFile?.description} />
                    <IonCardHeader>
                      <IonCardTitle style={{ color: 'white' }}>{cleanTitle(painting.title)}</IonCardTitle>
                      {isAvailable(painting.title) && <AvailablePill />}
                    </IonCardHeader>
                    <IonCardContent style={{ color: 'white' }}>
                      {`${painting.mediaType} ${painting.dimensions}`}
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
