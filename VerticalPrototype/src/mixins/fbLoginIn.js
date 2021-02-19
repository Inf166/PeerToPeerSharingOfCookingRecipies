import firebase from '../../node_modules/firebase';
export default {
    methods: {
        loginUser: function(){
            var userEmail = document.getElementById('email_field_login').value;
            var userPass = document.getElementById('password_field_login').value;

            firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
            .then((user) => {
                console.log("> Firebase User: ", user);
                window.location = '../'
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Error Code: ",errorCode);
                window.alert('Error : ' + errorMessage);
            });
        }
    },
    mounted() {
    }
}