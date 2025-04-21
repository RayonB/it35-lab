import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import FeedContainer from '../../components/FeedContainer';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={styles.container}>
          <div style={styles.bubblesContainer}>
            {[...Array(10)].map((_, i) => (
              <span key={i} style={{ ...styles.bubble, ...getBubbleStyle(i + 1) }}></span>
            ))}
          </div>
          <div style={styles.text}>
            Feed
          </div>
        </div>
        <FeedContainer />
      </IonContent>
    </IonPage>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative',
    height: '100%',
    background: 'linear-gradient(135deg, rgb(247, 222, 139) 0%, #fda085 100%)',
    overflow: 'hidden',
  },
  bubblesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  bubble: {
    position: 'absolute',
    display: 'block',
    width: '40px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    bottom: '-100px',
    animation: 'floatUp 20s linear infinite',
  },
  text: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
  }
};

const getBubbleStyle = (i: number): React.CSSProperties => ({
  left: `${i * 10}%`,
  animationDelay: `${i}s`,
});

// Add global keyframes using a <style> tag
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-110vh) scale(1.2);
    opacity: 0;
  }
}`;
document.head.appendChild(styleSheet);

export default Feed;
