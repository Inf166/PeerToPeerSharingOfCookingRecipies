// import firebase from '../../node_modules/firebase';
export default {
    methods: {
        databaseOnValueHandler: async function(ref, uid, peerID, email, name){
            return new Promise(function (resolve, reject) {
                ref.on('value', updateDatabase, errUpdateDatabase);
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
                            if (users[k].uid == uid) {
                                userAlreadyExists = true;
                                myKey = k;
                                myUserObject = users[k];
                            }
                        }
                    }
                    if(userAlreadyExists) {
                        if(peerID == null){
                            ref.child(myKey).update({
                                "peerID": null
                            });
                        } else {
                            ref.child(myKey).update({
                                "peerID": peerID
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
                          name: name,
                          email: email,
                          uid: uid,
                          peerID: peerID
                        };
                        ref.push(userData);
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
        getFriendListInDatabase: async function(otherUsers, myKey) {
            return new Promise(function (resolve, reject) {
                if(otherUsers != null) {
                    var keys = Object.keys(otherUsers);
                    for (var i = 0; i < keys.length; i++){
                      var k = keys[i];
                      if (myKey == k) {
                        if(otherUsers[k].friends != undefined) {
                            resolve(otherUsers[k].friends);
                        } else {
                            resolve([]);
                        }
                      }
                    }
                }
                resolve([]);
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
            return new Promise(function (resolve, reject) {
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
                    resolve(friends);
                }).catch((err) => {reject(err);});
            });
        },
        removeFriend: function addFriend(databaseRef, myKey, friendKey) {
            return new Promise(function (resolve, reject) {
                var friends = {};
                var newFriends = {};
                var newIndex = 0;
                databaseRef.child(myKey).once('value').then((snapshot) => {
                    var friendList = (snapshot.val() && snapshot.val().friends) || 'Anonymous';
                    if(friendList == 'Anonymous') {
                        newFriends = {};
                    } else {
                        friends = friendList;
                        var friendKeys = Object.keys(friends);
                        console.log(friendKeys);
                        for (let index = 0; index < friendKeys.length; index++) {
                            if(friends[index] != friendKey){
                                console.log("add Friend to friendlist", friendKeys[index]);
                                newFriends[newIndex] = friends[index];
                                newIndex++;
                            } else {
                                console.log("Deleting this User", friendKeys[index])
                            }
                        }
                    }
                    console.log(newFriends);
                    databaseRef.child(myKey).update({
                        "friends": newFriends
                    });
                    resolve(newFriends);
                }).catch((err) => {reject(err);});
            });
        },
    },
    mounted() {
    }
}