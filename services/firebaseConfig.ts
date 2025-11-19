
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// KONFIGURASI FIREBASE
// Silakan ganti nilai di bawah ini dengan konfigurasi dari Firebase Console Anda.
// Caranya: Buka Console -> Project Settings -> General -> Scroll ke bawah ke "Your apps" -> Config
const firebaseConfig = {
  apiKey: "AIzaSyCBiqs08gZcaPPaFJetc6otN2ZjJG63kvM",
  authDomain: "gede8323.firebaseapp.com",
  projectId: "gede8323",
  storageBucket: "gede8323.firebasestorage.app",
  messagingSenderId: "722158180612",
  appId: "1:722158180612:web:3c921b67d6be8e2a275851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
