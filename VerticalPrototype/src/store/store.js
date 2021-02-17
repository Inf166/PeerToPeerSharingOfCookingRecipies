import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
// import createCache from 'vuex-cache';
// import createMutationsSharer from "vuex-shared-mutations";

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [
        // createPersistedState(),
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
        tempRecipe: {}
    },
    getters,
    mutations,
    actions,
});