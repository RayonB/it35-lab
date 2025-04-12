import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function About() {
  return (
    <IonCard>
      <img alt="ICS Picture" src="https://imgs.search.brave.com/yU--4YbheRNYNtYGa-WiIBhXMp7vUAxrRly6Cp8u37c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iMzcx/ODMzNy5zbXVzaGNk/bi5jb20vMzcxODMz/Ny93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8xMi9GcnVzdHJh/dGVkLVN0dWRlbnQt/d2l0aC1MYXB0b3At/aW4tQ2FmZS1zY2Fs/ZWQuanBnP2xvc3N5/PTImc3RyaXA9MSZ3/ZWJwPTE" />
      <IonCardHeader>
        <IonCardTitle>Inspirational Quotes for BSIT Students</IonCardTitle>
        <IonCardSubtitle>Motivation for Success in Technology</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <ul>
          <li>"Keep pushing forward, even when challenges seem tough—your hard work today will lead to the success of tomorrow. Remember, every line of code you write is a step closer to mastering your craft."</li>
        </ul>
      </IonCardContent>
    </IonCard>
  );
}

export default About;
