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
 import { supabase } from '../../utils/supabaseClient';

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
        {/* Background Gradient and SVG */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #f8bbd0, #fce4ec)',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: 'auto',
              zIndex: 1,
            }}
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L40,202.7C80,181,160,139,240,122.7C320,107,400,117,480,144C560,171,640,213,720,229.3C800,245,880,235,960,202.7C1040,171,1120,117,1200,96C1280,75,1360,85,1400,90.7L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Login Card */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'white',
            padding: '30px 20px',
            borderRadius: '20px',
            margin: 'auto',
            marginTop: '10vh',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          {/* Emoji Smiley */}
          <div
            style={{
               margin: '0 auto 20px',
               width: '80px',
               height: '80px',
               backgroundColor: '#ffecb3',
               borderRadius: '50%',
               fontSize: '40px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
            }}
          >
            😊
          </div>

          <h2 style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '25px', color: '#333' }}>
            Welcome Back
          </h2>
  
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            style={{ marginBottom: '15px' }}
          />

          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            type="password"
            placeholder="Enter your password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            style={{ marginBottom: '20px' }}
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

        {/* Alert & Toast */}
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