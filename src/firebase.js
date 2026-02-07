
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu88A1OHWSh9pjufuNYJV9IQ6u_Xia7_g",
  authDomain: "blog-app-20964.firebaseapp.com",
  projectId: "blog-app-20964",
  storageBucket: "blog-app-20964.firebasestorage.app",
  messagingSenderId: "82689910748",
  appId: "1:82689910748:web:34a88bceed9a39296d5119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);