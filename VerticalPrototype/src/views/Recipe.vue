<template> 
 <div class="recipe-view">
    <h2 class="recipe-title">{{myJson.title}}</h2>
    <!-- <li v-for="title in myJson" :key="title">{{title}}</li> -->
    <!-- <div class="recipe-teaser-img" v-for="source in myJson.images" :key="source">
       <img src="{{source.source}}" alt="Lebkuchen">
    </div> -->
    <div class="recipe-actions-buttons">
      <button type="button" class="primary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/></svg></i>Rezept drucken</button>
      <button type="button" class="other-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/></svg></i>Rezept markieren</button>
      <button type="button" class="secondary-button"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.339 56.339 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56.088 56.088 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296z"/></svg></i>Rezept teilen</button>
    </div>
    <div class="recipe-labels">
      <label class="info-label"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"/></svg></i> {{myJson.cookTime + myJson.prepTime + myJson.restTime}} Minuten</label>
      <label class="info-label"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"/></svg></i> {{myJson.difficultyLevel}}</label>
      <label class="info-label"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/></svg></i> {{myJson.datePublished}}</label>
      <label class="info-label"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg></i> {{myJson.author.name}}</label>
    </div>

    <hr>
    <h2 class="recipe-title">Portionen</h2>
      <span>{{myJson.portion}} Portionen</span>
    <h2 class="recipe-title"> Zutaten</h2>
      <table class="ingredient-list">
        <tr v-for="(ingredient, index) in myJson.ingredients" :key="index" >
          <td>{{ingredient.amount}} {{ingredient.unit}}</td>
          <td>{{ingredient.name}}</td>
          <td v-if="ingredient.alternativeIngredients">
            <button class="alt-ingredient-btn">
              <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"/></svg></i>
              Austauschen durch: {{ingredient.alternativeIngredients[0].name}}
            </button>
          </td>
        </tr>
        <!-- <tr>
          <td>500 g</td>
          <td>Honig</td>
        </tr>
        <tr>
          <td>500 g</td>
          <td>braunen Rohrzucker</td>
        </tr>
        <tr>
          <td>200 g</td>
          <td>Butter</td>
          <td><button class="alt-ingredient-btn"><i class="fas fa-sync-alt"></i>Austauschen durch: Margarine</button></td>
        </tr>
        <tr>
          <td>2 Pck.</td>
          <td>Lebkuchengewürz</td>
        </tr>
        <tr>
          <td>2 Stk.</td>
          <td>Zitronen, davon die abgeriebene Schale</td>
        </tr>
        <tr>
          <td>1 kg</td>
          <td>Mehl</td>
        </tr>
        <tr>
          <td>4 EL</td>
          <td>Kakaopulver</td>
        </tr>
        <tr>
          <td>4 Stk.</td>
          <td>Eier</td>
        </tr>
        <tr>
          <td>24 g</td>
          <td>Pottasche</td>
        </tr>
        <tr>
          <td>4 cl</td>
          <td>Kirschwasser</td>
        </tr> -->
      </table>

    <hr>

    <h2 class="recipe-title">Benötigte Haushaltsgeräte</h2>
    <table class="ingredient-list">
      <tr v-for="(name, index) in myJson.householdUtensils" :key="index" >
          <td>{{name.name}}</td>
      </tr>
      <!-- <tr>
        <td>Ein beliebiger Handmixer</td>
      </tr> -->
    </table>

    <hr>

       <div class="recipe-labels">
         <label class="attention-label"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"/></svg></i> Arbeitszeit ca. {{myJson.prepTime}} Minuten</label>
         <label class="attention-label"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"/></svg></i> Koch-/Backzeit ca. {{myJson.cookTime}} Minuten</label>
         <label class="attention-label"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"/></svg></i> Ruhezeit ca. {{myJson.restTime}} Minuten</label>
       </div>
      
       <h2 class="recipe-title"> Zubereitung</h2>
       <table class="instructions-list">
        <tr v-for="(step, index) in myJson.recipeInstructions" :key="index" >
          <td width="10%">{{step.step}}. Schritt</td>
           <td width="90%">{{step.description}}</td>
        </tr>
        <!-- <tr>
          <td width="10%">1. Schritt</td>
          <td width="90%">Erwärme bitte zuerst den Honig und den Zucker. Danach rührst du das Fett unter und gibst die Gewürze und den Zitronenabrieb dazu. Diesen nimmst du dann vom Herd und lässt es leicht abkühlen.
          Nach und nach verrührst du die Honig-Zucker-Masse mit dem Mehl und dem Kakao, damit es gut verknetet. Anschließend verquirlst du leicht die Eier und mischst den unter den Teig. Die Pottasche verrürst du behutsam im Kirschwasser, damit sich das gut auflöst und mischst es dann unter den Teig.
          Zuletzt formst du eine Kugel und lässt den Teig mindestens für 1 Stunde ruhen.</td>
        </tr>
        <tr>
          <td width="10%">2. Schritt</td>
          <td width="90%">Vor dem Ausrollen nochmals richtig fest durchkneten und dann auf bemehlter Fläche fingerdick ausrollen. Mit Hilfe einer Schablone (Opa durfte sie anfertigen) oder mit einem Herzausstecher schneidest du den Teig aus. Dieses Gebilde lässt du nochmals für 1 - 2 Stunden ruhen.
          Nun kannst du auf Backpapier (oder leicht gefettetes, bemehltes Blech) im vorgeheizten Ofen, mittlere Schiene, backen.
          Die Menge reicht für ein normales Blech. 
          Prüfe hin- und wieder die Farbe, denn der Lebkuchen darf nicht zu dunkel werden, sonst schmeckt er bitter. Reduziere die Hitze eventuell.
          Die Backzeit ist etwa 20 Minuten bei 180 - 200 °C. Heißluft etwas weniger, Gas Stufe 2 - 3.</td>
        </tr>
        <tr>
          <td width="10%">3. Schritt</td>
          <td width="90%">Des Weiteren lässt du die Lebkuchen sofort auf einem Rost auskühlen. Wenn du möchtest, dass die Oberfläche glänzen soll, dann bestreich diese kurz vor Backzeitende mit Zuckerwasser. Ansonsten verzierst du die abgekühlten Lebkuchen mit Zuckerglasur. Wenn du die Lebkuchen mit Mandeln verzieren möchtest, solltest du diese schon vor dem Backen leicht in den Teig drücken.</td>
        </tr> -->
       </table>
       
    <hr>

   <h2 class="recipe-title">Geschichtlicher Hinweis</h2>
       <p v-for="(step, index) in myJson.recipeInstructions" :key="index">
         <span v-for="text in step.historicalNote" :key="text">{{text.text}} <span>{{text.author}}</span></span>
       </p>
       <!-- <p>
         Oma hatte am liebsten Herzen, die sie nach dem Abkühlen mit Haselnussglasur (Fertigprodukt) bepinselte. In die Mitte setzte sie zur Dekoration eine Schokoladenmokkabohne oder ein silbernes Zuckerkügelchen. 
         Natürlich gab es für uns Kinder zusätzlich diesen typischen Nikolaus, der mit einem Oblatenbildchen versehen war. (Deshalb musste Opa auch die Schablone anfertigen). 
         Wie Oma Frieda diese Bildchen speziell befestigte weiß ich nicht. Vermutlich mit einer Paste aus Puderzucker und Wasser. 
       </p> -->
  <hr>

   <h2 class="recipe-title">Tipps und Tricks</h2>
        <p v-for="(step, index) in myJson.recipeInstructions" :key="index">
          <span v-for="text in step.tipsAndTricks" :key="text">{{text.text}} <span>{{text.author}}</span></span>
        </p>
       <!-- <p>Den Teig während der Zubereitung nicht lange stehen lassen, denn er wird sonst fest und lässt sich kaum noch bearbeiten. 
         Solange kneten und mischen, bis er nicht mehr klebt und glatt und glänzend ist. (Möglich, dass man noch etwas Mehl hinzugeben muss) 
         Am besten, man setzt die Knethaken des Handmixers ein, oder besser noch die Küchenmaschine. 
       </p> -->
 </div>

 
</template>



<script>
import json from "../assets/recipe.json"
      export default{
          data(){
              return{
                  myJson: json
              }
          }
      }
</script>

<style>

</style>