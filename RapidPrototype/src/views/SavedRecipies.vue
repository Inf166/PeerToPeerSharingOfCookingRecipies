<template>
  <div class="savedrecipe">
    <h1>This is an SAVED RECIPE page</h1>
    <hr>
    <h2>Meine Rezepte</h2>
      <div class="gallery">
        <a target="_blank" href="https://via.placeholder.com/600x400.png">
          <img src="https://via.placeholder.com/600x400.png" alt="Nudelauflauf" width="600" height="400">
        </a>
        <div class="desc">Title</div>
        <div class="desc">Author</div>
        <div class="desc">creation time</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://via.placeholder.com/600x400.png">
          <img src="https://via.placeholder.com/600x400.png" alt="Linsensuppe" width="600" height="400">
        </a>
      <div class="desc">Title</div>
        <div class="desc">Author</div>
        <div class="desc">creation time</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://via.placeholder.com/600x400.png">
          <img src="https://via.placeholder.com/600x400.png" alt="Weihnachtskekse" width="600" height="400">
        </a>
        <div class="desc">Title</div>
        <div class="desc">Author</div>
        <div class="desc">creation time</div>
      </div>

      <div class="gallery">
        <a target="_blank" href="https://via.placeholder.com/600x400.png">
          <img src="https://via.placeholder.com/600x400.png" alt="Käsespätzle" width="600" height="400">
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