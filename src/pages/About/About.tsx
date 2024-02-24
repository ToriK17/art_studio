import React from "react";
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

const About: React.FC = () => {
const profilePic = "/assets/images/Jaime.jpg";
const isMobile = useIsMobile();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton style={{ color: '#fff' }}/>
          </IonButtons>
          <IonTitle>About Jaime Kafati</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        {isMobile ? (
          <>
            <IonImg src={profilePic} alt="Jaime Kafati" />
            <IonText>
              <div className="about-description">
                <h2>About Jaime Kafati</h2>
                  <p>
                    Thank you for visiting my website, I am Jaime Eduardo S. Kafati, I’ve been painting since my arrival to the United States in 1978, but it was until 2018, when I retired from my day-job that I was able to enjoy my studio on a fulltime basis. Between intermittent commissioned works, I involved myself in continued figurative studies, attending local life-drawing sessions, exploring new mediums, and executing allegorical paintings that allow me to express my personal contemplations of the world.
                  </p>
                  <p>
                    Although oils are my primary medium, I love to experiment with a diverse set of mediums and styles. While my works are continually evolving in style and subject matter, the characters within my figurative works reflect a global community, as the human form occupies the central motif of most of my paintings, and within the figure, I give a voice to our humanity.
                  </p>
                  <p>
                    My artworks reside in both private and public collections. Over the years, they have been exhibited and published extensively in the United States. Since 2020, it has been incredibly humbling to witness several of my pieces selected and published on the international stage, spanning across Latin America and Europe. Listed below are some of the notable events within my artist life:
                  </p>
                <h3>Exhibitions, and Publications</h3>
                <ul>
                  <li>1980 -	Participated in the completion of a large American-theme mural at the Columbine High School (CHS) Library. I was selected with fellow CHS art students, and although I hadn’t quite grasped English, art became the universal language for me. Regretfully, the mural was destroyed during the restoration of the school following the Columbine Tragedy.</li>
                  <li>1986 -	Arapahoe Community College Student Painting Exhibit</li>
                  <li>1987 -	Arapahoe Community College Student Sculpture Exhibit</li>
                  <li>1988 -	Denver Inner City Art Expo held at the Stouffer Concourse Hotel, Denver, CO</li>
                  <li>1997 -	Solo exhibit, “Mis Tierras” at the Town Hall Art Center, Littleton, CO</li>
                  <li>1998 -	The Latino Art Festival in the Mountains, Carbondale, CO</li>
                  <li>1998 -	The Night Walker Exhibit, Fort Collins Museum, Fort Collins CO</li>
                  <li>1998 -	Lafayette Art Center, Placed 1st in the show with Aztec series, Lafayette, CO</li>
                  <li>1999 -	Capitol Hill People’s Fair, Denver, CO</li>
                  <li>1999 -	Volunteered after-hours to direct and offer technical assistance to an all-prisoner artists-team, for the restoration of a mural at the Denver County Jail, Denver, CO. The large mural took several weeks to complete and offered the inmates an opportunity to leave a lasting and positive legacy at their place of worship.</li>
                  <li>2000 -	Gifted two large religious paintings to low-revenue churches “Descent from the Cross” Oil on canvas, 108” x 72” Iglesia de San Cayetano, Denver, CO</li>
                  <li>2001 - Three works published by New Art International by Book Art Press, Volume VII. </li>
                  <li>2001 -	Notable commissioned piece after Carlo Maratta, Delmonico’s Historical-Event Hall, Denver, CO</li>
                  <li>2005 -	Donated work: “The Eagle Dancer” oil on canvas for a silent auction and fundraiser for the family of an Adams County Sheriff’s Deputy who unexpectedly lost his life in a motorcycle accident.</li>
                  <li>2007 -	Completed a mural at the Denver Sheriff’s Academy, 144” x 72” Dedicated to the officers who made the ultimate sacrifice serving all the residents of Denver, CO</li>
                  <li>2012-14 - Participated on two-separate public-art selection panels, along with fellow panelists we selected three permanent public works for the City and County of Denver totaling over $700,000.00</li>
                  <li>2018 -	Volunteered works for the exhibit “Expressions of MS Art Exhibit” held at Bigsby’s Folly, Craft Winery & Restaurant, Denver, CO (Sponsored by the Rocky Mt. M.S. Center in order to raise funds and public awareness on the effects of Multiple Sclerosis)</li>
                  <li>2018 – Gifted a congratulatory Salvadorian-theme painting, to the newly appointed Honorable Colorado Supreme Court Justice Carlos A. Samour Jr.</li>
                  <li>2021 – Selected by the highest judge’s points, by an international jury-panel in the competition “Hagamos un Puente, Mexico * USA” (Let’s Build a Bridge, Mexico * USA) Sponsored by Garces Gallery, Colombia and the Digital Magazine, Travel Plan & Go, Argentina</li>
                  <li>2022 – Selected by an international panel for the South American competition “Arte + Treinta” (Art plus 30, for artist 30 years of age and older) As a result, I was interviewed for publications on multiple occasions by Garces Gallery, Colombia; TP & Go Magazine Digital, Argentina; and Radio Econciencia, Mexico City, Mexico. (Please see links below)</li>
                  <li>2022 – Donated a series of ink drawings as a community engagement piece to the Denver Sheriff Department’s K-9 Unit’s children coloring book.</li>
                  <li>2022 – Completed a landscape painting, “Lookout Mountain” exclusively benefitting “The 2022 Rocky Mountain M.S. Center Gala Auction”</li>
                  <li>2022 – Three works were selected for <a href="https://www.artistcloseup.com/magazine" target="_blank" rel="noreferrer">Artist Closeup Contemporary Magazine</a></li>
                  <li>2023 – Painting “Eve and the Serpent” selected for publication in “Studio Visit Magazine, Volumes 51 & 52”, Boston, MA</li>
                  <li>2023 - On April 5, 2023, awarded the Price “The Universal Artist” at the National Museum of Science and Technology Leonardo da Vinci in Milan, Italy. My work “Bathsheba” oil on canvas, 36” x 48”, (91,44 x121,92 cm) was selected and published in the 2023 encyclopedic editions of “Contemporary Celebrity Masters Vol. II.” And the “5thInternational Prize, Leonardo Davinci edition: The Universal Artist”</li>
                </ul>

                <h3>Related links:</h3>
                <ul>
                  <li>Travel Plan & Go, Magazine Digital, Buenos Aires, Argentina <a href="http://tpandgo.com/artes-plasticas/expo-arte-30-latinoamerica-artista-jaime-kafati" target="_blank" rel="noreferrer">Expo Arte featuring Jaime Kafati</a>  </li>
                  <li>ES Gallery, Colombia (Instagram: @garcesgallery) <a href="https://garcesgallery.com/" target="_blank" rel="noreferrer">Garces Gallery</a></li>
                  <li>Miguel Jiménez, radio announcer, Mexico City, Mexico <a href="www.econciencia.com" target="_blank" rel="noreferrer">Econciencia</a>  & <a href="https://www.studiovisitmagazine.com/volumes" target="_blank" rel="noreferrer">Studio Visit Magazine</a> </li>
                  <li>Featured in Studio Visit Magazine, <a href="https://www.studiovisitmagazine.com/pastvolumes/volume51" target="_blank" rel="noreferrer">Volume 51</a></li>
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
              <div className="about-description">
                <h2>About Jaime Kafati</h2>
                  <p>
                    Thank you for visiting my website, I am Jaime Eduardo S. Kafati, I’ve been painting since my arrival to the United States in 1978, but it was until 2018, when I retired from my day-job that I was able to enjoy my studio on a fulltime basis. Between intermittent commissioned works, I involved myself in continued figurative studies, attending local life-drawing sessions, exploring new mediums, and executing allegorical paintings that allow me to express my personal contemplations of the world.
                  </p>
                  <p>
                    Although oils are my primary medium, I love to experiment with a diverse set of mediums and styles. While my works are continually evolving in style and subject matter, the characters within my figurative works reflect a global community, as the human form occupies the central motif of most of my paintings, and within the figure, I give a voice to our humanity.
                  </p>
                  <p>
                    My artworks reside in both private and public collections. Over the years, they have been exhibited and published extensively in the United States. Since 2020, it has been incredibly humbling to witness several of my pieces selected and published on the international stage, spanning across Latin America and Europe. Listed below are some of the notable events within my artist life:
                  </p>
                <h3>Exhibitions, and Publications</h3>
                <ul>
                  <li>1980 -	Participated in the completion of a large American-theme mural at the Columbine High School (CHS) Library. I was selected with fellow CHS art students, and although I hadn’t quite grasped English, art became the universal language for me. Regretfully, the mural was destroyed during the restoration of the school following the Columbine Tragedy.</li>
                  <li>1986 -	Arapahoe Community College Student Painting Exhibit</li>
                  <li>1987 -	Arapahoe Community College Student Sculpture Exhibit</li>
                  <li>1988 -	Denver Inner City Art Expo held at the Stouffer Concourse Hotel, Denver, CO</li>
                  <li>1997 -	Solo exhibit, “Mis Tierras” at the Town Hall Art Center, Littleton, CO</li>
                  <li>1998 -	The Latino Art Festival in the Mountains, Carbondale, CO</li>
                  <li>1998 -	The Night Walker Exhibit, Fort Collins Museum, Fort Collins CO</li>
                  <li>1998 -	Lafayette Art Center, Placed 1st in the show with Aztec series, Lafayette, CO</li>
                  <li>1999 -	Capitol Hill People’s Fair, Denver, CO</li>
                  <li>1999 -	Volunteered after-hours to direct and offer technical assistance to an all-prisoner artists-team, for the restoration of a mural at the Denver County Jail, Denver, CO. The large mural took several weeks to complete and offered the inmates an opportunity to leave a lasting and positive legacy at their place of worship.</li>
                  <li>2000 -	Gifted two large religious paintings to low-revenue churches “Descent from the Cross” Oil on canvas, 108” x 72” Iglesia de San Cayetano, Denver, CO</li>
                  <li>2001 - Three works published by New Art International by Book Art Press, Volume VII. </li>
                  <li>2001 -	Notable commissioned piece after Carlo Maratta, Delmonico’s Historical-Event Hall, Denver, CO</li>
                  <li>2005 -	Donated work: “The Eagle Dancer” oil on canvas for a silent auction and fundraiser for the family of an Adams County Sheriff’s Deputy who unexpectedly lost his life in a motorcycle accident.</li>
                  <li>2007 -	Completed a mural at the Denver Sheriff’s Academy, 144” x 72” Dedicated to the officers who made the ultimate sacrifice serving all the residents of Denver, CO</li>
                  <li>2012-14 - Participated on two-separate public-art selection panels, along with fellow panelists we selected three permanent public works for the City and County of Denver totaling over $700,000.00</li>
                  <li>2018 -	Volunteered works for the exhibit “Expressions of MS Art Exhibit” held at Bigsby’s Folly, Craft Winery & Restaurant, Denver, CO (Sponsored by the Rocky Mt. M.S. Center in order to raise funds and public awareness on the effects of Multiple Sclerosis)</li>
                  <li>2018 – Gifted a congratulatory Salvadorian-theme painting, to the newly appointed Honorable Colorado Supreme Court Justice Carlos A. Samour Jr.</li>
                  <li>2021 – Selected by the highest judge’s points, by an international jury-panel in the competition “Hagamos un Puente, Mexico * USA” (Let’s Build a Bridge, Mexico * USA) Sponsored by Garces Gallery, Colombia and the Digital Magazine, Travel Plan & Go, Argentina</li>
                  <li>2022 – Selected by an international panel for the South American competition “Arte + Treinta” (Art plus 30, for artist 30 years of age and older) As a result, I was interviewed for publications on multiple occasions by Garces Gallery, Colombia; TP & Go Magazine Digital, Argentina; and Radio Econciencia, Mexico City, Mexico. (Please see links below)</li>
                  <li>2022 – Donated a series of ink drawings as a community engagement piece to the Denver Sheriff Department’s K-9 Unit’s children coloring book.</li>
                  <li>2022 – Completed a landscape painting, “Lookout Mountain” exclusively benefitting “The 2022 Rocky Mountain M.S. Center Gala Auction”</li>
                  <li>2022 – Three works were selected for <a className='blue-tags' href="https://www.artistcloseup.com/magazine" target="_blank" rel="noreferrer">Artist Closeup Contemporary Magazine</a></li>
                  <li>2023 – Painting “Eve and the Serpent” selected for publication in “Studio Visit Magazine, Volumes 51 & 52”, Boston, MA</li>
                  <li>2023 - On April 5, 2023, awarded the Price “The Universal Artist” at the National Museum of Science and Technology Leonardo da Vinci in Milan, Italy. My work “Bathsheba” oil on canvas, 36” x 48”, (91,44 x121,92 cm) was selected and published in the 2023 encyclopedic editions of “Contemporary Celebrity Masters Vol. II.” And the “5thInternational Prize, Leonardo Davinci edition: The Universal Artist”</li>
                </ul>

                <h3>Related links:</h3>
                <ul>
                  <li>Travel Plan & Go, Magazine Digital, Buenos Aires, Argentina <a className='blue-tags' href="http://tpandgo.com/artes-plasticas/expo-arte-30-latinoamerica-artista-jaime-kafati" target="_blank" rel="noreferrer">Expo Arte featuring Jaime Kafati</a>  </li>
                  <li>ES Gallery, Colombia (Instagram: @garcesgallery) <a className='blue-tags' href="https://garcesgallery.com/" target="_blank" rel="noreferrer">Garces Gallery</a></li>
                  <li>Miguel Jiménez, radio announcer, Mexico City, Mexico <a className='blue-tags' href="www.econciencia.com" target="_blank" rel="noreferrer">Econciencia</a>  & <a className='blue-tags' href="https://www.studiovisitmagazine.com/volumes" target="_blank" rel="noreferrer">Studio Visit Magazine</a> </li>
                  <li>Featured in Studio Visit Magazine, <a className='blue-tags' href="https://www.studiovisitmagazine.com/pastvolumes/volume51" target="_blank" rel="noreferrer">Volume 51</a></li>
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
