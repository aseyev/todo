import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJst_S7qFPxhcnn0OlGAI1TzwDL6dz7y0",
    authDomain: "todo-ace.firebaseapp.com",
    databaseURL: "https://todo-ace.firebaseio.com",
    projectId: "todo-ace",
    storageBucket: "todo-ace.appspot.com",
    messagingSenderId: "1077319284729",
    appId: "1:1077319284729:web:fd827f5379a32e136f2f28"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({})
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;