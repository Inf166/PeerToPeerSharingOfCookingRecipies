// Service Worker Registration
window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../firebase-messaging-sw.js').then(registration => {
          console.log('SW registered: ', registration);
      }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
      });
  }
});

// Firebase Authentifitcation
let userloggedin = false;

function login(){

  var userEmail = document.getElementById('email_field_login').value;
  var userPass = document.getElementById('password_field_login').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((user) => {
    window.location = '../'
    if (user != null) {
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  
      console.log('Hello ' + email);
      userloggedin = true;
    }
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    window.alert('Error : ' + errorMessage);
    userloggedin = false;
    // ...
  });

}

function signin(){

  var userEmail = document.getElementById('email_field_signin').value;
  // var userName = document.getElementById('name_field_signin').value;
  var userPass = document.getElementById('password_field_signin').value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
  .then(() => {
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then((user) => {
      userloggedin = true;
      window.location = '../'
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      window.alert('Error : ' + errorMessage);
      // ...
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    window.alert('Error : ' + errorMessage);
    // ..
  });
// [END auth_signup_password]

}

function logout(){
  firebase.auth().signOut().then(() => {
    window.location = '../'
    userloggedin = false;
  });
}

function checkUserLoginState() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('A User was found');
      document.getElementById('currentuser').style.display = 'block';
      document.getElementById('newuser').style.display = 'none';
      userloggedin = true;

      var user = firebase.auth().currentUser;
  
      if(user){
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  
        document.getElementById('greetUser').innerHTML = 'Hallo ' + email + '!';
        console.log('Hello and Welcome ' + email);
        // document.getElementById('userprofileimage').setAttribute('src', photoUrl);
        // console.log('UserProfile ' + photoUrl);
      }
  
    } else {
      // No user is signed in.
      console.log('No user is signed in');
      document.getElementById('currentuser').style.display = 'none';
      document.getElementById('newuser').style.display = 'block';
      userloggedin = false;
    }
  });
}

window.onload = () => {
   console.log('Window Loaded');
   if(document.body.contains(document.getElementById('currentuser')) || document.body.contains(document.getElementById('newuser')))checkUserLoginState();
}

// Peer to Peer Communication
var lastPeerId = null;
var peer = null;
var peerId = null;
var conn = null;
var isSender = false;
var myId = document.getElementById("my-id");
var recvIdInput = document.getElementById("receiver-id");
var sendMessageBox = document.getElementById("sendMessageBox");
var connectButton = document.getElementById("connect-button");
var sendButton = document.getElementById("sendButton");
var initializeButton = document.getElementById("initializeButton");

/**
 * Create the Peer object for our end of the connection.
 *
 * Sets up callbacks that handle any events related to our
 * peer object.
 */
  function initialize() {
    myId = document.getElementById("my-id");
    recvIdInput = document.getElementById("receiver-id");
    sendMessageBox = document.getElementById("sendMessageBox");
    connectButton = document.getElementById("connect-button");
    sendButton = document.getElementById("sendButton");
    initializeButton = document.getElementById("initializeButton");
    isSender = (recvIdInput.value.length != 0) ? true : false;
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(null, {
        debug: 3,
        config: {
            iceServers: [
            {
                urls: 'stun:stun.stunprotocol.org'
            },
            {
                urls: 'turn:numb.viagenie.ca',
                credential: 'epws2020cobanmai',
                username: 'joel_maximilian.mai@smail.th-koeln.de'
            },
        ]}    
    });

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        console.log('ID: ' + peer.id);
        document.getElementById("my-id").value = "ID: " + peer.id;
        status.innerHTML = "Awaiting connection...";
    });
    peer.on('connection', function (c) {
        console.log('Connecting...');
        if(isSender){
            // Disallow incoming connections
            c.on('open', function() {
            c.send('Sender does not accept incoming connections');
            setTimeout(function() { c.close(); }, 500);
            });
        } else {
            console.log('Pending Connection...');
            // Allow only a single connection
            if (conn && conn.open) {
            c.on('open', function() {
                c.send('Already connected to another client');
                setTimeout(function() { c.close(); }, 500);
            });
            return;
            }

            conn = c;
            console.log('Connected to: ' + conn.peer);
            console.log('Connected');
            ready();
        }     
    });
    peer.on('disconnected', function () {
        console.log('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });
    peer.on('close', function() {
        conn = null;
        console.log('Connection destroyed');
    });
    peer.on('error', function (err) {
        console.log(err);
        alert('' + err);
    });
};

/**
  * Triggered once a connection has been achieved.
  * Defines callbacks to handle incoming data and connection events.
  */
function ready() {
    conn.on('data', function (data) {
        console.log("Data recieved: " + data);
    });
    conn.on('close', function () {
        status.innerHTML = "Connection reset<br>Awaiting connection...";
        conn = null;
    });
}
/**
  * Create the connection between the two Peers.
  *
  * Sets up callbacks that handle any events related to the
  * connection and data received on it.
  */
  function join() {
    // Close old connection
    if (conn) {
        conn.close();
    }

    // Create connection to destination peer specified in the input field
    conn = peer.connect(recvIdInput.value, {
        reliable: true
    });

    conn.on('open', function () {
        console.log("Connected to: " + conn.peer);
    });
    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        addMessage(data);
    });
    conn.on('close', function () {
        status.innerHTML = "Connection closed";
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

    console.log(h + ':' + m + ':' + s + ' ' + msg);
}
function sendText() {
  if (conn && conn.open) {
    var msg = sendMessageBox.value;
    sendMessageBox.value = "";
    conn.send(msg);
    console.log("Sent: " + msg)
    addMessage(msg);
  } else {
    console.log('Connection is closed');
  }
}
// // Listen for enter in message box
// sendMessageBox.addEventListener('keypress', function (e) {
//     var event = e || window.event;
//     var char = event.which || event.keyCode;
//     if (char == '13')
//         sendButton.click();
// });
// // Send message
// sendButton.addEventListener('click', function () {
//     if (conn && conn.open) {
//         var msg = sendMessageBox.value;
//         sendMessageBox.value = "";
//         conn.send(msg);
//         console.log("Sent: " + msg)
//         addMessage(msg);
//     } else {
//         console.log('Connection is closed');
//     }
// });
// // Start peer connection on click
// connectButton.addEventListener('click', join);
// initializeButton.addEventListener('click', initialize);