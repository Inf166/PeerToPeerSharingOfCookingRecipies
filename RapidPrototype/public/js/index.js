 
  
  
  
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
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      window.alert("Error : " + errorMessage);
  
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
    });
  }

  function checkUserLoginState() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("A User was found");
        document.getElementById("currentuser").style.display = "block";
        document.getElementById("newuser").style.display = "none";
    
        var user = firebase.auth().currentUser;
    
        if(user != null){
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
      }
    });
  }
  