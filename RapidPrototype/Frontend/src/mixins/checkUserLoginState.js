// import firebase from '../../node_modules/firebase';
export default {
    methods: {
        checkUserLoginState: function(){
            // firebase.auth().onAuthStateChanged(function(user) {
            //     if (user) {
            //       console.log(user);
            //       document.getElementById('currentuser').style.display = 'block';
            //       document.getElementById('newuser').style.display = 'none';
            //       if(user){
            //         var name = user.displayName;
            //         var vorname = name.split(' ');
            //         document.getElementById('greetUser').innerHTML = 'Hallo ' + vorname[0] + '!';
            //       }
              
            //     } else {
            //       console.log('No user is signed in');
            //       document.getElementById('currentuser').style.display = 'none';
            //       document.getElementById('newuser').style.display = 'block';
            //     }
            // });
        }
    },
    beforeMount() {
        this.checkUserLoginState();
    }
}