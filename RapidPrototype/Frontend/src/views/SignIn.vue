<template>
  <div id="signin_div" class="signin-div">
    <h3>Hier können Sie sich registrieren:</h3>
    <!-- <input type="text" placeholder="First and Last Name..." id="name_field_signin" /> -->
    <input type="email" placeholder="Email..." id="email_field_signin" />
    <input type="password" placeholder="Password..." id="password_field_signin" />
    <p>Mit dem Registrieren Ihres Accounts, geben Sie Ihr Einverständnis mit unseren <a href="https://meinkochbuch-790a3.web.app/nutzungsbedingungen" target="_blank" >Nutzungsbedingungen</a> und unserer <a href="https://meinkochbuch-790a3.web.app/datenschutz" target="_blank" >Datenschutz Verordnung</a>.</p>
    <button onclick="signin()">Jetzt registrieren</button>
  </div>
</template>

<script>
export default {
  name: "Signin",
  mounted() {
  }
};
</script>

<style>
</style>