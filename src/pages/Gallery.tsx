import { useState, useEffect } from 'react';
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
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.map((painting, index) => (
          <IonCard key={index}>
            <IonImg src={painting.imageFile?.url} alt={painting.imageFile?.description} />
            <IonCardHeader>
              <IonCardTitle>{painting.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {`${painting.mediaType} ${painting.dimensions}`}
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
