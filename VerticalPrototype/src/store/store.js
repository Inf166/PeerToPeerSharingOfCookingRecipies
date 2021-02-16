import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
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
        tempRecipe: {}
    },
    getters,
    mutations,
    actions,
});