<template>
  <div id="login_div" class="main-div">
    <h3>Hier können Sie sich einloggen:</h3>
    <input type="email" placeholder="Email..." id="email_field_login" />
    <input type="password" placeholder="Password..." id="password_field_login" />
    <button v-on:click="loginUser()">Anmelden</button>
  </div>
</template>

<script>
import fbLoginIn from '../mixins/fbLoginIn';
export default {
  name: "Login",
  mixins: [fbLoginIn]
};
</script>

<style>
</style>