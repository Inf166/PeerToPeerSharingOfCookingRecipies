<template>
  <div id="user_div" class="loggedin-div">
    <h3>Hier können Sie sich ausloggen:</h3>
    <p id="user_para">Noch bist du eingeloggt</p>
    <button v-on:click="logoutUser()">Abmelden</button>
  </div>
</template>

<script>
import fbLogOut from '../mixins/fbLogOut';
export default {  
  name: "Logout",
  mixins: [fbLogOut]
};
</script>

<style>
</style>