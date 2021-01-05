<template>
  <div id="login_div" class="main-div">
    <h3>Hier können Sie sich einloggen:</h3>
    <input type="email" placeholder="Email..." id="email_field_login" />
    <input type="password" placeholder="Password..." id="password_field_login" />
    <button onclick="login()">Anmelden</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
  }
};
</script>

<style>
</style>