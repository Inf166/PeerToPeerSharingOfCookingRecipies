import firebase from '../../node_modules/firebase';
export default {
    methods: {
        initCloudMessaging: function(){
            const messaging = firebase.messaging();
        messaging.requestPermission()
        .then(function () {
            console.log("Notification permission granted.");
            // get the token in the form of promise
            return messaging.getToken({vapidKey: 'BLp8X9VOtO33mCBL0PKzAmL38ldpCe781WRvmYvrmzxu4VTNGQtYFAx7dqjGn5PTEsFQcpXcAMgrFuYLwmrIYK0'})
        })
        .then(function(token) {
            console.log(token);
        })
        .catch(function (err) {
            console.log("Unable to get permission to notify.", err);
        });
        }
    },
    mounted() {
        this.initCloudMessaging();
    }
}