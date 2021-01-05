<template>
  <div class="newrecipe">
    <h1>This is an NEW RECIPE page</h1>

    <h3>Rezeptname</h3>
    <form>
      <!-- so sollte das aussehen -->
      <label for="rezeptname">Gebe hier deinen gewünschten Rezeptnamen an:</label>
      <input type="text" id="rezeptname" name="rezeptname" required size="255" placeholder="Ein fantastisches Rezept">
      <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    

    <h3>Portionen</h3>
    <form>
      <label for="portion">Für wie viele Personen ist das Rezept ausgelegt?</label>
      <input type="text" id="fname" name="fname" value="" placeholder="1 oder 2 oder 3 oder ..."> 
      <!-- Ich glaube hier macht eher ein Element Sinn wo man plus minus drücken kann und der Wert größer oder kleiner wird -->
      <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    

    <h3>Zutaten und Mengenangaben</h3>
    <form>
      <label for="zutatname">Wie lautet der Name der Zutat?</label> 
      <input type="text" id="zutatname" name="zutatname" value="" placeholder="Zitrone">
      <label for="mengenangabe">Wie viel wird davon benötigt?</label> 
      <input type="text" id="mengenangabe" name="mengenangabe" value="" placeholder="2">
      <label for="einheit">Einheit:</label> 
      <select id="einheit" name="einheit">
        <option value="stk">Stück</option>
        <option value="kg">Kilogramm</option>
        <option value="g">Gramm</option>
        <option value="ml">Milliliter</option>
        <option value="mg">Milligramm</option>
        <option value="pck">Packung</option>
        <option value="prise">Prisen</option>
        <option value="tl">Teelöffel</option>
        <option value="el">Esslöffel</option>
      </select>
      <button type="button" class="other-button"> Alternative Zuatat angeben</button>
      <button type="button" class="other-button"> Weitere Zutat hinzuf&uuml;gen</button>
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    

    <h3>Alternative Zutat</h3>
    <form>
      <label for="alternativezuatat">Mit welcher alternativen Zutat kann die Zutat {Name} ersetzt werden?</label> 
      <input type="text" id="alternativezuatat" name="alternativezuatat" value="" placeholder="Limette">
      <button type="button" class="other-button"> Weitere Alternativen angeben</button>
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    
    <h3>Herkunft der Zutat</h3>
    <form>
      <label for="zutatherkunft">Wo ist die Zutat erwerbbar?</label> 
      <input type="text" id="zutatherkunft" name="zutatherkunft" value="" placeholder="Wochenmarkt">
      <button type="button" class="other-button"> Weitere Herk&uuml;nfte angeben</button>  
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    

    <h3>Rezeptzubereitung</h3>
    <form>
      <label for="zubereitungsschritt">Hier kannst du beschreiben, welche Schritte für die Zubereitung des Rezeptes notwendig sind. </label>
      <textarea id="zubereitungsschritt" name="zubereitungsschritt" cols="50" rows="20"></textarea> 	
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 
    

    <h3>Arbeitszeit</h3>
    <form>
      <label for="arbeitszeit">Wie viele Stunden braucht man für das Vorbereiten des Gerichts?</label>
      <input type="text" id="arbeitszeit" name="arbeitszeit" value="" placeholder="0.5">
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 
    

    <h3>Koch-/ Backzeit</h3>
    <form>
      <label for="backzeitstd">Wie viele Stunden braucht man für das Kochen/Backen des Gerichts?</label>
      <input type="text" id="backzeitstd" name="backzeitstd" value="" placeholder="2"> 
      <label for="backzeitmin">(Optional) Wie viele Minuten braucht man für das Kochen/Backen des Gerichts?</label>
      <input type="text" id="backzeitmin" name="backzeitmin" value="" placeholder="34"> 
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 
    

    <h3>Ruhezeit</h3>
    <form>
      <label for="ruhezeittage">Wie viele Tage soll das Gericht ruhen?</label>
      <input type="text" id="ruhezeittage" name="ruhezeittage" value="" placeholder="1"> 
      <label for="ruhezeitstd">Wie viele Stunden soll das Gericht ruhen?</label>
      <input type="text" id="ruhezeitstd" name="ruhezeitstd" value="" placeholder="4"> 
      <label for="ruhezeitmin">Wie viele Minuten soll das Gericht ruhen?</label>
      <input type="text" id="ruhezeitmin" name="ruhezeitmin" value="" placeholder="20"> 
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 
    

    <h3>Schwierigkeitsgrad</h3>
    <form>
      <label for="schwierigkeitsgrad">Wie schwer würdest du das Gericht einschätzen?</label> 
      <select id="schwierigkeitsgrad" name="schwierigkeitsgrad">
        <option value="simpel">simpel</option>
        <option value="mittel">mittel</option>
        <option value="schwer">schwer</option>
      </select>
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 
    

    <h3>Haushaltsger&auml;te</h3>
    <form>
      <label for="portion">Welche Haushaltsger&auml;te werden gebraucht </label>
      <input type="text" id="portion" name="portion" value="" placeholder="Kitchen Aid">
      <button type="button" class="other-button">Weitere Haushaltsger&auml;te angeben</button>
      <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    

    <h3>Geschichtlicher Hinweis</h3>
    <form>
      <label for="geschichtlicherhinweis">Hier kannst du alle Geschichtliche Hinweise zu diesem Rezept reinschreiben. </label>
      <textarea id="geschichtlicherhinweis" name="geschichtlicherhinweis" cols="50" rows="20"></textarea> 
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 
    

    <h3>Tipps und Tricks</h3>
    <form>
      <label for="tippsntricks">Hier können Sie beschreiben, mit welchen Tipps und Tricks die Zubereitung dieses Rezeptes hilfreich sein könnte. </label>  
      <textarea id="tippsntricks" name="tippsntricks" cols="50" rows="20"></textarea> 	
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    

    <h3>Rezeptbild hochladen</h3>
    <p>Wähle die passende Datei (JPG) aus deiner Festplatte aus.</p>
    <img src="https://via.placeholder.com/600x400.png" alt="Bild" width="600" height="400" style="display: block; margin-bottom: 1rem;">
    <form action="upload.php" method="post" enctype="multipart/form-data">
      <input type="file" name="datei">
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
