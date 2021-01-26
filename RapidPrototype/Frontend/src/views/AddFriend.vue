<template>
    <div class="addfriend">
        <form>
            <span id="mypeerid">If it works, your ID will show here</span>
            <input type="text" id="otherpeerid" value="" placeholder="yiiqi6ipgr900000">
            <button type="button" class="secondary-button" onclick="initialize()"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Freund hinzuf&uuml;gen</button> 
        </form>
        <form>
            <span>Hier eine Nachricht eingeben zum senden</span>
            <input type="text" id="chatText" value="" placeholder="Hi wie gehts!">
            <button type="button" class="secondary-button" onclick="sendText()">Senden</button> 
        </form>
    </div>
</template>

<script>
export default {
  name: "AddFriend",
  mounted() {
  }
};
</script>

<style>
</style>