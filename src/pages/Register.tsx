import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonTitle,
    IonToolbar,
    IonModal,
    IonText,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    
} from '@ionic/react';
import { supabase } from '../../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

   const handleOpenVerificationModal = () => {
     if (!email.endsWith("@nbsc.edu.ph") && !email.endsWith("@gmail.com")) {
        alert("any account can register.");
        return;
    }
     if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
        setShowVerificationModal(true);
};

   const doRegister = async () => {
        setShowVerificationModal(false);
   const {data,error} = await supabase.auth.signUp({
            email,
            password,
        });
    if (error){
            alert("Account creation failed:" + error.message);
            return;
        }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const {error: insertError} = await supabase.from('users').insert([{
            username,
            user_email: email,
            user_password:hashedPassword,
        }]);
   if(insertError){
            alert("Failed to save user data:" + insertError.message);
            return;
        }     
        setShowSuccessModal(true);
    };

    return (
    <IonPage>
        <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
            <h1 style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#222',
                marginTop: '20px'
            }}>Create your account</h1>

            <IonInput
                style={{
                    margin: '20px auto',
                    width: '50%',
                    borderRadius: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'black',
                }}
                label="Username"
                labelPlacement="floating"
                fill="outline"
                type="text"
                placeholder="Enter a unique username"
                value={username}
                onIonChange={e => setUsername(e.detail.value!)}
            />

            <IonInput
                style={{
                    margin: '30px auto',
                    width: '50%',
                    borderRadius: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'black',
                }}
                label="Email"
                labelPlacement="floating"
                fill="outline"
                type="email"
                placeholder="@nbsc.edu.ph or @gmail.com"
                value={email}
                onIonChange={e => setEmail(e.detail.value!)}
            />

            <IonInput
                style={{
                    margin: '30px auto',
                    width: '50%',
                    borderRadius: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'black',
                }}
                label="Password"
                labelPlacement="floating"
                fill="outline"
                type="password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
            >
                <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>

            <IonInput
                style={{
                    margin: '30px auto',
                    width: '50%',
                    borderRadius: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'black',
                }}
                label="Repeat Password"
                labelPlacement="floating"
                fill="outline"
                type="password"
                value={confirmPassword}
                onIonChange={e => setConfirmPassword(e.detail.value!)}
            >
                <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>

            <IonButton
                style={{
                    margin: '30px auto',
                    width: '40%',
                    borderRadius: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: 'black',
                    border: '5px solid #dcc116',
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
                    width: '25%',
                    fontSize: '16px',
                    color: '#74fe26',
                    border: '3px solid #74fe26',
                    borderRadius: '25px',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#007bff';
                    e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#007bff';
                }}
            >
                Already have an account? Sign in
            </IonButton>

            {/* Verification Modal */}
            <IonModal
                isOpen={showVerificationModal}
                onDidDismiss={() => setShowVerificationModal(false)}
            >
                <IonToolbar className="ion-text-center" color="primary">
                    <IonTitle>Confirm Registration</IonTitle>
                </IonToolbar>

                <IonContent className="ion-padding">
                    <IonCard
                        style={{
                            margin: '30px auto',
                            width: '50%',
                            borderRadius: '30px',
                        }}
                        className="ion-padding"
                    >
                        <IonCardHeader>
                            <IonCardTitle>
                                <h3>User Registration Details</h3>
                            </IonCardTitle>
                            <IonCardSubtitle>Username</IonCardSubtitle>
                            <IonCardTitle>{username}</IonCardTitle>
                            <IonCardSubtitle>Email</IonCardSubtitle>
                            <IonCardTitle>{email}</IonCardTitle>
                        </IonCardHeader>

                        <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>
                            Cancel
                        </IonButton>

                        <IonButton
                            className="ion-text-white"
                            color="primary"
                            onClick={doRegister}
                        >
                            Confirm
                        </IonButton>
                    </IonCard>
                </IonContent>
            </IonModal>

            {/* Success Modal */}
            <IonModal
                isOpen={showSuccessModal}
                onDidDismiss={() => setShowSuccessModal(false)}
                color="primary"
            >
                <IonContent
                    className="ion-padding"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        textAlign: 'center',
                        marginTop: '35%',
                        animation: 'fadeIn 1s ease-in-out',
                    }}
                >
                    <IonTitle style={{ marginTop: '35%' }}>
                        Registration Successful 🎉
                    </IonTitle>
                    <IonText>
                        <p>Your account has been created successfully.</p>
                        <p>Please check your email address.</p>
                    </IonText>
                    <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
                        Go to Login
                    </IonButton>
                </IonContent>
            </IonModal>
        </IonContent>
    </IonPage>
    );
};

export default Register;
