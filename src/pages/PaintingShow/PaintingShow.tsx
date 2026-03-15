import React, { useContext, useState, useEffect, useCallback } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonImg,
  IonText,
  IonSpinner,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { PaintingsContext } from '../../components/PaintingsContext';
import { useIsMobile } from '../../hooks/useIsMobile';
import './PaintingShow.scss';

const PaintingShow: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { paintings, loading } = useContext(PaintingsContext);
  const isMobile = useIsMobile();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const painting = paintings.find(p => p.sys.id === id);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, closeLightbox]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/gallery" />
          </IonButtons>
          <IonTitle>{loading ? '' : painting?.title ?? ''}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {loading ? (
          <div className="painting-show-spinner">
            <IonSpinner />
          </div>
        ) : !painting ? (
          <IonText>
            <p style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
              Painting not found.
            </p>
          </IonText>
        ) : (
          <>
            <div className={isMobile ? 'painting-show-mobile' : 'painting-show-desktop'}>
              <div
                className="painting-show-image-wrapper"
                onClick={() => setLightboxOpen(true)}
              >
                <IonImg
                  src={painting.imageFile?.url}
                  alt={painting.imageFile?.description}
                />
              </div>
              <div className="painting-show-info">
                <IonText>
                  <h2 className="painting-show-title">{painting.title}</h2>
                  {painting.imageFile?.description && (
                    <p className="painting-show-description">{painting.imageFile.description}</p>
                  )}
                  {painting.mediaType && (
                    <p className="painting-show-meta">{painting.mediaType}</p>
                  )}
                  {painting.dimensions && (
                    <p className="painting-show-meta">{painting.dimensions}</p>
                  )}
                </IonText>
              </div>
            </div>

            {lightboxOpen && (
              <div className="lightbox-overlay" onClick={closeLightbox}>
                <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
                  <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                    &#x2715;
                  </button>
                  <img
                    src={painting.imageFile?.url}
                    alt={painting.imageFile?.description}
                    className="lightbox-img"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PaintingShow;
