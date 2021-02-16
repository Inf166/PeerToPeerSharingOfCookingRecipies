<template>
  <div class="explore">
    <div class="peer-control">
      <ul>
        <button type="button" class="secondary-button" @click="changeNetworkStatus()"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"/></svg></i> {{isConnected}}</button>
        <button type="button" class="primary-button" @click="refreshPeers()"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"/></svg></i> <span class="nav-label">Aktualisieren</span></button>    
      </ul>
    </div>
    <div class="search-container">
      <form>
        <input type="text" id="search" name="search" required placeholder="Suche..">
        <button type="button" class="search-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg></i> Suchen</button>
      </form>
    </div>
    <div class="previews">
      <h3>Meine Rezepte</h3>
      <div class="recipe-teaser" v-for="(recipe, index) in myRecipies" :key="index">
        <div class="recipe-teaser-img">
          <img src="https://via.placeholder.com/1920x1080.png" alt="Rezept2" >
        </div>
        <div class="recipe-teaser-desc">
          <h3>{{recipe.title}}</h3>
          <p>{{recipe.description}}</p>
          <p><strong>Geschrieben von: </strong><a href="#" target="_blank" v-for="(author, index) in recipe.author" :key="index">{{author}}</a></p>
          <p><strong>Erstellt am: </strong>{{recipe.datePublished}}</p>
        </div>
        <div class="recipe-teaser-buttons">
          <button type="button" class="primary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"/></svg></i>Jetzt kochen</button>
          <button type="button" class="other-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/></svg></i>Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg></i>Verwerfen</button>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
import peer from '../mixins/peer';

export default {
  computed: {
    isOnline() {
      return this.$store.getters.isOnline;
    },
    isConnected() {
      if(this.isOnline) {
        return "Online";
      } else {
        return "Offline";
      }
    },
    myPeer() {
      return this.$store.getters.myPeer;
    },
    users() {
      return this.$store.getters.users;
    },
    myFriends() {
      return this.$store.getters.myFriends;
    },
    myRecipies() {
      return this.$store.state.myRecipies;
    }
  },
  methods: {
    refreshPeers() {
      for(var friend in this.myFriends) {
         this.myConnection = peer.methods.join(this.myPeer, this.users[this.myFriends[friend]].peerID);
       }
    },
    changeNetworkStatus() {
      this.$emit('changeNetworkStatus');
    }
  }
}
</script>
<style>
  .peer-control {
    padding: 0.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;  
    z-index: 8888;
    background-color: var(--main-white-color);
  }
  .peer-control ul {
    list-style: none;
    display: flex;
    float: right;
    margin-right: 4rem;
  }
  @media screen and (max-width: 720px) {
    .peer-control {
      bottom: auto;
      top:0;
      padding: 0;
    }
    .peer-control ul {
      margin: 0;
      margin-bottom: 1rem;
    }
    .search-container {
      margin-top: 5rem;
    }
  }
</style>