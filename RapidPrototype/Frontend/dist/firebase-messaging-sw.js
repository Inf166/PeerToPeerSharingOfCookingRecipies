// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('/__/firebase/8.2.1/firebase-app.js');
importScripts('/__/firebase/8.2.1/firebase-messaging.js');
importScripts('/__/firebase/init.js');

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    const notificationOptions = {
        icon: "img/icons/apple-touch-icon-60x60.png",
    };

    return self.registration.showNotification(
        notificationOptions,
    );
});