import firebase from '../../node_modules/firebase';
export default {
    methods: {
        logoutUser: function(){
            this.$emit('logout', null);
            firebase.auth().signOut().then(() => {
                window.location = '../'
            });
        }
    },
    mounted() {
    }
}