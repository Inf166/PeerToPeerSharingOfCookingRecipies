import firebase from '../../node_modules/firebase';
export default {
  methods: {
    getFirebaseUser: async function(){
      return new Promise(function (resolve, reject) {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            resolve(user);
          } else {
            reject(Error('User could not be found.'));
          }
        });
      });
    }
  }
}