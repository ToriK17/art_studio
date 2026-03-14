import React, { createContext, ReactNode, useState, useEffect } from 'react';

export interface Painting {
  sys: { id: string };
  title: string;
  dimensions?: string;
  mediaType?: string;
  imageFile: {
    description?: string;
    url: string;
  };
}

interface PaintingsContextType {
  paintings: Painting[];
  loading: boolean;
}

interface PaintingsProviderProps {
  children: ReactNode;
}

export const PaintingsContext = createContext<PaintingsContextType>({
  paintings: [],
  loading: true,
});

export const PaintingsProvider: React.FC<PaintingsProviderProps> = ({ children }) => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      const query = `
        {
          paintingPostCollection {
            items {
              sys { id }
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
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_REACT_APP_SPACE_ID}/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
          }
        );

        const result = await response.json();
        const items = result.data.paintingPostCollection.items;

        const uniqueUrls = new Set();
        const filteredItems = items.filter((item: Painting) => {
          const url = item.imageFile?.url;
          if (url && !uniqueUrls.has(url)) {
            uniqueUrls.add(url);
            return true;
          }
          return false;
        });

        setPaintings(filteredItems);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  return (
    <PaintingsContext.Provider value={{ paintings, loading }}>
      {children}
    </PaintingsContext.Provider>
  );
};
