<template>
  <div class="newrecipe">
    <h1>This is an NEW RECIPE page</h1>
  <p><b>Rezeptname</b></p>
    <form>
      <label for="rezept1"><b></b></label>
      <input type="text" id="rezept1" name="neueZutat1" required size="255" placeholder="Neue Zutat hier">
      <br />
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
<br />
   <p><b>Alternative Zutat</b></p>
    <form>
     <label for="Zutat">Zutat:</label> 
  <input type="text" id="fname" name="fname" value="">
  <br />
    <label for="Zutatenname">kann mit dieser Zutat ersetzt werden:</label> 
  <input type="text" id="fname" name="fname" value="">
     <br />
   <button type="button" class="other-button"> Weitere Zutat ersetzen</button>
  <br />
   <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
      </form>
       <br /> 
   <p><b>Herkunft der Zutat</b></p>
    <form>
     <label for="Zutat">Zutat:</label> 
  <input type="text" id="fname" name="fname" value="">
  <br />
    <label for="Zutatenname">die Herkunft von dieser Zutat ist:</label> 
  <input type="text" id="fname" name="fname" value="">
     <br />
   <button type="button" class="other-button"> Weitere Zutate angeben</button>
  <br/>
   <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
      </form>
<br/>
 <p><b>Rezeptzubereitung</b></p>
 <form action="/action_page.php">
  <label for="fname">Hier kannst du beschreiben, welche Schritte für die Zubereitung des Rezeptes notwendig sind. </label><br>
  <br />
      <textarea id="text" name="text" cols="50" rows="20"></textarea> 	
      <br />
  <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
</form> 
<br/>
<p><b>Arbeitszeit</b></p>
<form>
  <label for="fname"></label><br>
  <input type="text" id="fname" name="fname" value=""> 
 
  <label for="fname">Std.</label>
   <input type="text" id="fname" name="fname" value=""> 
 
    <label for="fname">Min.</label>
    <br />
  <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
</form> 
<p><b>Koch-/ Backzeit</b></p>
<form>
  <label for="fname"></label><br>
  <input type="text" id="fname" name="fname" value=""> 
 
  <label for="fname">Std.</label>
   <input type="text" id="fname" name="fname" value=""> 
  
    <label for="fname">Min.</label>
    <br />
  <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
</form> 
<p><b>Ruhezeit</b></p>
<form>
  <label for="fname"></label><br>
   <input type="text" id="fname" name="fname" value=""> 

  <label for="fname">Tage</label>
  <input type="text" id="fname" name="fname" value=""> 
 
  <label for="fname">Std.</label>
   <input type="text" id="fname" name="fname" value=""> 
    <label for="fname">Min.</label>
    <br />
  <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
</form> 
<br />
 <p><b>Schwierigkeitsgrad</b></p>
<form>
<label for="schwierigkeitsgrad">Schwierigkeitsgrad:</label> 
   <select id="schwierigkeitsgrad" name="schwierigkeitsgrad">
    <option value=""></option>
    <option value="simpel">simpel</option>
    <option value="mittel">mittel</option>
    <option value="schwer">schwer</option>
     </select>
      <br />
  <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
</form> 
<br/>
 <p><b>Haushaltsger&auml;te</b></p>
    <form>
      <label for="portion">Bitte gebe hier alle benötigte Haushaltsger&auml;te für das Rezept an. </label>
      <input type="text" id="fname" name="fname" value=""><br> 
       <br /> 
       <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
   </form>
    <br /> 
<p><b>Geschichtlicher Hinweis</b></p>
<form>
  <label for="fname">Hier kannst du alle Geschichtliche Hinweise zu diesem Rezept reinschreiben. </label><br>
  <br />
      <textarea id="text" name="text" cols="50" rows="20"></textarea> 	
  <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
</form> 
 <br /> 
   <p><b>Tipps und Tricks</b></p>
    <form>
     <label for="Zutat">Hier können Sie beschreiben, mit welchen Tipps und Tricks die Zubereitung dieses Rezeptes hilfreich sein könnte. </label> 
      <br />
      <textarea id="text" name="text" cols="50" rows="20"></textarea> 	
     <br />
   <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
      </form>
     
<br/>
<p><b>Rezeptbild hochladen</b></p>
<label for="fname">Wähle die passende Datei (JPG) aus deiner Festplatte aus. </label>
<br />
<img src="https://via.placeholder.com/600x400.png" alt="Bild" width="600" height="400">
<form action="upload.php" method="post"  enctype="multipart/form-data">
<input type="file" name="datei"><br>
<button type="button" class="primary-button"> Hochladen</button>
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
