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
} from '@ionic/react';
import { supabase } from '../../utils/supabaseClient';
import bcrypt from 'bcryptjs';

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

const Register: React.FC = () => {
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

  const doRegister = async () => {
    setShowVerificationModal(false);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error('Account creation failed: ' + error.message);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const { error: insertError } = await supabase.from('users').insert([
        {
          username,
          user_email: email,
          user_firstname: firstName,
          user_lastname: lastName,
          user_password: hashedPassword,
        },
      ]);
      if (insertError) throw new Error('Failed to save user data: ' + insertError.message);

      setShowSuccessModal(true);
    } catch (err) {
      setAlertMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
      setShowAlert(true);
    }
  };

  const inputStyle = {
    margin: '8px auto',
    width: '40%',
    borderRadius: '30px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    color: 'black',
    padding: '12px 20px',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
        <style>
          {`@keyframes fadeSlideIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
          }`}
        </style>

        <h1 style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#222',
          animation: 'fadeSlideIn 0.8s ease forwards'
        }}>
          Create your account
        </h1>

        <IonInput
          style={inputStyle}
          label="Username"
          labelPlacement="floating"
          fill="outline"
          type="text"
          placeholder="Enter a unique username"
          value={username}
          onIonChange={e => setUsername(e.detail.value!)}
        />
        <IonInput
          style={inputStyle}
          label="First Name"
          labelPlacement="floating"
          fill="outline"
          type="text"
          placeholder="Input your name"
          value={firstName}
          onIonChange={e => setFirstName(e.detail.value!)}
        />
        <IonInput
          style={inputStyle}
          label="Last Name"
          labelPlacement="floating"
          fill="outline"
          type="text"
          placeholder="Input your surname"
          value={lastName}
          onIonChange={e => setLastName(e.detail.value!)}
        />
        <IonInput
          style={inputStyle}
          label="Email"
          labelPlacement="floating"
          fill="outline"
          type="email"
          placeholder="Any Email"
          value={email}
          onIonChange={e => setEmail(e.detail.value!)}
        />
        <IonInput
          style={inputStyle}
          label="Password"
          labelPlacement="floating"
          fill="outline"
          type="password"
          placeholder="Input password"
          value={password}
          onIonChange={e => setPassword(e.detail.value!)}
        >
          <IonInputPasswordToggle slot="end" />
        </IonInput>
        <IonInput
          style={inputStyle}
          label="Confirm Password"
          labelPlacement="floating"
          fill="outline"
          type="password"
          placeholder="Repeat password"
          value={confirmPassword}
          onIonChange={e => setConfirmPassword(e.detail.value!)}
        >
          <IonInputPasswordToggle slot="end" />
        </IonInput>

        <IonButton
          style={{
            margin: '2px auto',
            width: '30%',
            borderRadius: '30px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: '600',
            color: '#333',
            backgroundColor: '#fff',
            border: '2px solid #e0e0e0',
            transition: 'all 0.3s ease',
          }}
          onClick={handleOpenVerificationModal}
          expand="full"
          shape="round"
        >
          Register
        </IonButton>

        <IonButton
          routerLink="/it35-lab"
          fill="clear"
          shape="round"
          style={{
            margin: '2px auto',
            width: '20%',
            fontSize: '16px',
            color: '#74fe26',
            border: '3px solid #74fe26',
            borderRadius: '25px',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease',
          }}
        >
          Already have an account? Sign in
        </IonButton>

        {/* Verification Modal */}
        <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
          <IonContent className="ion-padding">
            <IonCard
              style={{
                marginTop: '20%',
                borderRadius: '20px',
                backgroundColor: '#fefefe',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
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

        {/* Success Modal */}
        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
          <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
            <div
              style={{
                marginTop: '30%',
                padding: '30px',
                borderRadius: '20px',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff',
              }}
            >
              <IonTitle style={{ fontSize: '22px', color: '#28a745' }}>
                ✅ Registration Successful!
              </IonTitle>
              <IonText>
                <p>Your account has been created successfully.</p>
                <p>Please check your email to verify your account.</p>
              </IonText>
              <IonButton
                routerLink="/it35-lab"
                routerDirection="back"
                color="success"
                style={{ marginTop: '20px', borderRadius: '20px' }}
              >
                Go to Login
              </IonButton>
            </div>
          </IonContent>
        </IonModal>

        {/* Alert */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Register;
