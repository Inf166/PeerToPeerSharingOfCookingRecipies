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
  },
mounted(){
  
}
};
</script>

<style>
:root {
  --main-bg-color: #407961;
  --main-white-color: #f5f7f4;
  --main-black-color: #161811;
  --main-grey-color: #6a6b6b;
  --highlight-green: #6ebf94;
  --highlight-orange: #ff8133;
  --highlight-orange-2: #ff6933;
  --highlight-green-2: #183b29;
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
  position: fixed;
  top: 0;
  z-index: 9999;
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
  position: relative;
  top: 100px;
  margin: auto;
  width: 1200px;
}
.hero-slider{
  /* width: 100%;
  height: 40vh; */
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
}
input {
  font-family: 'Nunito', sans-serif;
  display: block;
  border: 1px solid var(--main-black-color);
  border-radius: 5px;
  background: var(--main-white-color);
  padding: 15px;
  outline: none;
  width: calc(100% - 30px);
  margin-bottom: 2rem;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  font-size: 16px;
}
input:focus:focus-within {
  border: 1px solid var(--highlight-orange);
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
  border: 1px solid var(--main-black-color);
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
  border: 1px solid var(--highlight-orange);
}
button:hover {
  background: var(--main-white-color);
  color: var(--highlight-orange);
  border: 1px solid var(--highlight-orange);
  cursor: pointer;
}
.other-button {
  background-color: var(--main-white-color);
  border-color:var(--main-black-color);
  color: var(--main-bg-color);
}
.other-button:hover {
  background-color: var(--highlight-green);
  border-color: var(--main-bg-color);
  color: var(--main-white-color);
}
.primary-button {
  background-color: var(--main-bg-color);
  border-color: var(--highlight-green-2);
}
.primary-button:hover{
  color: var(--main-bg-color);
  border-color: var(--main-bg-color);
}
.secondary-button {
  background-color: var(--highlight-orange);
  border-color: var(--highlight-orange-2);
}
.secondary-button:hover {
  color: var(--highlight-orange);
  border-color: var(--highlight-orange);
}
.search-button {
  background-color: var(--highlight-orange);
  border-color: gray;
}
.search-button:hover{
  color: var(--highlight-orange);
  border-color: var(--main-bg-color);
}
.alt-ingredient-btn {
  padding: 0;
}
.info-label {
  background-color: var(--main-white-color);
  border-color:var(--main-black-color);
  color: var(--main-bg-color);
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 15px;
  display: inline-block;
  width: fit-content;
  font-weight: 700;
}
.attention-label {
  background-color: var(--main-white-color);
  color: var(--highlight-orange);
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 15px;
  display: inline-block;
  width: fit-content;
  font-weight: 700;
}
i {
  margin: 4px;
}
.search-container form {
  display: grid;
  grid-template-columns: 1fr calc(8rem + 30px);
  width: 100%;
  
}
#search {
  grid-column: 1 / 2;
  margin: auto;
  padding: 15px;
  width: calc(100% - 30px);
  max-height: 4rem;
  border-color: var(--main-black-color);
}
#search:focus:focus-within {
  border: 1px solid var(--highlight-orange);
}
.search-button {
  grid-column: 2 / 3;
  width: 8rem;
  color: var(--main-white-color);
  border-color: var(--higlight-orange);
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  max-height: 4rem;
}
.search-button:hover {
  border-color: var(--higlight-orange);
}

.savedrecipe {

}
.recipe-title {
  color: var(--main-bg-color);
}
.recipe-teaser {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr 300px 1fr;
}
.recipe-teaser-img {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-radius: 5px;
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
}
.recipe-teaser-img img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.recipe-teaser-desc {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  margin: 2rem;
}
.recipe-teaser-desc a{
  text-decoration: none;
  color: var(--main-bg-color);
}
.recipe-teaser-buttons {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}
.ingredient-list {
  
}
.ingredient-list tr td{
  padding-top: 1rem;
}
.ingredient-list tr > :first-child {
  font-weight: 700;
}
.instructions-list {
  
}
.instructions-list tr td{
  padding-top: 1rem;
}
.instructions-list tr > :first-child {
  font-weight: 700;
}
@media screen and (max-width: 1300px) {
  .content {
    margin: auto;
    width: 800px;
  }
    .recipe-teaser-buttons {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: flex;
    flex-flow: nowrap;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 900px) {
  .content {
    margin: auto;
    width: 700px;
  }
  .recipe-teaser {
    grid-template-rows: 1fr 300px 100px;
  }
  .recipe-teaser-img {

  }
  .recipe-teaser-img img {

  }
  .recipe-teaser-desc {

  }
  .recipe-teaser-buttons {

  }
  button {
    padding: 0.5rem;
    max-height: 3rem;
  }
}
@media screen and (max-width: 720px) {
  .content {
    position: relative;
    margin: auto;
    margin-bottom: 200px;
    width: 600px;
    top: 0px;
    font-size: 1rem;
  }
  .nav-label {
    display: none;
  }
  #nav {
    position: fixed;
    top: auto;
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
    font-size: 1rem;
  }
  .content {
    max-width: 100vw;
    overflow: hidden;
  }
  .search-container{
    margin: 1rem 0.5rem;
    border: 1px solid var(--main-black-color);
    border-radius: 5px;
  }
  .search-container:focus-within {
    border: 1px solid var(--highlight-orange);
  }
  #search {
    border: none;
  }
  #search:hover:focus {
    border: none;
  }
  .search-button {
    margin: 0;
    justify-self: right;
  }
  .recipe-teaser {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 300px 1fr fit-content;
  }
  .recipe-teaser-img {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    border-radius: 5px;
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    padding: 34.37% 0 0 0; /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
  }
  .recipe-teaser-img img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .recipe-teaser-desc {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin: 8px;
  }
  .recipe-teaser-desc h3 {
    margin: 8px;
  }
  .recipe-teaser-desc a{
    text-decoration: none;
    color: var(--main-bg-color);
  }
  .recipe-teaser-buttons {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }
}
</style>
