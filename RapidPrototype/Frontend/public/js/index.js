// Service Worker Registration
window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("../firebase-messaging-sw.js").then(registration => {
          console.log("SW registered: ", registration);
      }).catch(registrationError => {
          console.log("SW registration failed: ", registrationError);
      });
  }
});

// Firebase Authentifitcation
let userloggedin = false;

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
}

window.onload = () => {
   console.log("Window Loaded");
   if(document.body.contains(document.getElementById("currentuser")) || document.body.contains(document.getElementById("newuser")))checkUserLoginState();
}

// Peer to Peer Communication

var lastPeerId = null;
var peer = null; // Own peer object
var peerId = null;
var conn = null;
var isSender = (document.getElementById("otherpeerid").value.length != 0) ? true : false;

function initialize() {
  // Create own peer object with connection to shared PeerJS server
  peer = new Peer(null, {
      debug: 2
  });

  peer.on("open", function (id) {
      // Workaround for peer.reconnect deleting previous id
      if (peer.id === null) {
          console.log("Received null id from peer open");
          peer.id = lastPeerId;
      } else {
          lastPeerId = peer.id;
      }

      console.log("ID: " + peer.id);
      document.getElementById("mypeerid").innerHTML = "ID: " + peer.id;
      console.log("Awaiting connection...");
  });
  peer.on("connection", function (c) {
      if(isSender){
        // Disallow incoming connections
        c.on('open', function() {
          c.send("Sender does not accept incoming connections");
          setTimeout(function() { c.close(); }, 500);
        });
      } else {
        // Allow only a single connection
        if (conn && conn.open) {
          c.on("open", function() {
              c.send("Already connected to another client");
              setTimeout(function() { c.close(); }, 500);
          });
          return;
        }

        conn = c;
        console.log("Connected to: " + conn.peer);
        console.log("Connected");
        ready();
      }      
  });
  peer.on("disconnected", function () {
      console.log("Connection lost. Please reconnect");

      // Workaround for peer.reconnect deleting previous id
      peer.id = lastPeerId;
      peer._lastServerId = lastPeerId;
      peer.reconnect();
  });
  peer.on("close", function() {
      conn = null;
      console.log("Connection destroyed");
  });
  peer.on("error", function (err) {
      console.log(err);
      alert("" + err);
  });
  
  console.log("Value of textfield: " + document.getElementById("otherpeerid").value.length);
  if(document.getElementById("otherpeerid").value.length != 0){
    join();
  }
};

function ready() {
  conn.on('data', function (data) {
    console.log("Data recieved");
    addMessage(data);
  });
  conn.on('close', function () {
      document.getElementById("mypeerid").innerHTML.innerHTML = "Connection reset<br>Awaiting connection...";
      conn = null;
  });
};

function join() {
  console.log("I did join() - nice!" + document.getElementById("otherpeerid").value);
  // Close old connection
  if (conn) {
      conn.close();
      document.getElementById("mypeerid").innerHTML = "Connection reseted";
      conn = null;
      console.log('Connection destroyed');
  }
  conn = peer.connect(document.getElementById("otherpeerid").value, {
      reliable: true
  });
  conn.on('open', function () {
      console.log("Connected to: " + conn.peer);
      conn.send("Hey " + document.getElementById("otherpeerid").value);
  });
  conn.on('data', function (data) {
    console.log("Data recieved");
    addMessage(data);
  });
  conn.on('close', function () {
    document.getElementById("mypeerid").innerHTML = "Connection closed";
  });
};

function addMessage(msg) {
  var now = new Date();
  var h = now.getHours();
  var m = addZero(now.getMinutes());
  var s = addZero(now.getSeconds());

  if (h > 12)
      h -= 12;
  else if (h === 0)
      h = 12;

  function addZero(t) {
      if (t < 10)
          t = "0" + t;
      return t;
  };

  console.log(h + ":" + m + ":" + s + " " + msg);
};