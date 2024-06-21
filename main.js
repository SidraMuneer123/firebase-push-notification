import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCR3d2RpDC7uhexzFuS2uT6aGaIXt0dojQ",
  authDomain: "fir-push-notification-6fd75.firebaseapp.com",
  projectId: "fir-push-notification-6fd75",
  storageBucket: "fir-push-notification-6fd75.appspot.com",
  messagingSenderId: "409968100521",
  appId: "1:409968100521:web:8620a669364a8c8fbe55b8",
  measurementId: "G-PLQBGPLQNR"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  return getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY' });
}).then((currentToken) => {
  if (currentToken) {
    console.log('FCM Registration Token:', currentToken);
    // Send this token to your server and save it
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  new Notification(notificationTitle, notificationOptions);
});
