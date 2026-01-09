import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhq74X3qe-zJsx6eCAoLvINrUFS7Yel54",
  authDomain: "go-online-estates.firebaseapp.com",
  projectId: "go-online-estates",
  storageBucket: "go-online-estates.firebasestorage.app",
  messagingSenderId: "23808959388",
  appId: "1:23808959388:web:e6146fcb5981f3ce8b1e59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
