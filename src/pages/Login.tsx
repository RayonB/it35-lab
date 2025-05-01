import {
  IonAlert,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose,
}) => {
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
      <IonContent fullscreen className="ion-padding" scrollY={false}>
        {/* Soft Gradient Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
            zIndex: 0,
          }}
        />

        {/* Decorative Bottom SVG Wave */}
        <svg
          viewBox="0 0 1440 320"
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            zIndex: 1,
          }}
        >
          <path
            fill="#ffffff"
            d="M0,224L40,202.7C80,181,160,139,240,122.7C320,107,400,117,480,144C560,171,640,213,720,229.3C800,245,880,235,960,202.7C1040,171,1120,117,1200,96C1280,75,1360,85,1400,90.7L1440,96L1440,320L0,320Z"
          ></path>
        </svg>

        {/* Login Card */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '10vh',
            padding: '30px 24px',
            borderRadius: '24px',
            backgroundColor: '#fff',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
          }}
        >
          {/* Avatar Circle */}
          <div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 20px',
              borderRadius: '50%',
              backgroundColor: '#fff3cd',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '38px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            😊
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#333', marginBottom: '25px' }}>
            Welcome Back!
          </h2>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            style={{ marginBottom: '16px' }}
          />

          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            type="password"
            placeholder="Enter your password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            style={{ marginBottom: '24px' }}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton expand="block" shape="round" onClick={doLogin} style={{ marginBottom: '15px' }}>
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/Register"
            fill="clear"
            size="small"
            shape="round"
            style={{
              textTransform: 'none',
              color: '#3880ff',
              fontWeight: 500,
            }}
          >
            Don’t have an account?&nbsp;<strong>Register here</strong>
          </IonButton>
        </div>

        {/* Notifications */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
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
