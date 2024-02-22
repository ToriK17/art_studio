import { useState, useEffect } from 'react';
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
} from '@ionic/react';

interface Painting {
  title: string;
  dimensions?: string;
  mediaType?: string;
  imageFile: {
    description?: string;
    url: string;
  };
}

const Gallery: React.FC = () => {
  const [data, setData] = useState<Painting[]>([]);
  const isMobile = useIsMobile();

  const fetchContentfulData = async () => {
    const query = `
      {
        paintingPostCollection {
          items {
            title
            dimensions
            mediaType
            imageFile {
              description
              url
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_REACT_APP_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });
      console.log("Raw response:", response);

      const result = await response.json();
      setData(result.data.paintingPostCollection.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContentfulData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {data.map((painting, index) => (
              <IonCol size={isMobile ? "12" : "4"} key={index}>
                <IonCard>
                  <IonImg src={painting.imageFile?.url} alt={painting.imageFile?.description} />
                  <IonCardHeader>
                    <IonCardTitle style={{ color: 'white' }}>{painting.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent style={{ color: 'white' }}>
                    {`${painting.mediaType} ${painting.dimensions}`}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
