<template>
  <div class="newrecipe">
    <div class="step" v-show="showRecipeMeta">
      <h3>Rezeptname</h3>
      <form>
        <label for="rezeptname">Gebe hier deinen gewünschten Rezeptnamen an:</label>
        <input type="text" v-model="recipeName" required placeholder="Ein fantastisches Rezept">
        <label for="rezeptbeschreibung">Gebe hier eine kurze Beschreibung des Rezepts an:</label>
        <input type="textarea" v-model="recipeDescription" required placeholder="Eine kurze Beschreibung">
        <div class="recipe-actions-buttons" v-if="recipeName.length>0">
          <button type="button" class="primary-button" @click="savePartial(recipeHead)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
        </div>
      </form>
      <div class="recipe-form-buttons">
        <button type="button" class="secondary-button" id="prev-btn" @click="goToStep(null, null)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        <button type="button" class="other-button" id="next-btn" @click="goToStep('showRecipeMeta', 'showPortion')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>
    
    <div class="step" v-show="showPortion">
      <h3>Portionen</h3>   
      <form>
        <label for="portion">Für wie viele Personen ist das Rezept ausgelegt?</label>
        <input type="number" v-model="portion" placeholder="1">
        <div class="recipe-actions-buttons" v-if="portion>0">
          <button type="button" class="primary-button" @click="savePartial(portionObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form>
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showPortion', 'showRecipeMeta')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showPortion', 'showDifficulty')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>

    <div class="step" v-show="showDifficulty">
      <h3>Schwierigkeitsgrad</h3>
      <form>
        <label for="schwierigkeitsgrad">Wie schwer würdest du das Gericht einschätzen?</label> 
        <select id="schwierigkeitsgrad" name="schwierigkeitsgrad" v-model="difficultyLevel">
          <option value="simpel">simpel</option>
          <option value="mittel">mittel</option>
          <option value="schwer">schwer</option>
        </select>
        <div class="recipe-actions-buttons" v-if="difficultyLevel.length>0">
          <button type="button" class="primary-button" @click="savePartial(difficultyLevelObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form> 
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showDifficulty', 'showPortion')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showDifficulty', 'showUtensils')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>

    <div class="step" v-show="showUtensils">
      <h3>Haushaltsger&auml;te</h3>
      <form>
        <div class="untensil" v-for="(utensil,index) in utensils" :key="index">
          <label for="untensil">Welche Haushaltsger&auml;te werden gebraucht </label>
          <input type="text" v-model="utensil.name" placeholder="Kitchen Aid">
          <div class="recipe-actions-buttons rm-spacer">
            <button type="button" class="other-button" @click="removeUtensil(index)" v-show="index || ( !index && utensils.length > 1)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Haushaltsger&auml;t entfernen</button>
            <button type="button" class="other-button" @click="addUtensil(index)" v-show="index == utensils.length-1"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Weitere Haushaltsger&auml;te angeben</button>
          </div>
        </div>
        <div class="recipe-actions-buttons" v-if="utensils.length>0">
          <button type="button" class="primary-button" @click="savePartial(householdUtensilObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form>
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showUtensils', 'showDifficulty')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showUtensils', 'showIngredient')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>
    
    <div class="step" v-show="showIngredient">
      <h3>Zutaten und Mengenangaben</h3>
      <div class="untensil" v-for="(ingredient,index) in ingredients" :key="index">
        <label for="zutatname">Wie lautet der Name der Zutat?</label> 
        <input type="text" v-model="ingredient.name" placeholder="Zitrone">
        <label for="mengenangabe">Wie viel wird davon benötigt?</label> 
        <input type="number" v-model="ingredient.amount" value="" placeholder="2">
        <label for="einheit">Ein welcher Einheit ist deine Angabe?</label> 
        <select id="einheit" name="einheit" v-model="ingredient.unit">
          <option value="stk">Stück</option>
          <option value="mg">Milligramm</option>
          <option value="g">Gramm</option>
          <option value="kg">Kilogramm</option>
          <option value="cl">Centiliter</option>
          <option value="ml">Milliliter</option>
          <option value="l">Liter</option>
          <option value="pck">Packungen</option>
          <option value="prise">Prisen</option>
          <option value="tl">Teelöffel</option>
          <option value="el">Esslöffel</option>
        </select>
        <div v-for="(origin,i) in ingredient.origins" :key="'origin-'+i">
          <label for="zutatherkunft">Wo ist die Zutat erwerbbar?</label>
          <div class="recipe-actions-buttons rm-spacer">
          <input type="text" v-model="origin.name" value="" placeholder="Wochenmarkt">
          <button type="button" class="other-button" @click="removeOrigin(index, i)" v-show="i || ( !i && ingredient.origins.length > 1)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Herkunft entfernen</button>
          <button type="button" class="other-button" @click="addOrigin(index, i)" v-show="i == ingredient.origins.length-1"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Herkunft angeben</button>
          </div>
        </div>
        <div v-for="(altIng,t) in ingredient.alternativeIngredients" :key="'altIng-'+t">
          <label for="alternativezuatat">Mit welcher alternativen Zutat kann die Zutat "{{ingredient.name}}" ersetzt werden?</label> 
          <div class="side-border">
            <input type="text" v-model="altIng.name" value="" placeholder="Limette">
            <label for="mengenangabe">Wie viel wird davon benötigt?</label> 
            <input type="number" v-model="altIng.amount" value="" placeholder="2">
            <label for="altEinheit">Ein welcher Einheit ist deine Angabe?</label> 
            <select id="altEinheit" v-model="altIng.unit">
              <option value="stk">Stück</option>
              <option value="mg">Milligramm</option>
              <option value="g">Gramm</option>
              <option value="kg">Kilogramm</option>
              <option value="cl">Centiliter</option>
              <option value="ml">Milliliter</option>
              <option value="l">Liter</option>
              <option value="pck">Packungen</option>
              <option value="prise">Prisen</option>
              <option value="tl">Teelöffel</option>
              <option value="el">Esslöffel</option>
            </select>
            <div class="recipe-actions-buttons rm-spacer">
              <button type="button" class="other-button" @click="removeAltIng(index, t)" v-show="t || ( !t && ingredient.alternativeIngredients.length > 1)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Alternative Zuatat entfernen</button>
              <button type="button" class="other-button" @click="addAltIng(index, t)" v-show="t == ingredient.alternativeIngredients.length-1"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Alternative Zuatat angeben</button>
            </div>
          </div>  
        </div>  
        <div class="recipe-actions-buttons rm-spacer">
          <button type="button" class="other-button" @click="removeIngredient(index)" v-show="index || ( !index && ingredients.length > 1)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Zutat entfernen</button>
          <button type="button" class="other-button" @click="addIngredient(index)" v-show="index == ingredients.length-1"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Weitere Zutaten angeben</button>
        </div>
      </div>

      <div class="recipe-actions-buttons" v-if="ingredients.length>0">
        <button type="button" class="primary-button" @click="savePartial(ingredientObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
        <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
      </div>
      
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showIngredient', 'showUtensils')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showIngredient', 'showPreptime')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>
    
    <div class="step" v-show="showPreptime">
      <h3>Arbeitszeit</h3>
      <form>
        <label for="arbeitszeit">Wie lange dauert das Vorbereiten dieses Gerichts? (in Minuten)</label> 
        <input type="number" v-model="prepTime" value="" placeholder="15">
        <div class="recipe-actions-buttons" v-if="prepTime>0">
          <button type="button" class="primary-button" @click="savePartial(prepTimeObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form>
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showPreptime', 'showIngredient')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showPreptime', 'showResttime')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>

    <div class="step" v-show="showResttime">
      <h3>Ruhezeit</h3>
      <form>
        <label for="ruhezeit">Wie lange soll das Gericht ruhen? (in Minuten)</label> 
        <input type="number" v-model="restTime" value="" placeholder="120">
        <div class="recipe-actions-buttons" v-if="restTime>0">
          <button type="button" class="primary-button" @click="savePartial(restTimeObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form> 
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showResttime', 'showPreptime')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showResttime', 'showCooktime')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>
    
    <div class="step" v-show="showCooktime">
      <h3>Koch-/ Backzeit</h3>
      <form>
        <label for="kochzeit">Wie lange das Kochen/Backen dieses Gerichts? (in Minuten)</label> 
        <input type="number" v-model="cookTime" value="" placeholder="10">
        <div class="recipe-actions-buttons" v-if="cookTime>0">
          <button type="button" class="primary-button" @click="savePartial(cookTimeObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form> 
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showCooktime', 'showResttime')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showCooktime', 'showInstructions')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>

    <div class="step" v-show="showInstructions">
      <h3>Rezeptzubereitung</h3>
      <form>
        <label for="zubereitungsschritt">Welche nächsten Schritte sind notwendig? </label>
        <div class="instructions" v-for="(instruct,index) in instructions" :key="index">
          <label for="untensil">Was wird als N&auml;chstes gemacht?</label>
          <input type="text" style="display:none" v-model="instruct.step" :bind="index">
          <input type="text" v-model="instruct.description" value="" placeholder="Die Zitronen schälen und genießen.">
          
          <!-- Historical Note -->
          <div v-for="(note,i) in instruct.historicalNote" :key="'h-note-'+i">
            <label for="zutatherkunft">Woran möchtest du andere erinnern?</label>
            <div class="recipe-actions-buttons rm-spacer">
              <input type="text" v-model="note.text" placeholder="Damals war alles lustiger...">
              <button type="button" class="other-button" @click="removeNote(index, i)" v-show="i || ( !i && instruct.historicalNote.length > 1)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Anekdote entfernen</button>
              <button type="button" class="other-button" @click="addNote(index, i)" v-show="i == instruct.historicalNote.length-1"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Anekdote angeben</button>
            </div>
          </div>
          <!-- Tips and Tricks -->
          <div v-for="(tip,i) in instruct.tipsAndTricks" :key="'tnt-'+i">
            <label for="zutatherkunft">Worauf sollte man besonders achten?</label>
            <div class="recipe-actions-buttons rm-spacer">
              <input type="text" v-model="tip.text" placeholder="Das Messer fest in der Hand halten und Vs schneiden...">
              <button type="button" class="other-button" @click="removeTip(index, i)" v-show="i || ( !i && instruct.tipsAndTricks.length > 1)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Tipp entfernen</button>
              <button type="button" class="other-button" @click="addTip(index, i)" v-show="i == instruct.tipsAndTricks.length-1"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Tipp angeben</button>
            </div>
          </div>
          <div class="recipe-actions-buttons rm-spacer">
            <button type="button" class="other-button" @click="removeInstruction(index)" v-show="index || ( !index && instructions.length > 1)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Schritt entfernen</button>
            <button type="button" class="other-button" @click="addInstruction(index)" v-show="index == instructions.length-1"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Einen weiteren Schritt angeben</button>
          </div>
        </div>
        <div class="recipe-actions-buttons" v-if="instructions.length>0">
          <button type="button" class="primary-button" @click="savePartial(recipeInstructionsObj)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form> 

      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showInstructions', 'showCooktime')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showInstructions', 'showImages')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>
  
    <div class="step" v-show="showImages">
      <h3>Rezeptbild hochladen</h3>
      <p>Wähle die passende Datei (JPG) aus deiner Festplatte aus.</p>
      <div class="recipe-teaser-img">
          <a href="#" target="_">
            <img src="https://via.placeholder.com/1920x1080.png" alt="Rezept2" >
          </a>
      </div>
      <form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="datei" >
        <div class="recipe-actions-buttons">
          <button type="button" class="other-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Weitere Bilder hochladen</button>
        </div>
        <div class="recipe-actions-buttons">
          <button type="button" class="primary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/></svg></i> Speichern</button>
          <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
        </div>
      </form>
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showImages', 'showInstructions')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
        <button type="button" id="next-btn" class="other-button" @click="goToStep('showImages', 'showEndcard')">
          Weiter
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></i> 
        </button>
      </div>
    </div>

    <div class="step" v-show="showEndcard">
      <h3>Glückwunsch! Du bist fertig.</h3>
      <p>Wähle nun aus ob du das Rezept offline oder online speichern willst:</p>
      <div class="recipe-actions-buttons">
        <button type="button" class="primary-button" @click="saveRecipe()"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"/></svg></i> Rezept veröffentlichen</button>
        <button type="button" class="secondary-button" @click="goToStep(null, null)"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg></i> Abbrechen</button>
      </div>
      <div class="recipe-form-buttons">
        <button type="button" id="prev-btn" class="other-button" @click="goToStep('showEndcard', 'showImages')">
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg></i> 
          Zurück
        </button>
      </div>
    </div>
    

