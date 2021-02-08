import Peer from "../../node_modules/peerjs";
export default {
    data: function() {
        return {
            peerConnection: null,
            connConnection: null,
            receiverID: null,
            chatText: null,
            isSender: false
        }
    },
    computed: {
        printConnectionObject: function () {
            console.log(this.connConnection);
            return this.connConnection;
        },
		getConnectionPeerId: function () {
			return this.connConnection.peer;
        },
        getConnectionPeerStatus: function () {
            if(this.connConnection.open && this.connConnection){
                return true
            } else {
                return false;
            }
        }
	},
    methods: {
        join: function join() {
            // Close old connection
            if (this.getConnectionPeerStatus) {
                console.log("> Deleting old Connection")
                this.connConnection.close();
            }
            // Create connection to destination peer specified in the input field
            Object.create(this.connConnection, this.peerConnection.connect(this.receiverID, {
                reliable: true
            }));

            this.connConnection.on("open", function () {
                console.log("Connected to: " + this.getConnectionPeerId);
            });
            // Handle incoming data (messages only since this is the signal sender)
            this.connConnection.on("data", function (data) {
                console.log("Data recieved: " + data);
            });
            this.connConnection.on("close", function () {
                console.log("Connection closed");
            });
        },
        sendText: function sendText() {
            if (this.getConnectionPeerStatus) {
                var msg = this.chatText;
                this.chatText = "";
                this.connConnection.send(msg);
                console.log("Sent: " + msg)
              } else {
                console.log("No Connection found...\n > Please try to connect first.");
              }
        },     
        initPeerJS: function initPeerJS(){
            this.isSender = (this.receiverID != null) ? true : false;
            var isSenderOutput = (this.isSender) ? "Client is Sender" : "Client is Receiver";
            console.log(isSenderOutput);
            Object.create(this.peerConnection, new Peer(null, {
                debug: 3,
                config: {
                    iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    },
                    {
                        urls: "turn:numb.viagenie.ca",
                        credential: "epws2020cobanmai",
                        username: "joel_maximilian.mai@smail.th-koeln.de"
                    },
                ]}    
            }).prototype.__proto__);
            Object.assign(this.peerConnection, new Peer(null, {
                debug: 3,
                config: {
                    iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    },
                    {
                        urls: "turn:numb.viagenie.ca",
                        credential: "epws2020cobanmai",
                        username: "joel_maximilian.mai@smail.th-koeln.de"
                    },
                ]}    
            }));
            console.log(console.log(this.peerConnection));
            this.peerConnection.on("open", function (id) {        
                console.log("ID: " + id);
                document.getElementById("my-id").innerHTML += (": " + id);
                console.log("Awaiting connection...");
            });
            this.peerConnection.on("connection", function (c) {
                if(this.isSender){
                    // Disallow incoming connections
                    c.on('open', function() {
                    c.send('Sender does not accept incoming connections');
                    setTimeout(function() { c.close(); }, 500);
                    });
                } else {
                    console.log("Connecting...");
                    // Allow only a single connection
                    if (this.conn && this.conn.open) {
                    c.on("open", function() {
                        c.send("Already connected to another client");
                        setTimeout(function() { c.close(); }, 500);
                    });
                    return;
                    }
                    Object.create(this.connConnection, c.prototype.__proto__);
                    Object.assign(this.connConnection, c);
                    // this.set(this.conn, c);
                    // this.selected[key] = 'selected';

                    console.log("Connected to: " + this.getConnectionPeerId);
                    // Ready()
                    this.connConnection.on("data", function (data) {
                        console.log("Data recieved: " + data);
                    });
                    this.connConnection.on("close", function () {
                        console.log("Connection reset\n Awaiting connection...");
                        Object.assign(this.connConnection, null)
                    });
                }
                var isSenderOutput = (this.isSender) ? "Client is Sender" : "Client is Receiver";
                console.log(isSenderOutput);
                console.log("### Connection Object ###");
                console.log(this.connConnection);
            });
            this.peerConnection.on("disconnected", function () {
                console.log("Connection lost.\n > Please reconnect");
            });
            this.peerConnection.on("close", function() {
                Object.assign(this.connConnection, null)
                console.log("Connection destroyed");
            });
            this.peerConnection.on("error", function (err) {
                console.log(err);
                alert("" + err);
            });

        }  
    },
    mounted() {
    }
}