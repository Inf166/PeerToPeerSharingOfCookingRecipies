<template> 
 <div class="recipe-view">
    <h1 class="recipe-title">{{myJson.title}}</h1>
    <!-- <li v-for="title in myJson" :key="title">{{title}}</li> -->
    <!-- <div class="recipe-teaser-img" v-for="source in myJson.images" :key="source">
       <img src="{{source.source}}" alt="Lebkuchen">
    </div> -->
    <div class="recipe-actions-buttons">
      <button type="button" class="primary-button"><i class="fas fa-print"></i>Rezept drucken</button>
      <button type="button" class="other-button"><i class="far fa-bookmark"></i>Rezept markieren</button>
      <button type="button" class="secondary-button"><i class="fas fa-share-square"></i>Rezept teilen</button>
    </div>
    <div>
      <label class="info-label"><i class="fas fa-clock"></i> {{myJson.cookTime + myJson.prepTime + myJson.restTime}} Minuten</label>
      <label class="info-label"><i class="fas fa-utensil-spoon"></i> {{myJson.difficultyLevel}}</label>
      <label class="info-label"><i class="fas fa-calendar-week"></i> {{myJson.datePublished}}</label>
      <label class="info-label"><i class="fas fa-user-alt"></i> {{myJson.author.name}}</label>
    </div>

    <hr>
    <h2 class="recipe-title">Portionen</h2>
      <span>{{myJson.portion}} Portionen</span>
    <h2 class="recipe-title"> Zutaten</h2>
      <table class="ingredient-list">
        <tr v-for="name in myJson.Ingredients" :key="name" >
          <td>{{name.amount}} {{name.unit}}</td>
          <td>{{name.name}}</td>
          <td v-if="name.alternativeIngredients"><button class="alt-ingredient-btn"><i class="fas fa-sync-alt"></i>Austauschen durch: {{name.alternativeIngredients[0].name}}</button></td>
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
      <tr v-for="name in myJson.householdUtensils" :key="name" >
          <td>{{name.name}}</td>
      </tr>
      <!-- <tr>
        <td>Ein beliebiger Handmixer</td>
      </tr> -->
    </table>

    <hr>

       <div>
         <label class="attention-label"><i class="fas fa-clock"></i> Arbeitszeit ca. {{myJson.prepTime}} Minuten</label>
         <label class="attention-label"><i class="fas fa-clock"></i> Koch-/Backzeit ca. {{myJson.cookTime}} Minuten</label>
         <label class="attention-label"><i class="fas fa-clock"></i> Ruhezeit ca. {{myJson.restTime}} Minuten</label>
       </div>
      
       <h2 class="recipe-title"> Zubereitung</h2>
       <table class="instructions-list">
        <tr v-for="step in myJson.recipeInstructions" :key="step" >
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
       <p v-for="step in myJson.recipeInstructions" :key="step">
         <span v-for="text in step.historicalNote" :key="text">{{text.text}} <span>{{text.author}}</span></span>
       </p>
       <!-- <p>
         Oma hatte am liebsten Herzen, die sie nach dem Abkühlen mit Haselnussglasur (Fertigprodukt) bepinselte. In die Mitte setzte sie zur Dekoration eine Schokoladenmokkabohne oder ein silbernes Zuckerkügelchen. 
         Natürlich gab es für uns Kinder zusätzlich diesen typischen Nikolaus, der mit einem Oblatenbildchen versehen war. (Deshalb musste Opa auch die Schablone anfertigen). 
         Wie Oma Frieda diese Bildchen speziell befestigte weiß ich nicht. Vermutlich mit einer Paste aus Puderzucker und Wasser. 
       </p> -->
  <hr>

   <h2 class="recipe-title">Tipps und Tricks</h2>
        <p v-for="step in myJson.recipeInstructions" :key="step">
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