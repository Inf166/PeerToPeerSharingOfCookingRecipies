<template>
  <div class="newrecipe">
    <h1>Hier kannst du dein neues Rezept anlegen</h1>

    <h3>Rezeptname</h3>
    <form>
      <!-- so sollte das aussehen -->
      <label for="rezeptname">Gebe hier deinen gewünschten Rezeptnamen an:</label>
      <input type="text" id="rezeptname" name="rezeptname" required placeholder="Ein fantastisches Rezept">
      <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    
    <h3>Portionen</h3>   
    <form>
      <label for="portion">Für wie viele Personen ist das Rezept ausgelegt?</label>
      <!-- <input type="button" value="-" class="button-minus" data-field="quantity"> -->
      <input type="number" id="portion" name="portion" placeholder="1">
      <!-- <input type="button" value="+" class="button-plus" data-field="quantity"> -->
      <button type="button" class="primary-button">Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>


    <h3>Zutaten und Mengenangaben</h3>
    <form>
      <label for="zutatname">Wie lautet der Name der Zutat?</label> 
      <input type="text" id="zutatname" name="zutatname" value="" placeholder="Zitrone">
      <label for="mengenangabe">Wie viel wird davon benötigt?</label> 
      <input type="text" id="mengenangabe" name="mengenangabe" value="" placeholder="2">
      <label for="einheit">Ein welcher Einheit ist deine Angabe?</label> 
      <select id="einheit" name="einheit">
        <option value="stk">Stück</option>
        <option value="kg">Kilogramm</option>
        <option value="g">Gramm</option>
        <option value="ml">Milliliter</option>
        <option value="cl">Centiliter</option>
        <option value="mg">Milligramm</option>
        <option value="pck">Packung</option>
        <option value="prise">Prisen</option>
        <option value="tl">Teelöffel</option>
        <option value="el">Esslöffel</option>
        <option value="prise">Prise</option>
      </select>
      <button type="button" class="other-button"> Alternative Zuatat angeben</button>
      <button type="button" class="other-button"> Herkunft angeben</button>
      <button type="button" class="other-button"> Weitere Zutat hinzuf&uuml;gen</button>
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    

    <h3>Alternative Zutat</h3>
    <form>
      <label for="alternativezuatat">Mit welcher alternativen Zutat kann die Zutat {Name} ersetzt werden?</label> 
      <input type="text" id="alternativezuatat" name="alternativezuatat" value="" placeholder="Limette">
      <label for="mengenangabe">Wie viel wird davon benötigt?</label> 
      <input type="text" id="mengenangabe" name="mengenangabe" value="" placeholder="2">
      <label for="einheit">Ein welcher Einheit ist deine Angabe?</label> 
      <select id="einheit" name="einheit">
        <option value="stk">Stück</option>
        <option value="kg">Kilogramm</option>
        <option value="g">Gramm</option>
        <option value="ml">Milliliter</option>
        <option value="cl">Centiliter</option>
        <option value="mg">Milligramm</option>
        <option value="pck">Packung</option>
        <option value="prise">Prisen</option>
        <option value="tl">Teelöffel</option>
        <option value="el">Esslöffel</option>
        <option value="prise">Prise</option>
      </select>
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
      <label for="zubereitungsschritt">Welche nächsten Schritte sind notwendig? </label>
      <input type="text" id="zubereitungsschritt" name="zubereitungsschritt" value="" placeholder="Die Zitronen schälen und genießen.">
      <button type="button" class="other-button"> N&auml;chsten Schritt angeben</button>
      <button type="button" class="other-button"> Geschichtlichen Hinweis angeben</button>
      <button type="button" class="other-button"> Tipp oder Trick angeben</button>
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 
    

    <h3>Arbeitszeit</h3>
    <form>
      <label for="arbeitszeit">Wie lange dauert das Vorbereiten dieses Gerichts?</label> 
      <input type="text" id="arbeitszeit" name="arbeitszeit" value="" placeholder="15 min">
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>
    
    <h3>Ruhezeit</h3>
    <form>
      <label for="ruhezeit">Wie lange soll das Gericht ruhen?</label> 
      <input type="text" id="ruhezeit" name="ruhezeit" value="" placeholder="2 Stunden">
      <button type="button" class="primary-button"> Speichern</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form> 


   <h3>Koch-/ Backzeit</h3>
   <form>
      <label for="kochzeit">Wie lange das Kochen/Backen dieses Gerichts?</label> 
      <input type="text" id="kochzeit" name="kochzeit" value="" placeholder="10 Minuten">
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
      <button type="button" class="other-button">Weitere Bilder hochladen</button>
      <button type="button" class="primary-button"> Hochladen</button>
      <button type="button" class="secondary-button">Abbrechen</button>
    </form>


    <button type="button" class="primary-button"> Rezept veröffentlichen</button>
    <button type="button" class="primary-button"> Abbrechen</button>
</div>
</template>

<script>
export default {
  name: "NewRecipe",
};
</script>

<style>

</style>
