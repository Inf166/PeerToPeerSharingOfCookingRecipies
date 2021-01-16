<template>
  <div id="user_div" class="loggedin-div">
    <h3>Hier können Sie sich ausloggen:</h3>
    <p id="user_para">Noch bist du eingeloggt</p>
    <button onclick="logout()">Abmelden</button>
  </div>
</template>

<script>
export default {
  name: "Logout",
  mounted() {
  }
};
</script>

<style>
</style>