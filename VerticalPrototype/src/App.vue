<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg></i>
        <span class="nav-label">Entdecken</span>
      </router-link>
      <router-link to="/savedrecipies">
        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/></svg></i>
        <span class="nav-label">Gespeicherte Rezepte</span>
      </router-link>
      <router-link to="/newrecipe">
        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i>
        <span class="nav-label">Neues Rezept</span>
      </router-link>
      <router-link to="/profile">
        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg></i>
        <span class="nav-label">Mein Profil</span>
      </router-link>
    </div>
    <div class="content">
      <router-view
      @updateFriendlist="onUpdateFriendlist"
      @searchFriends="onSearchFriends"
      @changeNetworkStatus="onchangeNetworkStatus"
      ></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import initCloudMessaging from './mixins/initCloudMessaging';
import getFirebaseUser from './mixins/getFirebaseUser';
import peer from './mixins/peer';
import fbDatabase from './mixins/fbDatabase';
import fbDatabaseMaintain from './mixins/fbDatabaseMaintain';
import Peer from "../node_modules/peerjs";

export default {
  name: "App",
  components: {
    Footer
  },
  data: function() {
    return {
      chatText: null,
    }
  },
  mixins: [initCloudMessaging,getFirebaseUser, peer, fbDatabase, fbDatabaseMaintain],
  watch: {
  },
  computed: {
    myUser() {
      return this.$store.getters.myUser;
    },
    myUserName() {
      return this.$store.getters.myUserName;
    },
    myUid() {
      return this.$store.getters.myUid;
    },
    myEmail() {
      return this.$store.getters.myEmail;
    },

    myPeer() {
      return this.$store.getters.myPeer;
    },
    myPeerId() {
      return this.$store.getters.myPeerId;
    },
    myConnection() {
      return this.$store.getters.myConnection;
    },
    receiverID() {
      return this.$store.getters.receiverID;
    },
    isOnline() {
      return this.$store.getters.isOnline;
    },

    myDatabase() {
      return this.$store.getters.myDatabase;
    },
    users() {
      return this.$store.getters.users;
    },
    myKey() {
      return this.$store.getters.myKey;
    },
    myFriends() {
      return this.$store.getters.myFriends;
    },

    searchOutput() {
      return this.$store.getters.searchOutput;
    }
  },
  methods: {
    updateUserObject: function updateUserObject() {
      console.log("### Update User Object");
      getFirebaseUser.methods.getFirebaseUser().then((user) => {
        console.log(user);
        this.$store.dispatch('updateUser', user)
        this.updateMyPeer();
      }).catch((error)=>{
        console.log("ERROR: ", error);
      });
    },
    initializePeer: async function initializePeer(store) {
      return new Promise(function (resolve, reject) {
        var myPeer = new Peer(null, {
            debug: 0,
            config: {
                iceServers: [
                {
                    urls: 'stun:stun.stunprotocol.org'
                },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: 'epws2020cobanmai',
                    username: 'joel_maximilian.mai@smail.th-koeln.de'
                },
            ]}    
        });
        myPeer.on('open', function (peerID) {
            console.log("> Peer: on open", peerID);
            resolve(myPeer);
        });
        myPeer.on('connection', function (connection) {
            console.log("> Peer: on connection", connection);
            connection.on('open', function() {
                console.log("> Peer: Connection: on open ", connection.peer);
                connection.send("GET/RECIPIES");
            });
            connection.on('data', function(data) {
                console.log("> Peer: Connection: on data ", data);
                switch (data) {
                  case "GET/RECIPIES":
                      store.getters.myRecipies.then((myRecipies) => {
                        console.log(myRecipies);
                      });
                      // if(this.$store.getters.myRecipies.length > 0) {
                      //   this.$store.getters.myRecipies.forEach(recipe => {
                      //     connection.send(recipe);
                      //   });
                      // }
                      break;
                  default:
                    connection.send("No Answer found to that command.")
                    break;
                }   
            });
            connection.on('close', function() {
                console.log("> Peer: Connection: on close");
            });
        });
        myPeer.on('disconnected', function () {
            console.log("> Peer: on disconnected");

        });
        myPeer.on('close', function () {
            console.log("> Peer: on close");

        });
        myPeer.on('error', function (error) {
            reject(error);
            console.log("> Peer: on error", error);
        });
    });
    },
    updateMyPeer: function updateMyPeer() {
      console.log("### Update Peer");
      this.initializePeer(this.store).then((peer) => {
        this.$store.dispatch('updatePeer', peer)
        this.updateMyPeerId();
      }).catch((error)=>{
        console.log("ERROR: ", error);
      });
    },
    updateMyPeerId: function updateMyPeerId() {
      console.log("### Update Peer ID");
      peer.methods.getPeerId(this.myPeer).then((peerId) => {
        this.$store.dispatch('updatePeerId', peerId);
        this.updateDatabase();
      }).catch((error)=>{
        console.log("ERROR: ", error);
      });
    },
    closeConnections: function closeConnections() {
      console.log("### Close Connection");
      this.$store.dispatch('updatePeerId', "");
    },
    updateDatabase: function updateDatabase() {
      console.log("### Update Database");
      const database = fbDatabase.methods.initDatabase();
      this.$store.dispatch('updateDatabase', database)
      this.updateUsers();
    },
    updateUsers: function updateUsers() {
      console.log("### Update Users");
      fbDatabaseMaintain.methods.databaseOnValueHandler(this.myDatabase, this.myUid, this.myPeerId, this.myEmail, this.myUserName).then((userlist) => {
        console.log(userlist);
        this.$store.dispatch('updateUsers', userlist)
        this.updateMyKey();
      }).catch((error)=>{
        console.log("ERROR: ", error);
      });
    },
    updateMyKey: function updateMyKey() {
      console.log("### Update Key");
      fbDatabaseMaintain.methods.getUserKeyInDatabase(this.users, this.myUid).then((key) => {
        this.$store.dispatch('updateKey', key)
        this.updateMyFriends();
      }).catch((error)=>{
        console.log("ERROR: ", error);
      });
    },
    updateMyFriends: function updateMyFriends() {
      console.log("### Update Friendlist");
      fbDatabaseMaintain.methods.getFriendListInDatabase(this.users, this.myKey).then((friends) => {
        this.$store.dispatch('updateFriends', friends);
        this.updateOutput();
      }).catch((error)=>{
        console.log("ERROR: ", error);
      });
    },
    updateOutput: function updateOutput() {
      console.log("### Update Output");
      const output = fbDatabaseMaintain.methods.search(this.myUid, this.myKey, this.users);
      this.$store.dispatch('updateOutput', output);
    },
    onUpdateFriendlist: function(value) {
      console.log("> Event noticed: ", value);
      this.updateUsers();
    },
    onSearchFriends: function(value){
      console.log("> You searched for: ", value);
      this.updateUsers();
    },
    onchangeNetworkStatus: function() {
      // this.closeConnections(this.myPeer, this.myConnection);
    }
  },
  mounted() {
    console.log("### Mounted");
    this.updateUserObject();
  }
};
</script>

