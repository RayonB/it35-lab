import React from 'react';
import {
   IonAccordion,
   IonAccordionGroup,
   IonContent,
   IonHeader,
  IonItem,
   IonLabel,
   IonMenuButton,
   IonPage,
   IonTitle,
   IonToolbar,
   IonButtons
} from '@ionic/react';
import './Favorites.css'; 

const quotes = [
  {
    title: "Stay Focused and Keep Going",
    message: "✨ Focus on progress, not perfection. Each small step forward is a step towards achieving greatness. You're doing amazing!",
    color: "primary"
  },
  {
    title: "Believe in Yourself",
    message: "🌱 Believe in your potential and strength. Every journey is built one step at a time—keep going!",
    color: "success"
  },
  {
    title: "Growth Comes from Challenges",
    message: "💪 Embrace challenges. They are opportunities for growth, not roadblocks.",
    color: "warning"
  },
  {
    title: "Dream Big",
    message: "🌠 Don’t limit your dreams. If you can dream it, you can do it.",
    color: "tertiary"
  },
  {
    title: "Be Consistent",
    message: "🕒 Success is built on consistency. Small efforts every day lead to big results.",
    color: "secondary"
  },
  {
    title: "Stay Positive",
    message: "🌞 Your attitude determines your direction. Stay positive and focused.",
    color: "success"
  },
  {
    title: "Never Stop Learning",
    message: "📚 Learning keeps you sharp, humble, and ready for anything.",
    color: "primary"
  },
  {
    title: "Celebrate Small Wins",
    message: "🎉 Every win—big or small—brings you closer to your goals.",
    color: "warning"
  },
  {
    title: "Keep the Vision Clear",
    message: "🔭 When your vision is clear, the obstacles become easier to overcome.",
    color: "tertiary"
  },
  {
    title: "You’ve Got This!",
    message: "💥 Remind yourself daily: You’re strong, you’re capable, and you’re enough.",
    color: "secondary"
  }
];

function Favorites() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Motivational Quotes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="favorites-background">
        <IonAccordionGroup>
          {quotes.map((quote, index) => (
            <IonAccordion value={`quote${index}`} key={index}>
              <IonItem slot="header" color={quote.color}>
                <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                  {quote.title}
                </IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <p>{quote.message}</p>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
}

export default Favorites;
