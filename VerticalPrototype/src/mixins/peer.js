import Peer from "../../node_modules/peerjs";
export default {
    data: function() {
        
    },
    computed: {

	},
    methods: {
        fetchJoin: async function fetchJoin(peer ,receiverID) {        
            return new Promise((resolve, reject) => {
                var myConnection = peer.connect(receiverID, {
                    reliable: true
                });
                myConnection.on('open', function () {
                    console.log("Connected to: " + myConnection.peer);
                    myConnection.send("GET/RECIPIES");
                });
                // Handle incoming data (messages only since this is the signal sender)
                myConnection.on('data', function (data) {
                    console.log("> Peer: Connection: on data ", data);
                    resolve(data);
                });
                myConnection.on('close', function () {
                    console.log("Connection closed");
                });
                myConnection.on('error', function (err) {
                    console.log("Connection error");
                    reject(err);
                });
            });            
        },
        getPeerId: async function(peer){
            return new Promise(function (resolve, reject) {
                (peer.id != undefined) ? resolve(peer.id) : reject("Fehler, PeerID konnte nicht geladen werden");
            });
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
                console.log("> Peer: Connection: on data ", data);
                console.log(data);
            });
            myConnection.on('close', function () {
                console.log("Connection closed");
            });
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
            return new Promise(function (resolve, reject) {
                var myPeer = new Peer(null, {
                    debug: 0,
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
                    resolve(myPeer);
                });
                myPeer.on('connection', function (connection) {
                    console.log("> Peer: on connection", connection);
                    connection.on('open', function() {
                        console.log("> Peer: Connection: on open ", connection.peer);
                    });
                    connection.on('data', function(data) {
                        console.log("> Peer: Connection: on data ", data);
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
                    reject(error);
                    console.log("> Peer: on error", error);
                });
            });
        }
    },
    mounted() {
        
    }
}