<template>
    <div class="addfriend">
        <div class="search-container">
            <form>
                <input type="text" id="search" v-model="searchInput" required placeholder="Suche..">
                <button type="button" class="search-button" @click="updateOutput"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg></i> Suchen</button>
            </form>
        </div>
        <table id="friends-output">
            <tr><th>Name</th><th>PeerID</th><th>Verbinden</th></tr>
            <tr v-for="user in searchOutput" :key="user.name">
                <th scope="row">{{ user.name  }}</th>  
                <td>{{ user.peerID }}</td> 
                <td><button type="button" class="primary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg></i> Freund hinzuf&uuml;gen</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import fbDatabase from '../mixins/fbDatabase';
import fbDatabaseMaintain from '../mixins/fbDatabaseMaintain';
export default {
  name: "AddFriend",
  data: function() {
    return {
      myDatabase: null,
      otherUsers: null,
      myKey:'',
      searchInput: '',
      searchOutput: []
    }
  },
  props: ['userUid','userPeerId','userEmail', 'userName'],
  mixins: [fbDatabase],
    methods: {
        updataDatabaseRef: function updataDatabaseRef() {
            this.myDatabase = fbDatabase.methods.initDatabase();
        },
        updataOtherUsers: function updataOtherUsers() {
            fbDatabaseMaintain.methods.databaseOnValueHandler(this.myDatabase, this.userUid, this.userPeerId, this.userEmail, this.userName).then((userlist) => {
                this.otherUsers = userlist;
            }).catch((error)=>{
                console.log(error);
            });
        },
        updateMyKey: function updateMyKey() {
            fbDatabaseMaintain.methods.getUserKeyInDatabase(this.otherUsers, this.userUid).then((key) => {
                this.myKey = key;
            }).catch((error)=>{
                console.log(error);
            });
        },
        updateOutput: function updateOutput() {
            console.log(this.searchInput);
            this.searchOutput = fbDatabaseMaintain.methods.search(this.userUid, this.myKey, this.otherUsers);
            console.log("Search Output:", this.searchOutput);
        }
    },
    watch: {
    myDatabase(newValue, oldValue) {
      console.log("oldValue for myDatabase");
      console.log(oldValue);
      console.log("newValue for myDatabase");
      console.log(newValue);
      this.updataOtherUsers();
    },
    otherUsers(newValue, oldValue) {
      console.log("oldValue for otherUsers");
      console.log(oldValue);
      console.log("newValue for otherUsers");
      console.log(newValue);
      this.updateMyKey();
    },
    myKey(newValue, oldValue) {
      console.log("oldValue for myKey");
      console.log(oldValue);
      console.log("newValue for myKey");
      console.log(newValue);
    }
  },
  mounted() {
      this.updataDatabaseRef();
  }
};
</script>
<style>
    #friends-output{
        width: 100%;
        text-align: center;
        justify-items: center;
        align-items: center;
    }
</style>