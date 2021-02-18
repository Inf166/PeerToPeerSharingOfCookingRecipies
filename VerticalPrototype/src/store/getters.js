export default {
    // computed -> this.$store.getters.allRecipies || import { mapGetters } from 'vuex' - computed -> ...mapGetters({all: 'allRecipies', new: 'newRecipies'})
    myUser(state) {
        return state.myUser;
    },
    myUserName(state) {
        return state.myUserName;
    },
    myUid(state) {
        return state.myUid;
    },
    myEmail(state) {
        return state.myEmail;
    },
    myPeer(state) {
        return state.myPeer;
    },
    myPeerId(state) {
        return state.myPeerId;
    },
    myConnection(state) {
        return state.myConnection;
    },
    receiverID(state) {
        return state.receiverID;
    },
    isOnline(state) {
        return state.isOnline;
    },
    myDatabase(state) {
        return state.myDatabase;
    },
    users(state) {
        return state.users;
    },
    myKey(state) {
        return state.myKey;
    },
    myFriends(state) {
        return state.myFriends;
    },
    searchOutput(state) {
        return state.searchOutput;
    },
    myPreferencesDifficultyLevel(state) {
        return state.myPreferencesDifficultyLevel;
    },
    myPreferencesCategories(state) {
        return state.myPreferencesCategories;
    },
    myPreferencesIngredients(state) {
        return state.myPreferencesIngredients;
    },
    myRecipies(state) {
        return state.myRecipies;
    },
    newRecipies(state) {
        return state.myRecipies.filter(recipe => {
            return recipe.isNew;
        });
    },
    tempRecipe(state) {
        return state.tempRecipe;
    },
    friendRecipies(state) {
        return state.friendRecipies;
    },
    prefrencedRecipies(state) {
        var myPrefsDiff = state.myPreferencesDifficultyLevel;
        var myPrefCates = state.myPreferencesCategories;
        var myPrefIngrs = state.myPreferencesIngredients;
        var unCheckedRecipies = state.friendRecipies;
        
        return ;
    },
}