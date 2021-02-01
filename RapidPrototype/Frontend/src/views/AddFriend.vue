<template>
    <div class="addfriend">
        <div class="search-container">
            <form>
                <input type="text" id="search" name="search" required placeholder="Suche..">
                <button type="button" class="search-button" onclick="searchforfriends()"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg></i> Suchen</button>
            </form>
        </div>
        <table id="friends-output">
            
        </table>
        <div class="basicwebrtc">
            <form class="recipe-actions-buttons">
                <button type="button" class="secondary-button" id="initializeButton" onclick="initialize()">Online gehen</button> 
                <button type="button" class="secondary-button" id="endP2PButton" onclick="updatePeerOffline()">Offline gehen</button> 
            </form>
            <form>
                <span id="my-id" title="Copy this ID to the input on send.html.">If it works, your ID will show here</span>
                <input type="text" id="receiver-id" title="Input the ID from receive.html" value="" placeholder="yiiqi6ipgr900000">
                <button type="button" class="secondary-button" id="connect-button" onclick="join()"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></i> Freund hinzuf&uuml;gen</button> 
            </form>
            <form>
                <span>Hier eine Nachricht eingeben zum senden</span>
                <input type="text" id="sendMessageBox" placeholder="Enter a message..." autofocus="true">
                <button type="button" class="secondary-button" id="sendButton" onclick="sendText()">Senden</button> 
            </form>
        </div>
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