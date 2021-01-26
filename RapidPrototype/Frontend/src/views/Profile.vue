<template>
  <div class="profile">
    <h1 id="greetUser">Willkommen zu deinem Kochbuch</h1>
    <!-- <image id="userprofileimage"></image> -->
    <UserLoginState></UserLoginState>
  </div>
</template>

<script>
import UserLoginState from "@/components/UserLoginState.vue";
export default {
  name: "Profile",
  components: {
    UserLoginState
  },
mounted() {
  }
};
</script>

<style>
.currentuser {
  display: none;
}
.newuser {
  display: none;
}
</style>
