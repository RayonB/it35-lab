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
  IonLabel,
  IonIcon
} from '@ionic/react';
import {
  sparkles,
  heartCircle,
  trendingUp,
  sunny,
  thumbsUp,
  flame,
  star,
  happy,
  bulb,
  leaf,
  rocket,
  time,
  flag,
  walk,
  trophy
} from 'ionicons/icons';
import React from 'react';

const accordionData = [
  {
    value: 'first',
    icon: sparkles,
    color: 'primary',
    title: 'Stay Focused and Keep Going',
    message: '✨ Focus on progress, not perfection. Every step forward matters.'
  },
  {
    value: 'second',
    icon: heartCircle,
    color: 'success',
    title: 'Believe in Yourself',
    message: '🌱 Trust your journey. You are capable of great things.'
  },
  {
    value: 'third',
    icon: trendingUp,
    color: 'warning',
    title: 'Growth Comes from Challenges',
    message: '💪 Embrace challenges—they’re the path to growth.'
  },
  {
    value: 'fourth',
    icon: sunny,
    color: 'tertiary',
    title: 'Choose Positivity Daily',
    message: '☀️ Positivity shapes your reality. Find the good every day.'
  },
  {
    value: 'fifth',
    icon: thumbsUp,
    color: 'medium',
    title: 'Progress Over Perfection',
    message: '👍 Small consistent steps lead to big results.'
  },
  {
    value: 'sixth',
    icon: flame,
    color: 'danger',
    title: 'Fuel Your Passion',
    message: '🔥 Passion gives your work energy and direction.'
  },
  {
    value: 'seventh',
    icon: star,
    color: 'warning',
    title: 'Shine Bright',
    message: '🌟 Don’t dim your light. You have something special to offer.'
  },
  {
    value: 'eighth',
    icon: happy,
    color: 'success',
    title: 'Happiness is Within',
    message: '😊 Find joy in the little things and moments of peace.'
  },
  {
    value: 'ninth',
    icon: bulb,
    color: 'primary',
    title: 'Think Creatively',
    message: '💡 Innovative thinking opens doors to new possibilities.'
  },
  {
    value: 'tenth',
    icon: leaf,
    color: 'success',
    title: 'Grow Steadily',
    message: '🌿 Every day is a chance to grow stronger and wiser.'
  },
  {
    value: 'eleventh',
    icon: rocket,
    color: 'danger',
    title: 'Launch Your Dreams',
    message: '🚀 Don’t wait. Take action on your dreams today.'
  },
  {
    value: 'twelfth',
    icon: time,
    color: 'medium',
    title: 'Value Your Time',
    message: '⏳ Time is precious. Spend it wisely on what matters most.'
  },
  {
    value: 'thirteenth',
    icon: flag,
    color: 'warning',
    title: 'Set Clear Goals',
    message: '🚩 A goal without a plan is just a wish. Stay focused.'
  },
  {
    value: 'fourteenth',
    icon: walk,
    color: 'tertiary',
    title: 'Keep Moving Forward',
    message: '🚶‍♂️ No matter how slow you go, you’re still moving forward.'
  },
  {
    value: 'fifteenth',
    icon: trophy,
    color: 'primary',
    title: 'Celebrate Wins',
    message: '🏆 Acknowledge your progress. Every win matters!'
  }
];

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ion-text-center">Daily Motivation</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonAccordionGroup expand="inset">
          {accordionData.map((item, index) => (
            <IonAccordion key={index} value={item.value}>
              <IonItem slot="header" color="light">
                <IonIcon icon={item.icon} slot="start" color={item.color} />
                <IonLabel className="ion-text-wrap">
                  <strong style={{ fontSize: '18px' }}>{item.title}</strong>
                </IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <p>{item.message}</p>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
