// Service Worker Registration
window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../firebase-messaging-sw.js').then(registration => {
          console.log('SW registered: ', registration);
      }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
      });
  }
});