import firebase from '../../node_modules/firebase';
export default {
    methods: {
        initDatabase: function(){
            var database = firebase.database();
            var ref = database.ref('users');
            return ref;
        }
    },
    mounted() {
    }
}