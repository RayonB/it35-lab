import React from 'react';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const Search: React.FC = () => {
  const cards = [
    {
      title: "True Friends Stay",
      img: "https://imgs.search.brave.com/CnIKw1bcAmc5Ctis8hckP3vKL0iEWsWkjdPosuZgymo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmZmLXBpY3R1/cmVzLXRkNzd1Yzdn/eWRkbW0zaGwuanBn",
      content: "Real friendship isn't about being inseparable, it's about being separated and nothing changes."
    },
    {
      title: "Laughter Together",
      img: "https://imgs.search.brave.com/9UqFLbfmBRaKSEi0p_NFDqYd-YCRJqWL24X3QbeQTiw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE0L2Mx/L2UxLzE0YzFlMWRm/NTM4NTUzMWExZDFj/NDJkMDYwNjRmYTk5/LmpwZw",
      content: "A good friend brings laughter even in the toughest times."
    },
    {
      title: "Through Ups and Downs",
      img: "https://imgs.search.brave.com/vG_aPj0JMShwBRCv4PHAA6zCDpUGQIUOH-R-rKbvv8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFtaWx5ZnJpZW5k/cG9lbXMuY29tL2lt/YWdlcy9jb2xsZWN0/aW9ucy9xdW90ZXMt/Zm9yLWZyaWVuZHMu/anBn",
      content: "Friendship means standing by each other, no matter what life throws your way."
    },
    {
      title: "Growing Together",
      img: "https://imgs.search.brave.com/Apt9F9oWbEoWZuiWi6Aljt6m6bj35kRKiwSnoChhOL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdHJvbmctZnJp/ZW5kc2hpcC1oYXBw/eS1wYXN0aW1lLW91/dHNpZGUtdW5yZWNv/Z25pemFibGUtZ3Jv/dXAteW91bmctcGVv/cGxlLWNyZWF0aXZl/LWxlaXN1cmUtdGlt/ZV8yMDE4MzYtMTUw/Mi5qcGc_c2VtdD1h/aXNfaHlicmlk",
      content: "Good friends help each other grow into the best versions of themselves."
    },
    {
      title: "Shared Silences",
      img: "https://imgs.search.brave.com/DScykabnxicgNGiGJuY3DQ0ArKCfPeDD0uRTpYukrSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lm1vbWp1bmN0aW9u/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wMS9Hb29k/LWZyaWVuZHMtYXJl/LWxpa2Utc3RhcnMt/bG9uZy1kaXN0YW5j/ZS1mcmllbmRzaGlw/LXF1b3Rlcy5qcGcu/d2VicA",
      content: "Sometimes, just sitting together in silence speaks volumes."
    },
    {
      title: "Unspoken Support",
      img: "https://imgs.search.brave.com/XoHZZ5hteekVZzLKOZQlL-o0BnMNFlSn6tNVFyDBnrQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ncm91cC1wZW9w/bGUtc2hvd2luZy1o/ZWFydC1zaGFwZV85/NzYyMDQtNy5qcGc_/c2VtdD1haXNfaHli/cmlk",
      content: "Friends know when something's wrong even when you say you're fine."
    },
    {
      title: "Making Memories",
      img: "https://imgs.search.brave.com/SEZX8YY7jhmW4T7iui08SVsSajwr0zU0Y0gZof9z2gc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYXlh/YW5kYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDEv/cGV4ZWxzLWVsaW5h/LWZhaXJ5dGFsZS00/ODM0MTQyLmpwZw",
      content: "The best memories are made with the people who make you feel at home."
    },
    {
      title: "Always a Call Away",
      img: "https://imgs.search.brave.com/frgza677KLbKAKa0jO1DojC9CYWhiAIFkgE_JM1EkLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNkLzUw/LzQ4LzNkNTA0OGM1/MzhiM2ExNzVmNjll/MDA5YjQ5OGJiNTkx/LmpwZw",
      content: "Distance means so little when someone means so much."
    },
    {
      title: "Friendship is a Gift",
      img: "https://imgs.search.brave.com/FOZohvpRw8Uqml4yOFMei8gC5EuOUCpIAQcxm67uhDI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/Ni8xNC8xNS8zNC9m/cmllbmRzaGlwLTQy/NzM4NjVfNjQwLmpw/Zw",
      content: "The most beautiful discovery true friends make is that they can grow separately without growing apart."
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Friendship</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ 
        background: 'linear-gradient(to right,rgb(185, 222, 84),rgb(83, 214, 122))', 
        minHeight: '100vh' 
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          padding: '16px'
        }}>
          {cards.map((card, index) => (
            <IonCard 
              key={index}
              style={{
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                background: 'rgb(179, 180, 131)',
                boxShadow: '0 10px 25px rgb(185, 88, 88)',
                transition: 'transform 0.3s ease',
                overflow: 'hidden'
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img 
                alt={card.title} 
                src={card.img} 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover' 
                }} 
              />
              <IonCardHeader>
                <IonCardTitle style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {card.title}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ color: '#555', fontSize: '0.95rem' }}>
                {card.content}
              </IonCardContent>
            </IonCard>
          ))}
        </div>

        <div style={{ padding: '24px', fontSize: '1rem', color: '#444' }}>
          <p>
            Friendship is one of life’s greatest treasures. It brings warmth in cold moments, laughter during hardships, and support in times of need. Friends make us feel understood, seen, and valued even in our imperfections. They remind us that we are never truly alone, and their presence can brighten even the darkest of days.
          </p>
          <p>
            True friendship doesn't demand constant attention — it's built on trust, respect, and genuine care. Whether it’s through shared adventures, heartfelt conversations, or silent understanding, friendships create lifelong bonds that shape who we are. It’s these simple yet powerful connections that enrich our journey through life.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search; 