</div>
</template>

<script>
export default {
  name: "NewRecipe",
    data: function() {
    return {
      recipeName: "",
      recipeDescription: "",
      portion: "",

      ingredients: [{name:'', amount:'', unit:'', origins: [{name: ''}], alternativeIngredients: [{name: "", amount: "", unit: "", origin: ""}]}],
      utensils: [{name:''}],
      instructions: [{step: 1, description:'', tipsAndTricks: [{author: this.$store.getters.myUserName, text: ''}], historicalNote: [{author: this.$store.getters.myUserName, text: ''}]}],
      stepCounter: 2,

      ingredientName: "",
      ingredientAmount: "",
      ingredientUnit: "",
      alternativeIngredientName: "",
      alternativeIngredientAmout: "",
      alternativeIngredientUnit: "",
      origin: "",
      prepTime: "",
      restTime: "",
      cookTime: "",
      difficultyLevel: "",
      
      showRecipeMeta: true,
      showPortion: false,
      showDifficulty: false,
      showUtensils: false,
      showIngredient: false,
      showPreptime: false,
      showResttime: false,
      showCooktime: false,
      showInstructions: false,
      showImages: false,
      showEndcard: false,

      showIngredientOrigin: false,
      showIngredientAltIngredient: false,
    }
  },
  computed: {
    myUserName() {
      return this.$store.getters.myUserName;
    },
    now() {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return date+' '+time;
    },
    recipeHead() {
      var recipeHead = {};
      recipeHead["@type"] = "Recipe";
      var id = (this.myUserName + this.recipeName + this.now).replace(/\s/g, "");
      recipeHead["id"] = id;
      recipeHead["title"] = this.recipeName;
      recipeHead["description"] = this.recipeDescription;
      recipeHead["datePublished"] = this.now;
      recipeHead["isNew"] = true;
      var author = {};
      author["name"] = this.myUserName;
      recipeHead["author"] = author;
      return recipeHead;
    },
    portionObj() {
      var portionObj = {};
      portionObj["portion"] = this.portion;
      return portionObj;
    },
    ingredientObj() { 
      var ingredientObj = {};
      ingredientObj["ingredients"] = this.ingredients;
      return ingredientObj;
    },
    recipeInstructionsObj() { 
      var recipeInstructionsObj = {};
      recipeInstructionsObj["recipeInstructions"] = this.instructions;
      return recipeInstructionsObj;
    },
    prepTimeObj() {
      var prepTimeObj = {};
      prepTimeObj["prepTime"] = this.prepTime;
      return prepTimeObj;
    },
    restTimeObj() {
      var restTimeObj = {};
      restTimeObj["restTime"] = this.restTime;
      return restTimeObj;
    },
    cookTimeObj() {
      var cookTimeObj = {};
      cookTimeObj["cookTime"] = this.cookTime;
      return cookTimeObj;
    },
    difficultyLevelObj() {
      var difficultyLevelObj = {};
      difficultyLevelObj["difficultyLevel"] = this.difficultyLevel;
      return difficultyLevelObj;
    },
    householdUtensilObj() {
      var householdUtensilObj = {};
      householdUtensilObj["householdUtensils"] = this.utensils;
      return householdUtensilObj;
    },
    historicalNoteObj() { //TODO
      var historicalNoteObj = {};
      historicalNoteObj["historicalNote"] = [];
      var temphistoricalNote = {};
      temphistoricalNote["author"] = this.myUserName;
      temphistoricalNote["text"] = this.historicalNote;
      historicalNoteObj["historicalNote"].push(temphistoricalNote);
      return historicalNoteObj;
    },
    tipsAndTricksObj() { //TODO
      var tipsAndTricksObj = {};
      tipsAndTricksObj["tipsAndTricks"] = [];
      var temptipsAndTricks = {};
      temptipsAndTricks["author"] = this.myUserName;
      temptipsAndTricks["text"] = this.historicalNote;
      tipsAndTricksObj["tipsAndTricks"].push(temptipsAndTricks);
      return tipsAndTricksObj;
    },
  },
  methods: {
    addUtensil() {
      this.utensils.push({
        name: '',
      });
      console.log(this.utensils);
    },
    removeUtensil(index) {
      this.utensils.splice(index, 1);
    },

    addIngredient() {
      this.ingredients.push({
        name: '', amount: '', unit: '', origins: [{name:''}], alternativeIngredients: [{name: "", amount: "", unit: "", origin: ""}]
      });
      console.log(this.ingredients);
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },

    addOrigin(ingIndex) {
      this.ingredients[ingIndex].origins.push({
        name: '',
      });
      console.log(this.ingredients);
    },
    removeOrigin(ingIndex, altIndex) {
      this.ingredients[ingIndex].origins.splice(altIndex, 1);
    },

    addAltIng(ingIndex) {
      this.ingredients[ingIndex].alternativeIngredients.push({
        name: '', amount: "", unit: "", origin: ""
      });
      console.log(this.ingredients);
    },
    removeAltIng(ingIndex, oriIndex) {
      this.ingredients[ingIndex].alternativeIngredients.splice(oriIndex, 1)
    },

    addInstruction() {
      var stepp = this.stepCounter++
      this.instructions.push({step: stepp, description:'', tipsAndTricks: [{author: '', text: ''}], historicalNote: [{author: '', text: ''}]});
      console.log(this.instructions);
    },
    removeInstruction(index) {
      this.instructions.splice(index, 1);
    },

    addNote(ingIndex) {
      var myNameIs = this.myUserName;
      this.instructions[ingIndex].historicalNote.push({author: myNameIs, text: ''});
      console.log(this.instructions);
    },
    removeNote(ingIndex, oriIndex) {
      this.instructions[ingIndex].historicalNote.splice(oriIndex, 1)
    },

    addTip(ingIndex) {
      var myNameIs = this.myUserName;
      this.instructions[ingIndex].tipsAndTricks.push({author: myNameIs, text: ''});
      console.log(this.instructions);
    },
    removeTip(ingIndex, oriIndex) {
      this.instructions[ingIndex].tipsAndTricks.splice(oriIndex, 1)
    },

    savePartial(toBeSaved) {
      var temp = this.$store.getters.tempRecipe;
      console.log(temp);
      var newRecipe = Object.assign(temp, toBeSaved);
      console.log(newRecipe);
      this.$store.dispatch('addTempRecipe', newRecipe);
      console.log(this.$store.getters.tempRecipe);
    },
    saveRecipe() {
      var temp = this.$store.getters.tempRecipe;
      console.log(temp);
      this.$store.dispatch('addRecipe', temp).then(() => {
        alert("Rezept gespeichert!");
      });
      console.log(this.$store.getters.myRecipies);
    },
    goToStep(prevPage, nextPage) {
      if(prevPage == null && nextPage == null) {
        var check = confirm('Wollen Sie die Bearbeitung des Rezepts wirklich abbrechen?'); 
          if (check == true) {
            this.$store.dispatch('addTempRecipe', {}).then(() => {
              window.location = '../'
            });
          }
      } else {
        switch (prevPage) {
          case 'showRecipeMeta':
            this.showRecipeMeta = false;
            break;
          case 'showPortion':
            this.showPortion = false;
            break;
          case 'showDifficulty':
            this.showDifficulty = false;
            break;
          case 'showUtensils':
            this.showUtensils = false;
            break;
          case 'showIngredient':
            this.showIngredient = false;
            break;
          case 'showPreptime':
            this.showPreptime = false;
            break;
          case 'showResttime':
            this.showResttime = false;
            break;
          case 'showCooktime':
            this.showCooktime = false;
            break;
          case 'showInstructions':
            this.showInstructions = false;
            break;
          case 'showImages':
            this.showImages = false;
            break;
          case 'showEndcard':
            this.showEndcard = false;
            break;
          default:
            break;
        }
        switch (nextPage) {
          case 'showRecipeMeta':
            this.showRecipeMeta = true;
            break;
          case 'showPortion':
            this.showPortion = true;
            break;
          case 'showDifficulty':
            this.showDifficulty = true;
            break;
          case 'showUtensils':
            this.showUtensils = true;
            break;
          case 'showIngredient':
            this.showIngredient = true;
            break;
          case 'showPreptime':
            this.showPreptime = true;
            break;
          case 'showResttime':
            this.showResttime = true;
            break;
          case 'showCooktime':
            this.showCooktime = true;
            break;
          case 'showInstructions':
            this.showInstructions = true;
            break;
          case 'showImages':
            this.showImages = true;
            break;
          case 'showEndcard':
            this.showEndcard = true;
            break;
          default:
            break;
        }
      }
    }
  }
};
</script>

<style>
  .recipe-form-buttons {
    display: block;
    height: 4rem;
    margin-top: 3rem;
  }
  .recipe-form-buttons #next-btn{
    float: right;
    margin: 0;
  }
  .recipe-form-buttons #prev-btn{
    float: left;
    margin: 0;
  }
  .rm-spacer {
    padding-bottom: 1rem;
  }
  .rm-spacer button{
    margin: 0.5rem;
  }
  .side-border {
    border-left: 0.25rem solid var(--main-bg-color);
    padding-left: 0.25rem;
  }
</style>
