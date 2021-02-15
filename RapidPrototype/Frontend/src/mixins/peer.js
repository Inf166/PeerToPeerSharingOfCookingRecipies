import Peer from "../../node_modules/peerjs";
export default {
    data: function() {
        return {
            myPeerId: '',
            myPeerObject: null
        }
    },
    computed: {

	},
    methods: {
        getPeerId: async function(peer){
            return new Promise(function (resolve, reject) {
                peer.on('open', function (peerID) {
                    if (peerID) {
                        resolve(peerID);
                    } else {
                        reject(Error('User could not be found.'));
                    }
                });
            });
        },
        getPeerObject: function getPeerObject() {
            return this.myPeerObject;
        },
        sendMessage: function sendMessage(connection, message) {
            connection.send(message);
        },   
        join: function join(peer ,receiverID) {        
            var myConnection = peer.connect(receiverID, {
                reliable: true
            });

            myConnection.on('open', function () {
                console.log("Connected to: " + myConnection.peer);
            });
            // Handle incoming data (messages only since this is the signal sender)
            myConnection.on('data', function (data) {
                console.log(data);
            });
            myConnection.on('close', function () {
                console.log("Connection closed");
            });
            myConnection.send("send-recipies");
            return myConnection;
        },
        closePeer: function closePeer(peer) {
            peer.close();
            peer = null;
            return peer;
        },
        closeConn: function closeConn(conn) {
            conn.close();
            conn = null;
            return conn;
        },
        initPeerJS: function initPeerJS(){
            var myPeer = new Peer(null, {
                debug: 3,
                config: {
                    iceServers: [
                    {
                        urls: 'stun:stun.stunprotocol.org'
                    },
                    {
                        urls: 'turn:numb.viagenie.ca',
                        credential: 'epws2020cobanmai',
                        username: 'joel_maximilian.mai@smail.th-koeln.de'
                    },
                ]}    
            });
            myPeer.on('open', function (peerID) {
                console.log("> Peer: on open", peerID);
            });
            myPeer.on('connection', function (connection) {
                console.log("> Peer: on connection", connection);
                connection.on('open', function() {
                    console.log("> Peer: Connection: on open ", connection.peer);
                    connection.send("Hello other User.");
                    // Send User updated Recipies here.
                });
                connection.on('data', function(data) {
                    console.log("> Peer: Connection: on data ", data);
                    // Handle User Requests here.
                    switch (data) {
                        case "Hello":
                            connection.send("Hello to you Sir!");
                            break;
                        case "Bye":
                            connection.send("Have a nice Day Sir!");
                            break;
                        default:
                          connection.send("No Answer found to that command.")
                          break;
                      }
                });
                connection.on('close', function() {
                    console.log("> Peer: Connection: on close");
                });
            });
            myPeer.on('disconnected', function () {
                console.log("> Peer: on disconnected");

            });
            myPeer.on('close', function () {
                console.log("> Peer: on close");

            });
            myPeer.on('error', function (error) {
                console.log("> Peer: on error", error);
            });
            this.myPeerObject = myPeer
            return this.myPeerObject;
        }
    },
    mounted() {
        
    }
}