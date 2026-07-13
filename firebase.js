// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPi2IkYjAiQH3OS28T63zx9d1Y-X85GGA",
  authDomain: "demon-field-reports.firebaseapp.com",
  projectId: "demon-field-reports",
  storageBucket: "demon-field-reports.firebasestorage.app",
  messagingSenderId: "189662871738",
  appId: "1:189662871738:web:e6eba25ccbc9cbb5fc0283"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };