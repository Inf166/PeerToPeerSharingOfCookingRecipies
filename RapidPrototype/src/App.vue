<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <i class="fas fa-home"></i>
        <span class="nav-label">Entdecken</span>
      </router-link>
      <router-link to="/savedrecipies">
        <i class="far fa-bookmark"></i>
        <span class="nav-label">Gespeicherte Rezepte</span>
      </router-link>
      <router-link to="/newrecipe">
        <i class="fas fa-plus"></i>
        <span class="nav-label">Neues Rezept</span>
      </router-link>
      <router-link to="/profile" onclick="checkUserLoginState()">
        <i class="fas fa-user-alt"></i>
        <span class="nav-label">Mein Profil</span>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
:root {
  --main-bg-color: #407961;
  --main-white-color: #f5f7f4;
  --main-black-color: #161811;
  --highlight-green: #6ebf94;
  --highlight-orange: #ff8133;
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
  position: sticky;
}

#nav a {
  font-weight: bold;
  color: var(--main-white-color);
  padding: 1rem;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: var(--highlight-green);
}

.content {
  margin: auto;
  width: 1200px;
}
input {
  font-family: 'Nunito', sans-serif;
  display: block;
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
input:focus {
  border: 1px solid var(--main-black-color);
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
button {  
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 15px;
  display: inline-block;
  width: fit-content;
  font-weight: 700;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  background: var(--highlight-orange);
  color: var(--main-white-color);
  border: 2px solid var(--highlight-orange);
}
button:hover {
  background: var(--main-white-color);
  color: var(--highlight-orange);
  border: 2px solid var(--highlight-orange);
  cursor: pointer;
}
.other-button {
  background-color: var(--main-white-color);
  border-color:black;
  color: var(--main-bg-color);
}
.other-button:hover {
  background-color: var(--main-white-color);
  border-color: var(--main-bg-color);
  color: var(--main-bg-color);
}
.primary-button {
  background-color: var(--main-bg-color);
  border-color: darkgreen;
}
.primary-button:hover{
  color: var(--main-bg-color);
  border-color: var(--main-bg-color);
}
.secondary-button {
  background-color: var(--highlight-orange);
  border-color: red;
}
.secondary-button:hover {
  color: var(--highlight-orange);
  border-color: var(--highlight-orange);
}
i {
  margin: 4px;
}
@media screen and (max-width: 720px) {
  .nav-label {
    display: none;
  }
  #nav {
    position: fixed;
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
    background-color: var(--main-white-color);
  }
  #nav a i {
    font-size: 2rem;
  }
}

</style>
