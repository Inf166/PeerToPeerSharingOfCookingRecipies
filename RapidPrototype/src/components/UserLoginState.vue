<template>
  <div class="UserLoginState">
    <div id="newuser">
      <router-link to="/login" id="login-button">
        <i class="fas fa-sign-in-alt"></i>
        <span class="">Anmelden</span>
      </router-link>
      oder
      <router-link to="/signin" id="signin-button">
        <i class="fas fa-sign-in-alt"></i>
        <span class="">Registrieren</span>
      </router-link>
    </div>
    <div id="currentuser">
      <router-link to="/logout" id="logout-button">
        <i class="fas fa-sign-out-alt"></i>
        <span class="">Abmelden</span>
      </router-link>
    </div> 
  </div>
</template>

<script>
export default {
    name: "UserLoginState",
    mounted() {
    }
}
</script>

<style>
    .UserLoginState {
        width: fit-content
    }
    .newuser {
        float:right;
        display: none;
    }
    .currentuser {
        float:right;
        display: none;
    }
</style>