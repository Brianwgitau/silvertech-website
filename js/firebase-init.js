import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = window.FIREBASE_CONFIG || {};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  throw new Error('Firebase config was not loaded before initialization.');
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export function getCurrentUser() {
  return auth.currentUser;
}
