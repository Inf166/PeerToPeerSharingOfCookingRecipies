import firebase from '../../node_modules/firebase';
export default {
    methods: {
        loginUser: function(){
            var userEmail = document.getElementById('email_field_login').value;
            var userPass = document.getElementById('password_field_login').value;

            firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
            .then((user) => {
                console.log(user);
                window.location = '../'
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                window.alert('Error : ' + errorMessage);
            });
        }
    },
    mounted() {
    }
}