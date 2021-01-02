<template>
  <div class="newrecipe">
    <h1>This is an NEW RECIPE page</h1>

    <form>
      <label for="zutat1">Neue Zutat hinzuf&uuml;gen</label>
      <input type="text" id="zutat1" name="neueZutat1" required size="255" placeholder="Neue Zutat hier">
      <button type="button" class="primary-button">Neue Zutat hinzuf&uuml;gen</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
  </div>
</template>

<style>
form {
  width: 50%;
  float:left;
}
form label {
  width: 100%;
}
form input {
  width: 100%;
}
form button {  
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 4px;
  border: 1px solid;
  color: var(--main-white-color);
}
.primary-button {
  background-color: green;
  border-color: darkgreen;
}
.secondary-button {
  background-color: red;
  border-color: darkred;
}
</style>
