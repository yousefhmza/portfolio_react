import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCprDTHjagcKiWKk1BrLhh-fLk2Bnoi1rQ",
  authDomain: "portfolio-da3fa.firebaseapp.com",
  projectId: "portfolio-da3fa",
  storageBucket: "portfolio-da3fa.appspot.com",
  messagingSenderId: "766211787510",
  appId: "1:766211787510:web:d46a332cd8c221eacafad7",
  measurementId: "G-N76MNJY3K4",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
