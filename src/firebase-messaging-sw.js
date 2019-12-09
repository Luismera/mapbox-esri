// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyCTPuxKi63y8w9GT5fHBlrJWNOvXqKQPO8",
  authDomain: "test-project-fea98.firebaseapp.com",
  databaseURL: "https://test-project-fea98.firebaseio.com",
  projectId: "test-project-fea98",
  storageBucket: "test-project-fea98.appspot.com",
  messagingSenderId: "352314395680",
  appId: "1:352314395680:web:6423977f7f8d4ae7"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

//messaging.usePublicVapidKey('BLHqiRAzsBD8Huwp2PiA4F1aa5dGm_qMS_CZ4aDBUl6hhAF6PM0WVcL36nA90QueR3YHXtoxVD38RFHvQ-iLQww');