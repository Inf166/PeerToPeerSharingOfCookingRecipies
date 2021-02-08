<template>
  <div class="about">
    <h1>Testing WEBRTC</h1>
    <input type="text" v-model="receiverID" placeholder="Friend ID goes here...">
    <button type="button" class="secondary-button" @click="establishConnection()">Verbindung aufbauen</button> 
    <input type="text" v-model="chatText" placeholder="Enter a message..." autofocus="true"> 
    <button type="button" class="secondary-button" @click="sendChatText()">Senden</button> 
  </div>
</template>
<script>
import peer from '../mixins/peer';
export default {
  name: "Login",
  mixins: [peer],
  data: function() {
    return {
      myPeer: null,
      myConnection: null,
      receiverID: null,
      chatText: null
    }
  },
  methods: {
    establishConnection: function establishConnection() {
      this.myConnection = peer.methods.join(this.myPeer, this.receiverID);
      console.log("#### #### #### ####");
      console.log("Debug Block:");
      console.log("MY PEER:");
      console.log(this.myPeer);
      console.log("MY CONNCECTION:");
      console.log(this.myConnection);
      console.log("#### #### #### ####");
    },
    sendChatText: function sendChatText() {
      if(this.myConnection){
        peer.methods.sendMessage(this.myConnection, this.chatText);
      } else {
        var connections = this.myPeer["connections"];
        var connectionKeys = Object.keys(this.myPeer["connections"]);
        for (var i = 0; i < connectionKeys.length; i++){
          var connectionKey = connectionKeys[i];
          connections[connectionKey].send(this.chatText);
          peer.methods.sendMessage(connections[connectionKey], this.chatText);
        }
      }
    }
  },
  mounted() {
    this.myPeer = peer.methods.initPeerJS();
  }
};
</script>