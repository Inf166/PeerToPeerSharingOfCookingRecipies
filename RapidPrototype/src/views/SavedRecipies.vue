<template>
  <div class="savedrecipe">
    <h1>This is an SAVED RECIPE page</h1>
    <hr>
    <h2>Meine Rezepte</h2>
<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="img_5terre.jpg" alt="Nudelauflauf" width="600" height="400">
  </a>
  <div class="desc">Title</div>
  <div class="desc">Author</div>
  <div class="desc">creation time</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src="img_forest.jpg" alt="Linsensuppe" width="600" height="400">
  </a>
<div class="desc">Title</div>
  <div class="desc">Author</div>
  <div class="desc">creation time</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src="img_lights.jpg" alt="Weihnachtskekse" width="600" height="400">
  </a>
  <div class="desc">Title</div>
  <div class="desc">Author</div>
  <div class="desc">creation time</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src="img_mountains.jpg" alt="Käsespätzle" width="600" height="400">
  </a>
<div class="desc">Title</div>
  <div class="desc">Author</div>
  <div class="desc">creation time</div>
</div>
    </div>
</template>

<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
}
</style>