let userloggedin = false;

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../firebase-messaging-sw.js').then(registration => {
          console.log('SW registered: ', registration);
      }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
      });
  }
});

function login(){

  var userEmail = document.getElementById("email_field_login").value;
  var userPass = document.getElementById("password_field_login").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((user) => {
    window.location = "../"
    if (user != null) {
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  
      console.log("Hello " + email);
      userloggedin = true;
    }
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    window.alert("Error : " + errorMessage);
    userloggedin = false;
    // ...
  });

}

function signin(){

  var userEmail = document.getElementById("email_field_signin").value;
  // var userName = document.getElementById("name_field_signin").value;
  var userPass = document.getElementById("password_field_signin").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
  .then(() => {
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then((user) => {
      userloggedin = true;
      window.location = "../"
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      window.alert("Error : " + errorMessage);
      // ...
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    window.alert("Error : " + errorMessage);
    // ..
  });
// [END auth_signup_password]

}

function logout(){
  firebase.auth().signOut().then(() => {
    window.location = "../"
    userloggedin = false;
  });
}

window.onload = () => {
   console.log("Window Loaded");
   if(document.body.contains(document.getElementById("currentuser")) || document.body.contains(document.getElementById("newuser")))checkUserLoginState();
}

function checkUserLoginState() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("A User was found");
      document.getElementById("currentuser").style.display = "block";
      document.getElementById("newuser").style.display = "none";
      userloggedin = true;

      var user = firebase.auth().currentUser;
  
      if(user){
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  
        document.getElementById("greetUser").innerHTML = "Hallo " + email + "!";
        console.log("Hello and Welcome " + email);
        // document.getElementById("userprofileimage").setAttribute("src", photoUrl);
        // console.log("UserProfile " + photoUrl);
      }
  
    } else {
      // No user is signed in.
      console.log("No user is signed in");
      document.getElementById("currentuser").style.display = "none";
      document.getElementById("newuser").style.display = "block";
      userloggedin = false;
    }
  });

  var peer = new Peer(); 
  var conn = peer.connect('another-peers-id');
  // on open will be launch when you successfully connect to PeerServer
  conn.on('open', function(){
    // here you have conn.id
    console.log("sending Data");
    conn.send('hi!');
  });
  peer.on('connection', function(conn) {
    conn.on('data', function(data){
      // Will print 'hi!'
      console.log("receiving Data");
      console.log(data);
    });
  });
  // peer.on('open', function() {
  //     console.log('My peerjsPeer ID is: ', peerjsPeer.id);
  //   });
  
  // peer.on('connection', function(peerjsConnection) {
  //   peerjsConnection.on('open', function() {
  //     // Receive messages
  //     peerjsConnection.on('data', function(data) {
  //       console.log('Received', data);
  //     });
  //     // Send messages
  //     peerjsConnection.send('Hello from markers-page!');
  //   });
  // });
}
