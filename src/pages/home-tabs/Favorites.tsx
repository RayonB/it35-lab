import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonButton,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle
  } from '@ionic/react';
  
  import React from 'react';
function Favorites() {
  return (
    <IonCard>
    <IonCardHeader>
      <IonCardTitle>Unlock Your Potential</IonCardTitle>
      <IonCardSubtitle>Empower Your Journey</IonCardSubtitle>
    </IonCardHeader>
  
    <IonCardContent>
      Every challenge is an opportunity to grow. Stay focused, keep pushing, and remember that with dedication and hard work, you can achieve anything. Your future is bright—keep moving forward!
    </IonCardContent>
  
    <IonButton fill="clear">Start Now</IonButton>
    <IonButton fill="clear">Stay Motivated</IonButton>
  </IonCard>
  
  );
}

  export default Favorites;