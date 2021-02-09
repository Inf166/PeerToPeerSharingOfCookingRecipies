// import firebase from '../../node_modules/firebase';
export default {
    methods: {
        databaseOnValueHandler: async function(refToDatabase, myUid, myPeerId, myEmail, myName){
            return new Promise(function (resolve, reject) {
                refToDatabase.on('value', updateDatabase, errUpdateDatabase);
                function updateDatabase(data) {
                    var users = data.val();
                    console.log(users);
                    var userAlreadyExists = false;
                    var keys;
                    var myKey;
                    if(users != null) {
                        keys = Object.keys(users);
                        for (var i = 0; i < keys.length; i++){
                            var k = keys[i];
                            if (users[k].uid == myUid) {
                                userAlreadyExists = true;
                                myKey = k;
                            }
                        }
                    }
                    if(userAlreadyExists) {
                        if(myPeerId == null){
                            refToDatabase.child(myKey).update({
                                "peerID": null
                            });
                        } else {
                            refToDatabase.child(myKey).update({
                                "peerID": myPeerId
                            });
                        }
                    } else {
                        var userData = {
                          name: myName,
                          email: myEmail,
                          uid: myUid,
                          peerID: myPeerId
                        };
                        console.log("New Dataset: ",userData);
                        refToDatabase.push(userData);
                      }
                    resolve(users);
                };
                function errUpdateDatabase(err) {
                    console.log('######## DATABASE UPDATE ERROR ########');
                    console.log(err);
                    reject(Error(err));
                };
            });
        },
        getUserKeyInDatabase: async function(otherUsers, myUserUid) {
            return new Promise(function (resolve, reject) {
                if(otherUsers != null) {
                    var keys = Object.keys(otherUsers);
                    console.log(keys);
                    for (var i = 0; i < keys.length; i++){
                      var k = keys[i];
                      if (otherUsers[k].uid == myUserUid) {
                        resolve(k);
                      }
                    }
                }
                reject(Error('User could not be found, so no Key.'));
            });
        },
        search: function search(userUid, myKey, otherUsers) {
            var output = [];
            if (otherUsers != null) {
                var keys = Object.keys(otherUsers);
                for (var i = 0; i < keys.length; i++){
                  var k = keys[i];
                  if (otherUsers[k].uid != userUid) {
                    output.push(otherUsers[k]);
                  }
                }
              }
            return output;
        }
    },
    mounted() {
    }
}