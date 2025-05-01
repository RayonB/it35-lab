import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonTitle,
  IonModal,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAlert,
  IonAvatar,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

// AlertBox Component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => (
  <IonAlert
    isOpen={isOpen}
    onDidDismiss={onClose}
    header="Notification"
    message={message}
    buttons={['OK']}
  />
);

// Register Component
const Register: React.FC = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Open Verification Modal
  const handleOpenVerificationModal = () => {
    if (!email.endsWith('@nbsc.edu.ph') && !email.endsWith('@gmail.com')) {
      alert('Any account can register.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    setShowVerificationModal(true);
  };

  // Register function
  const doRegister = async () => {
    setShowVerificationModal(false);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error('Account creation failed: ' + error.message);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const { error: insertError } = await supabase.from('users').insert([{
        username,
        user_email: email,
        user_firstname: firstName,
        user_lastname: lastName,
        user_password: hashedPassword,
      }]);
      if (insertError) throw new Error('Failed to save user data: ' + insertError.message);

      setShowSuccessModal(true);
    } catch (err) {
      setAlertMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
      setShowAlert(true);
    }
  };

  // Input styling
  const inputStyle = {
    margin: '10px auto',
    width: '100%',
    borderRadius: '25px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    color: '#333',
    padding: '12px 20px',
    backgroundColor: '#fff',
  };

  // Style for the input containers
  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 0 }}>
        <style>
          {`
            @keyframes fadeSlideIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            @keyframes floatingCircles {
              0% { transform: scale(0.7); }
              50% { transform: scale(1); }
              100% { transform: scale(0.7); }
            }

            .bg-circles {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }

            .bg-circles::before, .bg-circles::after {
              content: '';
              position: absolute;
              border-radius: 50%;
              opacity: 0.4;
              animation: floatingCircles 4s ease-in-out infinite;
            }

            .bg-circles::before {
              width: 400px;
              height: 400px;
              background: radial-gradient(circle, #f8bbd0, rgb(112, 59, 76));
              top: -150px;
              left: -150px;
              animation-delay: 0s;
            }

            .bg-circles::after {
              width: 500px;
              height: 500px;
              background: radial-gradient(circle, rgb(58, 111, 58), rgb(80, 215, 63));
              bottom: -200px;
              right: -200px;
              animation-delay: 2s;
            }

            .background {
              background: linear-gradient(135deg, rgba(56, 173, 169, 0.9), rgba(0, 122, 255, 0.9));
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              filter: blur(10px);
              animation: fadeSlideIn 1.5s ease-in-out forwards;
            }

            .form-container {
              position: relative;
              z-index: 1;
              background-color: rgba(255, 255, 255, 0.9);
              padding: 30px;
              border-radius: 30px;
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
          `}
        </style>

        {/* Background effects */}
        <div className="background"></div>
        <div className="bg-circles"></div>

        <div className="form-container">
          <IonAvatar style={{ margin: '0 auto 15px', width: '90px', height: '90px', border: '3px solid #38ada9', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', backgroundColor: '#fff', overflow: 'hidden' }}>
            <img src="https://imgs.search.brave.com/pxnzAhmuJM_a7-izXftOxly9xG-j_HkGLrn5JGcqXBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYmlnLXNtaWxl/LWVtb3RpY29uXzEz/MDM4NzAtMTIuanBn/P3NlbXQ9YWlzX2h5/YnJpZA" alt="Smiling Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </IonAvatar>

          <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#333' }}>Create your account</h1>

          {/* Grouped inputs into two columns */}
          <div style={inputContainerStyle}>
            <IonInput style={{...inputStyle, flex: 1}} label="Username" labelPlacement="floating" fill="outline" type="text" placeholder="Enter a unique username" value={username} onIonChange={e => setUsername(e.detail.value!)} />
            <IonInput style={{...inputStyle, flex: 1}} label="First Name" labelPlacement="floating" fill="outline" type="text" placeholder="Input your name" value={firstName} onIonChange={e => setFirstName(e.detail.value!)} />
          </div>

          <div style={inputContainerStyle}>
            <IonInput style={{...inputStyle, flex: 1}} label="Last Name" labelPlacement="floating" fill="outline" type="text" placeholder="Input your surname" value={lastName} onIonChange={e => setLastName(e.detail.value!)} />
            <IonInput style={{...inputStyle, flex: 1}} label="Email" labelPlacement="floating" fill="outline" type="email" placeholder="Any Email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </div>

          <div style={inputContainerStyle}>
            <IonInput style={{...inputStyle, flex: 1}} label="Password" labelPlacement="floating" fill="outline" type="password" placeholder="Input password" value={password} onIonChange={e => setPassword(e.detail.value!)} >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
            <IonInput style={{...inputStyle, flex: 1}} label="Repeat Password" labelPlacement="floating" fill="outline" type="password" placeholder="Repeat password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
          </div>

          <IonButton style={{ margin: '10px auto', width: '100%', borderRadius: '25px', fontWeight: '600', color: '#fff', backgroundColor: '#38ada9' }} onClick={handleOpenVerificationModal} expand="full" shape="round">
            Register
          </IonButton>

          <IonButton routerLink="/it35-lab" fill="clear" shape="round" style={{ marginTop: '10px', fontSize: '15px', color: '#38ada9' }}>
            Already have an account? Sign in
          </IonButton>
        </div>

        {/* Modals */}
        <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
          <IonContent className="ion-padding">
            <IonCard style={{ marginTop: '20%', borderRadius: '20px' }}>
              <IonCardHeader>
                <IonCardTitle>User Registration Details</IonCardTitle>
                <hr />
                <IonCardSubtitle>Username</IonCardSubtitle>
                <IonCardTitle>{username}</IonCardTitle>
                <IonCardSubtitle>Email</IonCardSubtitle>
                <IonCardTitle>{email}</IonCardTitle>
                <IonCardSubtitle>Name</IonCardSubtitle>
                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent />
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <IonButton fill="outline" color="medium" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                <IonButton color="success" onClick={doRegister}>Confirm</IonButton>
              </div>
            </IonCard>
          </IonContent>
        </IonModal>

        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
          <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '30%', padding: '30px', borderRadius: '20px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
              <IonTitle style={{ fontSize: '22px', color: '#28a745' }}>✅ Registration Successful!</IonTitle>
              <IonText>
                <p>Your account has been created successfully.</p>
                <p>Please check your email to verify your account.</p>
              </IonText>
              <IonButton routerLink="/it35-lab" routerDirection="back" color="success" style={{ marginTop: '20px', borderRadius: '20px' }}>
                Go to Login
              </IonButton>
            </div>
          </IonContent>
        </IonModal>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Register;
