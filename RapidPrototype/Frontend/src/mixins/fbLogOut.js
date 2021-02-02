import firebase from '../../node_modules/firebase';
export default {
    methods: {
        logoutUser: function(){
            firebase.auth().signOut().then(() => {
                window.location = '../'
              });
        }
    },
    mounted() {
    }
}