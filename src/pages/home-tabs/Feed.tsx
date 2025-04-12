import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ItemReorderEventDetail
} from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';
import FeedContainer from '../../components/FeedContainer';

function Feed() {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    event.detail.complete();
  }

  const houseworkTasks = [
    { task: 'Wash the dishes - After every meal', color: '#FFB6C1' },
    { task: 'Sweep the floor - Daily in the morning', color: '#FFDEAD' },
    { task: 'Mop the floor - Every other day', color: '#98FB98' },
    { task: 'Do the laundry - Twice a week', color: '#FFD700' },
    { task: 'Fold clean clothes - Right after drying', color: '#F0E68C' }, 
    { task: 'Take out the trash - Every evening', color: '#D3D3D3' },
    { task: 'Clean the bathroom - Every Saturday', color: '#ADD8E6' },
    { task: 'Organize the pantry - Weekly', color: '#FF6347' },
    { task: 'Wipe kitchen counters - After cooking', color: '#8A2BE2' }, 
    { task: 'Tidy up living room - Before guests arrive', color: '#F0F8FF' },
    { task: 'Feed the pets - Morning and night', color: '#FF1493' },
    { task: 'Clean pet litter area - Daily', color: '#C71585' }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">🏠 Housework Task List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" style={{
        background: 'linear-gradient(135deg, #00c6ff, #0072ff)',  // Gradient background
        minHeight: '100vh',
        backgroundSize: 'cover',
        paddingTop: '20px',
        color: '#fff'
      }}>
        <IonList lines="none">
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            {houseworkTasks.map((taskObj, index) => (
              <IonItem
                key={index}
                className="ion-margin-bottom ion-rounded"
                style={{
                  backgroundColor: taskObj.color,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  padding: '10px',
                  color: '#333',
                  fontWeight: 'bold'
                }}
              >
                <IonLabel>{taskObj.task}</IonLabel>
                <IonReorder slot="end">
                  <IonIcon icon={checkmarkCircleOutline} color="success" size="large" />
                </IonReorder>
              </IonItem>
            ))}
          </IonReorderGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Feed;
