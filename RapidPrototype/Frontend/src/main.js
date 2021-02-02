import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import LoadScript from 'vue-plugin-load-script';
import firebase from 'firebase';

Vue.config.productionTip = false;
Vue.use(LoadScript);

var firebaseConfig = {
  apiKey: "AIzaSyD-jtPg8E3TP5aWkChr1hsfh61HQNXSFac",
  authDomain: "meinkochbuch-790a3.firebaseapp.com",
  databaseURL: "https://meinkochbuch-790a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "meinkochbuch-790a3",
  storageBucket: "meinkochbuch-790a3.appspot.com",
  messagingSenderId: "1081676854603",
  appId: "1:1081676854603:web:26e84803770f6e532724ce",
  measurementId: "G-X40VFC7EN0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

