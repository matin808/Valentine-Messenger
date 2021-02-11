// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDVUE7l1EDrOKzSuv16pvUShCfvuGoE8R4",
    authDomain: "chat-application-44a11.firebaseapp.com",
    projectId: "chat-application-44a11",
    storageBucket: "chat-application-44a11.appspot.com",
    messagingSenderId: "538325395384",
    appId: "1:538325395384:web:3d9599e2e4d7253369114d",
    measurementId: "G-73BHEHZJ96"
  };
  


const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();

export default database;