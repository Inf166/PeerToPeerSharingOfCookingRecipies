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
      <router-link to="/profile">
        <i class="fas fa-user-alt"></i>
        <span class="nav-label">Mein Profil</span>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
:root {
  --main-bg-color: #407961;
  --main-white-color: #e2e9dc;
  --main-black-color: #161811;
  --highlight-green: #6ebf94;
  --highlight-orange: #ff8133;
}

body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-black-color);
}

#nav {
  width: 100%;
  background: var(--main-bg-color);
  display: flex;
  padding: 1rem;
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
  margin: 0.5rem 2rem;
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
