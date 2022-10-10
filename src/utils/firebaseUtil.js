import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
});

export const auth = getAuth(app);

// create new user
export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// read exist user
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// logout process
export const logout = () => {
  signOut(auth);
};