<style>
:root {
  --main-bg-color: #407961;
  --main-white-color: #f5f7f4;
  --main-black-color: #161811;
  --main-grey-color: #6a6b6b;
  --highlight-green: #6ebf94;
  --highlight-orange: #ff8133;
  --highlight-orange-2: #ff6933;
  --highlight-green-2: #183b29;
}

body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  background: var(--main-white-color);
  overflow-x: hidden;
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
}

h3 {
  margin-top: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: var(--highlight-green);
  text-decoration: none;
}

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-black-color);
}

#nav {
  width: 100%;
  background: var(--main-bg-color);
  display: flex;
  padding: 1rem;
  position: fixed;
  top: 0;
  z-index: 9999;
}

#nav a {
  font-weight: bold;
  color: var(--main-white-color);
  fill: var(--main-white-color);
  padding: 1rem;
  text-decoration: none;
  display: -webkit-flex; /* Safari */  
  display: flex;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

#nav a.router-link-exact-active {
  color: var(--highlight-green);
  fill: var(--highlight-green);
}
i {
  display: -webkit-flex; /* Safari */  
  display: flex;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
svg {
  width: auto;
  height: 1rem; 
}
.page-nav-link {
  display: -webkit-flex; /* Safari */  
  display: flex;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  color: var(--main-bg-color);
  fill: var(--main-bg-color);
  margin-bottom: 1rem;
}
.content {
  position: relative;
  top: 100px;
  margin: auto;
  width: 1200px;
}
.hero-slider{
  /* width: 100%;
  height: 40vh; */
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
}
input {
  font-family: 'Nunito', sans-serif;
  display: block;
  border: 1px solid var(--main-black-color);
  border-radius: 5px;
  background: var(--main-white-color);
  padding: 15px;
  outline: none;
  width: calc(100% - 30px);
  margin-bottom: 2rem;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  font-size: 16px;
}
input:focus:focus-within {
  border: 1px solid var(--highlight-orange);
}
select {
  font-family: 'Nunito', sans-serif;
  border: 1px solid var(--highlight-orange);
  border-radius: 5px;
  background: var(--main-white-color);
  padding: 15px;
  outline: none;
  width: 100%;
  margin-bottom: 2rem;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  font-size: 16px;
}
textarea {
  font-family: 'Nunito', sans-serif;
  border: 1px solid var(--main-black-color);
  border-radius: 5px;
  background: var(--main-white-color);
  padding: 15px;
  outline: none;
  width: calc(100% - 2rem);
  margin-bottom: 2rem;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  font-size: 16px;
}
button {  
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 0.5rem;
  display: -webkit-flex; /* Safari */  
  display: flex;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-weight: 700;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  background: var(--highlight-orange);
  color: var(--main-white-color);
  fill: var(--main-white-color);
  border: 1px solid var(--highlight-orange);
}
button:hover {
  background: var(--main-white-color);
  color: var(--highlight-orange);
  fill: var(--highlight-orange);
  border: 1px solid var(--highlight-orange);
  cursor: pointer;
}
.other-button {
  background-color: var(--main-white-color);
  border-color:var(--main-black-color);
  color: var(--main-bg-color);
  fill: var(--main-bg-color);
}
.other-button:hover {
  background-color: var(--highlight-green);
  border-color: var(--main-bg-color);
  color: var(--main-white-color);
  fill: var(--main-white-color);
}
.primary-button {
  background-color: var(--main-bg-color);
  border-color: var(--highlight-green-2);
}
.primary-button:hover{
  color: var(--main-bg-color);
  fill: var(--main-bg-color);
  border-color: var(--main-bg-color);
}
.secondary-button {
  background-color: var(--highlight-orange);
  border-color: var(--highlight-orange-2);
}
.secondary-button:hover {
  color: var(--highlight-orange);
  fill: var(--highlight-orange);
  border-color: var(--highlight-orange);
}
.search-button {
  background-color: var(--highlight-orange);
  border-color: gray;
}
.search-button:hover{
  color: var(--highlight-orange);
  fill: var(--highlight-orange);
  border-color: var(--main-bg-color);
}
.alt-ingredient-btn {
  padding: 0;
}
.info-label {
  background-color: var(--main-white-color);
  border-color:var(--main-black-color);
  color: var(--main-bg-color);
  fill: var(--main-bg-color);
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 15px;
  display: -webkit-flex; /* Safari */  
  display: flex;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: fit-content;
  font-weight: 700;
}
.attention-label {
  background-color: var(--main-white-color);
  color: var(--highlight-orange);
  fill: var(--highlight-orange);
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 15px;
  display: -webkit-flex; /* Safari */  
  display: flex;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: fit-content;
  font-weight: 700;
}
i {
  margin: 4px;
}
.search-container form {
  display: grid;
  grid-template-columns: 1fr calc(8rem + 30px);
  width: 100%;
  
}
#search {
  grid-column: 1 / 2;
  margin: auto;
  padding: 15px;
  width: calc(100% - 30px);
  max-height: 4rem;
  border-color: var(--main-black-color);
}
#search:focus:focus-within {
  border: 1px solid var(--highlight-orange);
}
.search-button {
  grid-column: 2 / 3;
  width: 8rem;
  color: var(--main-white-color);
  border-color: var(--higlight-orange);
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  max-height: 4rem;
}
.search-button:hover {
  border-color: var(--higlight-orange);
}
.recipe-title {
  color: var(--main-bg-color);
}
.recipe-teaser {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr 300px 1fr;
}
.recipe-teaser-img {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-radius: 5px;
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
}
.recipe-teaser-img img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.recipe-teaser-desc {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  margin: 2rem;
}
.recipe-teaser-desc a{
  text-decoration: none;
  color: var(--main-bg-color);
}
.recipe-teaser-buttons {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}
.recipe-actions-buttons {
  display: flex;
  display: -webkit-flex; /* Safari */  
}
.recipe-labels {
  display: flex;
  display: -webkit-flex; /* Safari */  
}
.ingredient-list tr td{
  padding-top: 1rem;
}
.ingredient-list tr > :first-child {
  font-weight: 700;
}
.instructions-list tr td{
  padding-top: 1rem;
}
.instructions-list tr > :first-child {
  font-weight: 700;
}
@media screen and (max-width: 1300px) {
  .content {
    margin: auto;
    width: 800px;
  }
    .recipe-teaser-buttons {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: flex;
    flex-flow: nowrap;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 900px) {
  .content {
    margin: auto;
    width: 700px;
  }
  .recipe-teaser {
    grid-template-rows: 1fr 300px 100px;
  }
  button {
    padding: 0.5rem;
    max-height: 3rem;
  }
}
@media screen and (max-width: 720px) {
  .content {
    position: relative;
    margin: auto;
    margin-bottom: 200px;
    width: 600px;
    top: 0px;
    font-size: 1rem;
  }
  .nav-label {
    display: none;
  }
  #nav {
    position: fixed;
    top: auto;
    bottom: 0;
    z-index: 9999;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0;
  }
  #nav a {
    width: calc(100% / 4 - 2rem);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  #nav a.router-link-exact-active {
    color: var(--main-bg-color);
    fill: var(--main-bg-color);
    background-color: var(--main-white-color);
  }
  #nav a  {
    padding: 1rem;
  }
  #nav a i svg {
    height: 1.5rem; 
  }
  svg {
    height: 1rem; 
  }
  .content {
    max-width: 100vw;
    overflow: hidden;
  }
  form {
    padding: 0.5rem;
  }
  h3 {
    padding: 0.5rem;
  }
  .search-container{
    margin: 1rem 0.5rem;
    border: 1px solid var(--main-black-color);
    border-radius: 5px;
  }
  .search-container:focus-within {
    border: 1px solid var(--highlight-orange);
  }
  #search {
    border: none;
  }
  #search:hover:focus {
    border: none;
  }
  .search-button {
    margin: 0;
    margin-right: 1rem;
    justify-self: right;
  }
  .recipe-teaser {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 300px 1fr fit-content;
  }
  .recipe-teaser-img {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    border-radius: 5px;
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
  }
  .recipe-teaser-img img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .recipe-teaser-desc {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin: 8px;
  }
  .recipe-teaser-desc h3 {
    margin: 8px;
  }
  .recipe-teaser-desc a{
    text-decoration: none;
    color: var(--main-bg-color);
  }
  .recipe-teaser-buttons {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }
}
</style>
