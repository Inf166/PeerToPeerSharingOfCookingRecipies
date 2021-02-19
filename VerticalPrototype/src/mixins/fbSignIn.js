import firebase from '../../node_modules/firebase';
export default {
    methods: {
        signinUser: function(){
            var userName = document.getElementById('name_field_signin').value;
            var userEmail = document.getElementById('email_field_signin').value;
            var userPass = document.getElementById('password_field_signin').value;

            firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
            .then(() => {
                    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
                        .then(() => {
                            var user = firebase.auth().currentUser;
                            user.updateProfile({
                                displayName: userName
                              }).then(function() {
                                console.log("> Firebase User: ", user);
                                window.location = '../'
                              }).catch(function(error) {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                console.log("Error Code: ",errorCode);
                                window.alert('Error : ', errorMessage);
                              });
                        }).catch(function(error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log("Error Code: ",errorCode);
                        window.alert('Error : ' + errorMessage);
                        });
            })
            .catch((error) => {
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