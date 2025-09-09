// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4mC5CK0TIYEyWGo-kgkFg0OpBzUACgrE",
  authDomain: "lmsipa-87c6c.firebaseapp.com",
  projectId: "lmsipa-87c6c",
  storageBucket: "lmsipa-87c6c.firebasestorage.app",
  messagingSenderId: "865443748444",
  appId: "1:865443748444:web:6e7930df6cdba5f402a499",
  measurementId: "G-KGDH2GRRZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, analytics };
export default app;