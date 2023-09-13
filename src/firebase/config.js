import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRkVUqwzQJ1oTlX-4y8hxwvtd3njYVT6c",
  authDomain: "react-pizza-2a67b.firebaseapp.com",
  projectId: "react-pizza-2a67b",
  storageBucket: "react-pizza-2a67b.appspot.com",
  messagingSenderId: "1039466332502",
  appId: "1:1039466332502:web:f32020414f31d0667f16f7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
