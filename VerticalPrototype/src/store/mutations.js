export default {
    // this.$store.commit('addRecipe', newRecipe) || this.$store.commit({type: 'addRecipe', newRecipe: newRecipe}) #SYNCHRON
    updateUser(state, user) {
        state.myUser = user;
        state.myUserName = user.displayName;
        state.myUid = user.uid;
        state.myEmail = user.email;
    },
    updatePeer(state, peer) {
        state.myPeer = peer;
    },
    updatePeerId(state, peerId) {
        state.myPeerId = peerId;
        ((peerId != undefined && peerId.length > 0) ? state.isOnline = true : state.isOnline = false);
    },
    updateDatabase(state, database) {
        state.myDatabase = database;
    },
    updateUsers(state, users) {
        state.users = users;
    },
    updateKey(state, key) {
        state.myKey = key;
    },
    updateFriends(state, friends) {
        state.myFriends = friends;
    },
    updateOutput(state, output) {
        state.searchOutput = output;
    },
    addRecipe(state, newRecipe) {
        state.myRecipies.push(newRecipe);
    },
    addTempRecipe(state, tempRecipe) {
        state.tempRecipe = (tempRecipe);
    },
    updateRecipe(state, editedRecipe) {
        var toBeUpdatedRecipe = state.myRecipies.find(recipe => {
            return recipe.name == editedRecipe.name;
        });
        toBeUpdatedRecipe = editedRecipe;
        state.myRecipies.push(toBeUpdatedRecipe);
    },
    addFriendRecipies(state, newRecipies) {
        state.friendRecipies = newRecipies;
    }
}