import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonAccordion,
      IonAccordionGroup,
      IonItem,
      IonLabel
  } from '@ionic/react';
  import React from 'react';

function Feed() {
    return (
      <IonAccordionGroup>
        {/* First Accordion */}
        <IonAccordion value="first">
          <IonItem slot="header" color="primary">
            <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Stay Focused and Keep Going</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <p>✨ Focus on progress, not perfection.
              Each small step forward is a step towards achieving greatness. Stay focused, keep pushing, and remember that every challenge you face makes you stronger. You're doing amazing!</p>
          </div>
        </IonAccordion>
  
        {/* Second Accordion */}
        <IonAccordion value="second">
          <IonItem slot="header" color="success">
            <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Believe in Yourself</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <p>🌱 Believe in your potential and strength.
              You have everything within you to succeed. Don't be afraid to dream big and follow your passions. Every journey is built one step at a time—keep going!</p>
          </div>
        </IonAccordion>
  
        {/* Third Accordion */}
        <IonAccordion value="third">
          <IonItem slot="header" color="warning">
            <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Growth Comes from Challenges</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <p>💪 Embrace the challenges.
              Growth happens when you push yourself out of your comfort zone. Challenges are not roadblocks—they are opportunities for growth. Keep facing them, and you'll find success on the other side!</p>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    );
  }
  
  export default Feed;