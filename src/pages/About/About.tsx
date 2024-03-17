import React, { useContext } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonText,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import { useIsMobile } from '../../hooks/useIsMobile';
import './about.scss';
import translations from './translations.json';
import { LanguageContext } from "../../components/LanguageContext";

interface Translations {
  [key: string]: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    title2: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
    li6: string;
    li7: string;
    li8: string;
    li9: string;
    li10: string;
    li11: string;
    li12: string;
    li13: string;
    li14: string;
    li15: string;
    li16: string;
    li17: string;
    li18: string;
    li19: string;
    li20: string;
    li21: string;
    li22: string;
    li23: string;
    li24: string;
    li25: string;
    li26: string;
    li27: string;
    links: string;
    links1: string;
    links2: string;
    links3: string;
    links4: string;
  };
}


const About: React.FC = () => {
const { language } = useContext(LanguageContext);
const title = (translations as Translations)[language].title;
const title2 = (translations as Translations)[language].title2;
const p1 = (translations as Translations)[language].p1;
const p2 = (translations as Translations)[language].p2;
const p3 = (translations as Translations)[language].p3;
const li1 = (translations as Translations)[language].li1;
const li2 = (translations as Translations)[language].li2;
const li3 = (translations as Translations)[language].li3;
const li4 = (translations as Translations)[language].li4;
const li5 = (translations as Translations)[language].li5;
const li6 = (translations as Translations)[language].li6;
const li7 = (translations as Translations)[language].li7;
const li8 = (translations as Translations)[language].li8;
const li9 = (translations as Translations)[language].li9;
const li10 = (translations as Translations)[language].li10;
const li11 = (translations as Translations)[language].li11;
const li12 = (translations as Translations)[language].li12;
const li13 = (translations as Translations)[language].li13;
const li14 = (translations as Translations)[language].li14;
const li15 = (translations as Translations)[language].li15;
const li16 = (translations as Translations)[language].li16;
const li17 = (translations as Translations)[language].li17;
const li18 = (translations as Translations)[language].li18;
const li19 = (translations as Translations)[language].li19;
const li20 = (translations as Translations)[language].li20;
const li21 = (translations as Translations)[language].li21;
const li22 = (translations as Translations)[language].li22;
const li23 = (translations as Translations)[language].li23;
const li24 = (translations as Translations)[language].li24;
const li25 = (translations as Translations)[language].li25;
const li26 = (translations as Translations)[language].li26;
const li27 = (translations as Translations)[language].li27;
const links = (translations as Translations)[language].links;
const links1 = (translations as Translations)[language].links1;
const links2 = (translations as Translations)[language].links2;
const links3 = (translations as Translations)[language].links3;
const links4 = (translations as Translations)[language].links4;

const profilePic = "/assets/images/Jaime.jpg";
const isMobile = useIsMobile();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton style={{ color: '#fff' }}/>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {isMobile ? (
          <>
            <IonImg src={profilePic} alt="Jaime Kafati" />
            <IonText>
              <div className="about-description">
                  <p>{p1}</p>
                  <p>{p2}</p>
                  <p>{p3}</p>

                <h3 style={{ color: '#fff' }}>{title2}</h3>
                <ul>
                <li>{li1}</li>
                  <li>{li2}</li>
                  <li>{li3}</li>
                  <li>{li4}</li>
                  <li>{li5}</li>
                  <li>{li6}</li>
                  <li>{li7}</li>
                  <li>{li8}</li>
                  <li>{li9}</li>
                  <li>{li10}</li>
                  <li>{li11}</li>
                  <li>{li12}</li>
                  <li>{li13}</li>
                  <li>{li14}</li>
                  <li>{li15}</li>
                  <li>{li16}</li>
                  <li>{li17}</li>
                  <li>{li18}</li>
                  <li>{li19}</li>
                  <li>{li20}</li>
                  <li>{li21}</li>
                  <li>{li22}</li>
                  <li>{li23}<a href="https://www.artistcloseup.com/magazine" target="_blank" rel="noreferrer">Artist Closeup Contemporary Magazine</a></li>
                  <li>{li24}</li>
                  <li>{li25}</li>
                  <li>{li26}<a href="https://tpandgo.com/el-grito-del-silencio-or-artista-plastico-jaime-kafati" target="_blank" rel="noreferrer">{li27}</a></li>                  
                </ul>

                <h3 style={{ color: '#fff' }}>{links}</h3>
                <ul>
                  <li>{links1} <a href="http://tpandgo.com/artes-plasticas/expo-arte-30-latinoamerica-artista-jaime-kafati" target="_blank" rel="noreferrer">{links2}</a>  </li>
                  <li>ES Gallery, Colombia (Instagram: @garcesgallery) <a href="https://garcesgallery.com/" target="_blank" rel="noreferrer">Garces Gallery</a></li>
                  <li>{links3}<a href="www.econciencia.com" target="_blank" rel="noreferrer">Econciencia</a>  & <a href="https://www.studiovisitmagazine.com/volumes" target="_blank" rel="noreferrer">Studio Visit Magazine</a> </li>
                  <li>{links4}<a href="https://www.studiovisitmagazine.com/pastvolumes/volume51" target="_blank" rel="noreferrer">Volume 51</a></li>
                </ul>
              </div>
            </IonText>
          </>
        ) : (
          <div className="container">
            <div className="left-half">
              <IonImg src={profilePic} className="profile-img" alt="Jaime Kafati" />
            </div>
            <div className="right-half">
            <IonText>
              <h2>{title}</h2>
              <div className="about-description">
                  <p>{p1}</p>
                  <p>{p2}</p>
                  <p>{p3}</p>

                <h3 className="blackTextImportant">{title2}</h3>
                <ul>
                  <li>{li1}</li>
                  <li>{li2}</li>
                  <li>{li3}</li>
                  <li>{li4}</li>
                  <li>{li5}</li>
                  <li>{li6}</li>
                  <li>{li7}</li>
                  <li>{li8}</li>
                  <li>{li9}</li>
                  <li>{li10}</li>
                  <li>{li11}</li>
                  <li>{li12}</li>
                  <li>{li13}</li>
                  <li>{li14}</li>
                  <li>{li15}</li>
                  <li>{li16}</li>
                  <li>{li17}</li>
                  <li>{li18}</li>
                  <li>{li19}</li>
                  <li>{li20}</li>
                  <li>{li21}</li>
                  <li>{li22}</li>
                  <li>{li23}<a className='blue-tags' href="https://www.artistcloseup.com/magazine" target="_blank" rel="noreferrer">Artist Closeup Contemporary Magazine</a></li>
                  <li>{li24}</li>
                  <li>{li25}</li>
                  <li>{li26}<a className='blue-tags' href="https://tpandgo.com/el-grito-del-silencio-or-artista-plastico-jaime-kafati" target="_blank" rel="noreferrer">{li27}</a></li>                  
                </ul>

                <h3 className="blackTextImportant">{links}</h3>
                <ul>
                  <li>{links1} <a className='blue-tags' href="http://tpandgo.com/artes-plasticas/expo-arte-30-latinoamerica-artista-jaime-kafati" target="_blank" rel="noreferrer">{links2}</a>  </li>
                  <li>ES Gallery, Colombia (Instagram: @garcesgallery) <a className='blue-tags' href="https://garcesgallery.com/" target="_blank" rel="noreferrer">Garces Gallery</a></li>
                  <li>{links3}<a className='blue-tags' href="www.econciencia.com" target="_blank" rel="noreferrer"> Econciencia</a>  & <a className='blue-tags' href="https://www.studiovisitmagazine.com/volumes" target="_blank" rel="noreferrer">Studio Visit Magazine</a> </li>
                  <li>{links4}<a className='blue-tags' href="https://www.studiovisitmagazine.com/pastvolumes/volume51" target="_blank" rel="noreferrer">Volume 51</a></li>
                </ul>
              </div>
            </IonText>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default About;
