import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
// import createPersistedState from "vuex-persistedstate";
// import createCache from 'vuex-cache';
// import createMutationsSharer from "vuex-shared-mutations";

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//     supportCircular: true,
//     storage: window.localStorage
//   });

export const store = new Vuex.Store({
    plugins: [
        // vuexLocal.plugin
        // createPersistedState,
        // createCache(),
        // createMutationsSharer({ predicate: ["mutation1", "mutation2"] })
    ],
    state: {
        myUser: null,
        myUserName: '',
        myUid: '',
        myEmail: '',

        myPeer: null,
        myPeerId: '',
        myConnection: null,
        receiverID: null,
        isOnline: false,

        myDatabase: null,
        users: null,
        myKey:'',
        myFriends: null,

        searchOutput: [],

        myRecipies: [],
        friendRecipies: [],
        myPreferencesCategories: [
            {name: 'test', value: '100'}
        ],
        myPreferencesIngredients: [
            {name: 'test', value: '100'}
        ],
        myPreferencesDifficultyLevel: [
            {name: 'test', value: '100'}
        ],
        tempRecipe: {}
    },
    getters,
    mutations,
    actions,
});