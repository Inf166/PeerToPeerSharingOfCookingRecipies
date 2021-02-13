import firebase from '../../node_modules/firebase';
export default {
    methods: {
        logoutUser: function(){
            this.$emit('logout');
            firebase.auth().signOut().then(() => {
                window.location = '../'
              });
        }
    },
    mounted() {
    }
}