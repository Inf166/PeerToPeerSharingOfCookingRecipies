const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: 9000, path: '/myapp' });

// peerServer.listen(9000, () => console.log('server is running on port 9000'));