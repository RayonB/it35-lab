import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from '@ionic/react';
import './Search.css';

function Search() {
  return (
    <>
      <IonSegment value="first">
        <IonSegmentButton value="first" contentId="first">
          <IonLabel>First</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="second" contentId="second">
          <IonLabel>Second</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="third" contentId="third">
          <IonLabel>Third</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="fourth" contentId="fourth">
          <IonLabel>Fourth</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="fifth" contentId="fifth">
          <IonLabel>Fifth</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegmentView>
        <IonSegmentContent id="first">"The only way to do great work is to love what you do." – Steve Jobs</IonSegmentContent>
        <IonSegmentContent id="second">"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer</IonSegmentContent>
        <IonSegmentContent id="third">"Your time is limited, so don’t waste it living someone else’s life." – Steve Jobs</IonSegmentContent>
        <IonSegmentContent id="fourth">"The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt</IonSegmentContent>
        <IonSegmentContent id="fifth">"It always seems impossible until it’s done." – Nelson Mandela</IonSegmentContent>
      </IonSegmentView>
    </>
  );
}

export default Search;
