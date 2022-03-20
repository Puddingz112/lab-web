import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs_Q1rl41I0UBMntCJW45B1ZPjA-Rybzc",
  authDomain: "vue-fire-operetor.firebaseapp.com",
  databaseURL: "https://vue-fire-operetor-default-rtdb.firebaseio.com",
  projectId: "vue-fire-operetor",
  storageBucket: "vue-fire-operetor.appspot.com",
  messagingSenderId: "517278902721",
  appId: "1:517278902721:web:4054bf2e8d45a3c0d12740",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
