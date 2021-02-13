// import firebase from '../../node_modules/firebase';
export default {
    methods: {
        databaseOnValueHandler: async function(refToDatabase, myUid, myPeerId, myEmail, myName){
            return new Promise(function (resolve, reject) {
                refToDatabase.on('value', updateDatabase, errUpdateDatabase);
                function updateDatabase(data) {
                    var users = data.val();
                    var userAlreadyExists = false;
                    var keys;
                    var myKey;
                    var myUserObject;
                    if(users != null) {
                        keys = Object.keys(users);
                        for (var i = 0; i < keys.length; i++){
                            var k = keys[i];
                            if (users[k].uid == myUid) {
                                userAlreadyExists = true;
                                myKey = k;
                                myUserObject = users[k];
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
                        if(users[myKey]["friends"] != undefined ){      // TODO
                            var myFriends = [];
                            Object.keys(myUserObject["friends"]).forEach((key) => {
                              myFriends.push(myUserObject["friends"][key]);
                            });
                          }
                    } else {
                        var userData = {
                          name: myName,
                          email: myEmail,
                          uid: myUid,
                          peerID: myPeerId
                        };
                        refToDatabase.push(userData);
                      }
                    resolve(users);
                };
                function errUpdateDatabase(err) {
                    reject(Error(err));
                };
            });
        },
        getUserKeyInDatabase: async function(otherUsers, myUserUid) {
            return new Promise(function (resolve, reject) {
                if(otherUsers != null) {
                    var keys = Object.keys(otherUsers);
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
        getFriendListInDatabase: async function(databaseRef, myKey) {
            return new Promise(function (resolve, reject) {
                databaseRef.child(myKey).once('value').then((snapshot) => {
                    var friendList = (snapshot.val() && snapshot.val().friends) || 'Anonymous';
                    resolve(friendList);
                  });
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
                    var user =[];
                    user = otherUsers[k];
                    user.key = k;
                    output.push(user);
                  }
                }
              }
            return output;
        },
        addFriend: function addFriend(databaseRef, myKey, friendKey) {
            var friends;
            databaseRef.child(myKey).once('value').then((snapshot) => {
                var friendList = (snapshot.val() && snapshot.val().friends) || 'Anonymous';
                if(friendList == 'Anonymous') {
                    friends = {0: friendKey};
                } else {
                    friends = friendList;
                    var friendKeys = Object.keys(friendList);
                    friends[friendKeys.length++] = friendKey;
                }
                databaseRef.child(myKey).update({
                    "friends": friends
                  });
              });
            return friends;
        },
    },
    mounted() {
    }
}