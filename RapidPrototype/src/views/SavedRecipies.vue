<template>
  <div class="savedrecipe">
    <h2>Meine Rezepte</h2>

    <div class="recipe-teaser">
      <div class="recipe-teaser-img">
        <a href="#" target="_">
          <img src="https://via.placeholder.com/600x400.png" alt="Nudelauflauf" width="600" height="400">
        </a>
      </div>
      <div class="recipe-teaser-desc">
        <h3>Ein spannender Rezeptname</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        <p><strong>Geschrieben von: </strong><a href="#" target="_blank">Peter Lustig</a></p>
        <p><strong>Erstellt am: </strong>3.1.2020 14:00</p>
        <button type="button" class="primary-button"><i class="fas fa-utensils"></i>Rezept kochen</button>
        <button type="button" class="secondary-button"><i class="fas fa-trash"></i>Rezept verwerfen</button>
      </div>
    </div>
    
    <hr>

    <div class="recipe-teaser">
      <div class="recipe-teaser-img">
        <img src="https://via.placeholder.com/600x400.png" alt="Nudelauflauf" width="600" height="400">
      </div>
      <div class="recipe-teaser-desc">
        <h3>Ein spannender Rezeptname</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        <p><strong>Geschrieben von: </strong><a href="#" target="_blank">Peter Lustig</a></p>
        <p><strong>Erstellt am: </strong>3.1.2020 14:00</p>
        <button type="button" class="primary-button"><i class="fas fa-utensils"></i>Rezept kochen</button>
        <button type="button" class="secondary-button"><i class="fas fa-trash"></i>Rezept verwerfen</button>
      </div>
    </div>
    <hr>
    </div>
</template>

<style>
  .savedrecipe {
  }
  .recipe-teaser {
    display: grid;
    grid-template-columns: 600px 1fr;
  }
  .recipe-teaser-img {
    grid-column: 1 / 2;
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
    margin: 2rem;
  }
  .recipe-teaser-desc a{
    text-decoration: none;
    color: var(--main-bg-color);
  }

  @media screen and (max-width: 1100px) {
    .recipe-teaser {
      display: block;
    }
    .recipe-teaser-img {
      width: 100%;
      height: auto;
    }
    .recipe-teaser-img img {

    }
    .recipe-teaser-desc {
      margin: 0.5rem;
    }
  }
</style>