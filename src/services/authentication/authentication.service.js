import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxmjUhGGFIzrnykZnOgkbNtSwv0DxzBlU",
  authDomain: "mealstogo-35394.firebaseapp.com",
  projectId: "mealstogo-35394",
  storageBucket: "mealstogo-35394.appspot.com",
  messagingSenderId: "260410932506",
  appId: "1:260410932506:web:a7fd09d9dcde3fe00580a3",
};
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

export const loginRequest = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const checkAuthState = async (callback, onError) => {
  return onAuthStateChanged(auth, callback, onError);
};

export const logOut = async () => {
  return signOut(auth);
};
