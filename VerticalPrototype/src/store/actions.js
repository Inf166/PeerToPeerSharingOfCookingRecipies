export default {
    //this.$store.dispatch('addRecipe', newRecipe) || this.$store.dispatch({type: 'addRecipe', newRecipe: newRecipe}) #ASYNCHRON
    updateUser(context, payload) {
        context.commit('updateUser', payload);
    },
    updatePeer(context, payload) {
        context.commit('updatePeer', payload);
    },
    updatePeerId(context, payload) {
        context.commit('updatePeerId', payload);
    },
    updateDatabase(context, payload) {
        context.commit('updateDatabase', payload);
    },
    updateUsers(context, payload) {
        context.commit('updateUsers', payload);
    },
    updateKey(context, payload) {
        context.commit('updateKey', payload);
    },
    updateFriends(context, payload) {
        context.commit('updateFriends', payload);
    },
    updateOutput(context, payload) {
        context.commit('updateOutput', payload);
    },
    addPreferencesCategories(context, payload) {
        context.commit('addPreferencesCategories', payload);
    },
    addPreferencesIngredients(context, payload) {
        context.commit('addPreferencesIngredients', payload);
    },
    addPreferencesDifficultyLevel(context, payload) {
        context.commit('addPreferencesDifficultyLevel', payload);
    },
    addRecipe(context, payload) {    // statt context.commit ginge auch context => context - und dann context.context.commit(....)
        context.commit('addRecipe', payload);
    },
    addTempRecipe(context, payload) {    
        context.commit('addTempRecipe', payload);
    },

    addFriendRecipies(context, payload) {
        context.commit('addFriendRecipies', payload);
    }
} 