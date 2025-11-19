
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// KONFIGURASI FIREBASE
// Silakan ganti nilai di bawah ini dengan konfigurasi dari Firebase Console Anda.
// Caranya: Buka Console -> Project Settings -> General -> Scroll ke bawah ke "Your apps" -> Config
const firebaseConfig = {
  apiKey: "AIzaSyB5ZbwYMr6M_fWZr3vqxivXE-G0yl_91O8",
  authDomain: "bacolbali83.firebaseapp.com",
  projectId: "bacolbali83",
  storageBucket: "bacolbali83.firebasestorage.app",
  messagingSenderId: "671038628318",
  appId: "1:671038628318:web:c4accceabdb6e55346fd4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
