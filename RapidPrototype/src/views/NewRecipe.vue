<template>
  <div class="newrecipe">
    <h1>This is an NEW RECIPE page</h1>
  <p><b>Rezeptname</b></p>
    <form>
      <label for="rezept1"><b></b></label>
      <input type="text" id="rezept1" name="neueZutat1" required size="255" placeholder="Neue Zutat hier">
      <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
     <br /> 
     <p><b>Portionen</b></p>
    <form>
      <label for="portion">Das Rezept ist ausgelegt für </label>
      <input type="text" id="fname" name="fname" value=""><br> 
      <label for="portion">Person/en. </label>
       <br /> 
       <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
   </form>
    <br /> 
   <p><b>Zutaten und Mengenangaben</b></p>
    <form action="/action_page.php">
     <label for="Zutatenname">Zutatenname:</label> 
  <input type="text" id="fname" name="fname" value="">
  <br />
  <label for="Mengenangabe">Mengenangabe:</label> 
  <input type="text" id="fname" name="fname" value="">
   <br />
   <label for="Einheit">Einheit:</label> 
   <select id="einheit" name="einheit">
    <option value=""></option>
    <option value="g">g</option>
    <option value="ml">ml</option>
    <option value="mg">mg</option>
    <option value="pck.">Pck.</option>
    <option value="prise(n)">Prise(n)</option>
    <option value="tl">TL</option>
    <option value="el">EL</option>
  </select>
  <br />
   <button type="button" class="other-button"> Weitere Zutat hinzuf&uuml;gen</button>
  <br/>
   <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
</form>
<br/>
 <p><b>Rezeptzubereitung</b></p>
 <form action="/action_page.php">
  <label for="fname">Hier kannst du beschreiben, welche Schritte für die Zubereitung des Rezeptes notwendig sind. </label><br>
  <input type="text" id="fname" name="fname" value=""><br>
  <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
      
</form> 


    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "NewRecipe",
  components: {
    HelloWorld
  }
};
</script>

<style>
form {
 
}
form label {
  width: 100%;
}
form input {
  width: 100%;
}

</style>
