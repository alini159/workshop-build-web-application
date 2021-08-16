import Vue from 'vue';
import firebase from 'firebase';
import store from "../stores";

var firebaseConfig = {
  apiKey: "AIzaSyBq_aM1A3CkNg5kgSO7xGpRYM2dl4Pehpg",
  authDomain: "workshop-web-app-vuejs-497c2.firebaseapp.com",
  projectId: "workshop-web-app-vuejs-497c2",
  storageBucket: "workshop-web-app-vuejs-497c2.appspot.com",
  messagingSenderId: "414493828058",
  appId: "1:414493828058:web:03556d0f43a139489196e3",
  measurementId: "G-9YW0VZGLHV"
}
  
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth().onAuthStateChanged(user => {
    store.dispatch("addUser", { name: user.displayName, email: user.email });
  });
    
  Vue.prototype.$firebase = firebase;

  export default firebase;