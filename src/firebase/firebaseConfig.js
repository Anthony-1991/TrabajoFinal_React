import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Q2DJypsKMwWCGa1w7RVC1WIGWg9lZws",
  authDomain: "perifericos-gamers.firebaseapp.com",
  projectId: "perifericos-gamers",
  storageBucket: "perifericos-gamers.appspot.com",
  messagingSenderId: "405350535697",
  appId: "1:405350535697:web:a1f8799ba8b95dbdb317b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
