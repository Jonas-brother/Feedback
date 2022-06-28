import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyCRJ5bl0f5vl8HtB_jPeLjk9jbBWwf4bhY",
    authDomain: "feed-webbu-back.firebaseapp.com",
    projectId: "feed-webbu-back",
    storageBucket: "feed-webbu-back.appspot.com",
    messagingSenderId: "365298701275",
    appId: "1:365298701275:web:9ca1074c22a9b9e9068dfe",
    measurementId: "G-5884HFY4K6"
  }
)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;