import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true); 
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };
  
  return (
    <IonPage>
      <IonContent className='ion-padding'>
        <div style={{
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:'2%'
        }}>
          <IonAvatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '50%', 
              overflow: 'hidden' 
            }}
          >
            <IonIcon 
              icon={logoIonic}
              color='primary'
              style={{ 
                fontSize: '150px', color: '#33f508' 
              }} 
            />
          </IonAvatar>
          <h1 style={{
      marginTop:'20px',
      display: 'flex',
      width: '100%',
      alignItems: 'center', 
      justifyContent: 'center',
          }}>
            USER LOGIN</h1>
          <IonInput style={{
              marginTop:'15px',
              display: 'flex',
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}      
            fill="outline"
            type="Email"
            placeholder="Email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
          <IonInput style={{
              marginTop:'15px',
              display: 'flex',
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}      
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
          </IonInput>
        </div>
        <IonButton
  onClick={doLogin}
  shape="round"
  style={{
    display: 'block',
    margin: '20px auto', 
    width: '70%',        
    fontSize: '16px',
    fontWeight: '800',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    borderRadius: '100px',
  }}
>
  Login
</IonButton>

<IonButton
  routerLink="/it35-lab/Register"
  fill="clear"
  shape="round"
  style={{
    display: 'block',
    margin: '20px auto',
    width: '50%',
    fontSize: '15px',
    fontWeight: '500',
    fontFamily: 'Arial, sans-serif',
    color: '#007bff',
    border: '1.5px solid #007bff',
    borderRadius: '25px',
    backgroundColor: 'transparent',
    textTransform: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 6px rgba(0, 123, 255, 0.15)'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = '#007bff';
    e.currentTarget.style.color = '#fff';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#007bff';
  }}
>
  Don't have an account? Register here
</IonButton>


        {/* Reusable AlertBox Component */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* IonToast for success message */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;