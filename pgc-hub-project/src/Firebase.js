// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "pgc-hub.firebaseapp.com",
  projectId: "pgc-hub",
  storageBucket: "pgc-hub.appspot.com",
  messagingSenderId: "822329903056",
  appId: "1:822329903056:web:1884a49d938f8ad7e45bd5",
  measurementId: "G-QENRJMWTDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
 export const db = getFirestore(app)
 export const storage = getStorage(app)
export default app; 